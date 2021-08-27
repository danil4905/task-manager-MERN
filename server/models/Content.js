const { Schema, model } = require("mongoose");

const Content = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  dateCreated: { type: String },
  author: { type: String, required: true },
  format: { type: String },
  url: { type: String, required: true },
  preview: { type: String },
});

module.exports = model("Content", Content);
