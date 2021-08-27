const Router = require("express");
const Task = require("../models/Task");
const router = new Router();
const User = require("../models/User");
const fileMiddleware = require("../middleware/file.middleWare");
const Comment = require("../models/Comment");

router.post("/tasksUpload", fileMiddleware.array("files"), async (req, res) => {
  try {
    let newTask;
    let taskAuthor = await User.findOne({ _id: { $eq: req.body.author } });
    let taskExecutor = await User.findOne({ _id: { $eq: req.body.executor } });
    let files;
    if (req.files) {
      files = req.files;
    } else files = [];

    newTask = {
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      dateExpired: req.body.dateExpired,
      dateCreated: Date.now(),
      author: taskAuthor,
      executor: taskExecutor,
      files: files,
      comments: [],
      contents: [],
      status: "inWork",
    };
    const task = new Task({
      name: newTask.name,
      type: newTask.type,
      description: newTask.description,
      dateExpired: newTask.dateExpired,
      dateCreated: newTask.dateCreated,
      author: taskAuthor,
      executor: taskExecutor,
      files: files,
      comments: [],
      contents: [],
      status: "inWork",
    });
    await task.save();
    return res.json({ message: "Задача создана!" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error", error });
  }
});
router.get("/tasks", function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) return console.log(err);
    res.send(tasks);
  });
});
router.get("/tasks/:id", function (req, res) {
  const id = req.params.id;
  Task.findOne({ _id: id }, function (err, task) {
    if (err) return console.log(err);
    res.send(task);
  });
});
router.delete("/tasks/:id", function (req, res) {
  const id = req.params.id;
  Comment.deleteMany({task:id},function (err, task) {
    if (err) return console.log(err);
  })
  Task.findByIdAndDelete(id, function (err, task) {
    if (err) return console.log(err);
    res.send(task);
  });
});

router.put(
  "/tasks/:id",
  fileMiddleware.array("files"),
  async function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const id = req.params.id;
    let files;
    if (req.files) {
      files = req.files;
    } else files = [];
    let taskAuthor = await User.findOne({ _id: { $eq: req.body.author } });
    let taskExecutor = await User.findOne({ _id: { $eq: req.body.executor } });
    const currentTask = await Task.findOne({ _id: id });
    const dateCreated = currentTask.dateCreated;
    const comments = currentTask.comments;
    const contents = currentTask.contents;
    const newTask = {
      name: req.body.name,
      type: req.body.type,
      desctiption: req.body.description,
      files: files,
      author: taskAuthor,
      executor: taskExecutor,
      dateExpired: req.body.dateExpired,
      dateCreated: dateCreated,
      comments: comments,
      contents: contents,
    };
    Task.findOneAndUpdate(
      { _id: id },
      newTask,
      { new: true },
      function (err, task) {
        if (err) return console.log(err);
        res.send(task);
      }
    );
  }
);

router.patch(
  "/task/:id",
  fileMiddleware.array("files"),
  async function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if (!req.params.id) return res.sendStatus(400);
    const id = req.params.id;
    const task =  await Task.findById({_id:id});
    
    let newFiles;
    if(req.body.files) {
      newFiles =  [...task.contents,...req.files]
    }
    else {
      newFiles =  req.files
    }
    const postData = {
      contents: newFiles,
      status:'pending'
    };
  await Task.findByIdAndUpdate(
      { _id: id },
      postData,
      { new: true },
      function (err, task) {
        if (err) return res.send(err);
        res.send(task);
      }
    );
  }
);
router.get("/task/contents/:id",async function (req,res) {
  const id = req.params.id;
  Task.findById({_id:id})
})

module.exports = router;
