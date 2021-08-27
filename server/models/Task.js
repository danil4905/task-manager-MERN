const { Schema, model, ObjectId } = require("mongoose");

const Task = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  files: [{ type: ObjectId, ref: "File" }],
  author: { type: ObjectId, ref: "User" },
  executor: { type: ObjectId, ref: "User" },
  dateCreated: { type: Date, default: Date.now },
  dateExpired: { type: Date, required: true },
  contents: [{ type: ObjectId, ref: "Content" }],
});

module.exports = model('Task',Task);