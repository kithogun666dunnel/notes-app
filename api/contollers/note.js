import Note from "../models/Note.js"

export const createNote = async(req,res,next) => {
  try{
    console.log(req.body)
    const note = await Note.create(req.body)
    res.status(200).json(note)
  } catch(error){
    next(error)
  }
}
