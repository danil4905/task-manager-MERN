const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const config = require("config");
const router = new Router();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/auth.middleware");
const photoMiddleware = require("../middleware/photoMiddleware");

router.post(
  "/registration",
  photoMiddleware.single("avatar"),
  [
    check("email", "Неправильный email").isEmail(),
    check(
      "password",
      "Пароль должен быть длиннее 3 и короче 12 символов"
    ).isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ message: "Ошибка", errors });
      }
      let newUser;
      if (req.file) {
        newUser = {
          name: req.body.name,
          email: req.body.email,
          avatar: req.file,
          role: req.body.role,
          password: req.body.password,
        };
      } else
        newUser = {
          name: req.body.name,
          email: req.body.email,
          avatar: req.body.avatar,
          role: req.body.role,
          password: req.body.password,
        };
      console.log(newUser);
      const candidate = await User.findOne({ email: { $eq: newUser.email } });

      if (candidate) {
        return res.status(400).json({
          message: `Пользователь с email ${newUser.email} уже зарегистрирован`,
        });
      }
      const hashPassword = await bcrypt.hash(newUser.password, 15);

      let avatarUrl;
      newUser.avatar
        ? (avatarUrl =
            "http://localhost:5000/static/" + newUser.avatar.filename)
        : (avatarUrl = "");
      const user = new User({
        name: newUser.name,
        email: newUser.email,
        password: hashPassword,
        avatar: avatarUrl,
        role: newUser.role,
      });
      await user.save();
      return res.json({ message: "Пользователь создан!" });
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
);

router.post(
  "/login",

  async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }
      const isPassValid = bcrypt.compareSync(password, user.password);
      if (!isPassValid) {
        return res.status(400).json({ message: "неверный пароль" });
      }
      const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
        expiresIn: "1h",
      });
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          avatar: user.avatar,
        },
      });
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error" });
    }
  }
);
router.get("/auth", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
      expiresIn: "1h",
    });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        avatar: user.avatar,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
