import express from "express"
import { createNote } from "../contollers/note.js"
import {verifyUser} from "../utils/verifyUser.js"

const router = express.Router()

router.post("/create", createNote)

export default router