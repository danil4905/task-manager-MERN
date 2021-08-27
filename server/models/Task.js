const { Schema, model, ObjectId } = require("mongoose");

const Task = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  files: [{ type: Object, }],
  author: { type: Object,  },
  status:{type:String},
  executor: { type: Object, },
  dateCreated: { type: Date, default: Date.now },
  dateExpired: { type: Date, required: true },
  contents: [{ type: Object, }],
  comments:[{type:Object,}]
});

module.exports = model('Task',Task);