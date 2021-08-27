const Router = require("express");
const Task = require("../models/Task");
const router = new Router();
const Comment = require("../models/Comment");
const User = require("../models/User");

router.post("/commentUpload", async (req, res) => {
  try {
    let author = await User.findOne({ _id: { $eq: req.body.author } });
    let task = await Task.findOne({ _id: { $eq: req.body.task } });
    const comment = new Comment({
      user: author,
      task: task._id,
      message: req.body.message,
    });
    await comment.save();
    return res.json({ message: "Комментарий создан!" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error", error });
  }
});
router.get("/comments/:id", async function (req, res) {
  const id = req.params.id;
  await Comment.find({task:id}, function (err, comments) {
    if (err) return console.log(err);
    res.send(comments);
  });
});
router.get("/comments/", async function (req, res) {
  await Comment.find({}, function (err, comments) {
    if (err) return console.log(err);
    res.send(comments);
  });
});
router.delete("/comments/:id", function (req, res) {
  const id = req.params.id;
  Comment.findByIdAndDelete(id, function (err, comment) {
    if (err) return console.log(err);
    res.send(comment);
  });
});

module.exports = router;
