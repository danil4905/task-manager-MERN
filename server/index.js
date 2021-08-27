const express = require('express')
const mongoose= require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth.routes')
const app = express()
const User = require('./models/User')
const Content = require('./models/Content')
const Notification = require('./models/Notification')
const path = require("path");
const PORT = config.get('serverPort')
const jsonParser = express.json();
const corsMiddleware = require('./middleware/cors.middleware')
const fileMiddleware = require('./middleware/fileMiddleware')

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth',authRouter)

app.get("/api/users", function (req, res) {
  User.find({}, function (err, users) {
    if (err) return console.log(err);
    res.send(users);
  });
});
app.get("/api/users/:id", function (req, res) {
  const id = req.params.id;
  User.findOne({ _id: id }, function (err, user) {
    if (err) return console.log(err);
    res.send(user);
  });
});
app.delete("/api/users/:id", function (req, res) {
  const id = req.params.id;
  User.findByIdAndDelete(id, function (err, user) {
    if (err) return console.log(err);
    res.send(user);
  });
});
app.put("/api/users", jsonParser,fileMiddleware.single("avatar"), function (req, res) {
  if (!req.body) return res.sendStatus(400);
  const id = req.body.id;
  const userName = req.body.name;
  let userAvatar 
  req.file ? (userAvatar = "http://localhost:5000/static/"+req.file.filename) : (userAvatar = req.body.avatar);
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  const newUser = { email: userEmail,password:userPassword,avatar:userAvatar, name: userName };

  User.findOneAndUpdate(
    { _id: id },
    newUser,
    { new: true },
    function (err, user) {
      if (err) return console.log(err);
      res.send(user);
    }
  );
});
app.patch(
  "/api/users/:id",
  fileMiddleware.single("avatar"),
  function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if (!req.params.id) return res.sendStatus(400);
    const id = req.params.id;
    let userAvatar 
    req.file
      ? (userAvatar = "http://localhost:5000/static/" + req.file.filename)
      : (userAvatar = req.body.avatar)
    const postData = {
      name:req.body.name,
      email:req.body.email,
      avatar:userAvatar
    };
    console.log(postData);
    User.findByIdAndUpdate(
      { _id: id },
      postData,
      { new: true },
      function (err, user) {
        if (err) return res.send(err);
        res.send(user);
      }
    );
  }
);
app.get("/api/contents", function (req, res) {
  Content.find({}, function (err, content) {
    if (err) return console.log(err);
    res.send(content);
  });
});
app.delete("/api/contents/:id", function (req, res) {
  const id = req.params.id;
  Content.findByIdAndDelete(id, function (err, content) {
    if (err) return console.log(err);
    res.send(content);
  });
});
app.get("/api/notifications", function (req, res) {
  Notification.find({}, function (err, content) {
    if (err) return console.log(err);
    res.send(content);
  });
})

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        
        app.listen(PORT,() => {
            console.log('Server started on port ', PORT)
        })
    } catch (error) {
        
    }
}
start()