// Creating mongoose model and schema

const mongoose = require("mongoose");
const propsSchema = new mongoose.Schema({
    class:{type:String,required:true},
    name:{type:String,required:true},
    function:{type:String,required:true},
});

const Props = new mongoose.model("Props",propsSchema);
module.exports = Props;