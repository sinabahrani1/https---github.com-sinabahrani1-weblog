const mongoose = require('mongoose');
const blogschema  = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:10,
        maxlength:300,
    },
    body:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"عمومی",
        enum:["عمومی","خصوصی"] 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
}) 
module.exports = mongoose.model("blog",blogschema)