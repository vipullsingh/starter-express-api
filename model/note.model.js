const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
    title:{type : String},
    note:{type : String},
    category:{type : String},
    author:{type : String},
    userId:{type:String},
})
const NoteModel = mongoose.model("note",noteSchema);

module.exports = {NoteModel};