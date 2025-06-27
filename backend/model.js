var mongoose = require("mongoose");
var studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    course:String,
    place:String
})
var studentmodel = mongoose.model("student", studentSchema)
module.exports = studentmodel;