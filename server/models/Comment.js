const { Schema, model, ObjectId } = require("mongoose");


 const Comment = new Schema({
   date: { type: Date, required: true },
   user: { type: ObjectId, ref: "User" },
   message:{type:String,required:true},
 });

 module.exports = model('Comment',Comment);