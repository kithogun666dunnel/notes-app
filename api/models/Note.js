import mongoose from "mongoose"

const noteSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true
    },
    body:{
      type:String,
      required:true
    },
    user:{
      type:String,

    }
}, {timestamps:true})

const Note = mongoose.model("Note", noteSchema)
export default Note