const { Schema, model } = require("mongoose");

const Notification = new Schema({
  type: { type: String, required: true },
  date: { type: String, required: true },
  message: { type: String },
  user: { type: String },
  task: { type: String },
});

module.exports = model("Notification", Notification);