import Note from "../models/Note.js"

export const showNotes = async(req,res,next) => {
  try{
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch(error){
    next(error)
  }
}