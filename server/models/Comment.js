const { Schema, model } = require("mongoose");


 const Comment = new Schema({
   user: { type: Object  },
   task:{type:String},
   message:{type:String,required:true},
   dateCreated:{type:Date, default: Date.now}
 });

 module.exports = model('Comment',Comment);