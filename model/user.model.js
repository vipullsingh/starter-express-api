const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.mongoUrl);

const userSchema = mongoose.Schema({
    email:{type : String},
    pass:{type : String},
    name:{type : String},
    age:{type : Number},
})

const UserModel = mongoose.model("user",userSchema);

module.exports = {connection,UserModel};