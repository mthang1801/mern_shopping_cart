import  mongoose from "mongoose";

const Schema = mongoose.Schema;

//create Schema 
const userSchema = new Schema({
  name : { type : String , required : true },
  email : { type : String , required : true , unique : true},
  password : { type : String , required : true },
  register_date : { type : Date, default : Date.now },
})

module.exports = mongoose.model("user", userSchema);