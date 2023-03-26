const express = require("express");
const { NoteModel } = require("../model/note.model");
const noteRouter = express();
noteRouter.use(express.json());

noteRouter.post("/addnote",async (req,res)=>{
    const newNote = req.body;
    console.log(newNote)
    try {
        const note= NoteModel(newNote);
        await note.save();
        res.status(200).send({msg:"Note created"})
    } catch (error) {
        console.log(error)
        res.status(200).send({msg:"Cannot create note"})
    }
})


noteRouter.get("/notes",async (req,res)=>{
    const newNote = req.body;
    console.log(newNote)
    try {
        const myNotes= await NoteModel.find({userId:newNote.userId});
        console.log(myNotes);
        res.status(200).send({msg:"Note fetched successfully",data:myNotes})
    } catch (error) {
        console.log(error)
        res.status(200).send({msg:"Cannot fetch notes"})
    }
})

module.exports={
    noteRouter
}