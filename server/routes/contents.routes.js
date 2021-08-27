const Router = require("express");
const Task = require("../models/Task");
const router = new Router();
const User = require("../models/User");
const fileMiddleware = require("../middleware/specialMiddleware");
const Content = require("../models/Content");

router.post("/contentUpload", fileMiddleware.single("file"), async (req, res) => {
    console.log(req)
    try {
    
      let Author = await User.findOne({ _id: { $eq: req.body.author } });
        let Preview;
        if(req.body.type ==='photo')
        Preview = ''
        else 
        Preview = '2:38'
        let date = new Date()
        date = date.toLocaleTimeString().slice(0,-3) + ' '+date.toLocaleDateString()
      const content = new Content({
        name: req.body.name,
        type: req.body.type,
        dateCreated: date,
        author: Author.name,
        format: req.body.fileType,
        url: 'http://localhost:5000/static/'+req.body.fileName,
        preview:Preview
      });
      await content.save();
      const postData = {
        status:'done'
      };
    await Task.findByIdAndUpdate(
        { _id: req.body.taskId },
        postData,
        { new: true },
        function (err, task) {
          if (err) return res.send(err);
          res.send(task);
        }
      );
      return res.json({ message: "Контент создан!" });
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  });
  module.exports = router;