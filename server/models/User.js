const {Schema, model} = require("mongoose")



const User = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  role: {type:String}
});

module.exports = model('User',User);