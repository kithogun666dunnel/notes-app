import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage"
import {app} from "../firebase"
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutFailure, signOutStart, signOutSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "../redux/user/userSlice"
import {Link} from "react-router-dom"
import "../styles/global.css"

const NoteCard = ({ title, body }) => {
  return (
    <div className="note-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <NoteCard
          key={index} // Make sure to use a unique key for each component in the list
          title={note.title}
          body={note.body}
        />
      ))}
    </div>
  );
};

function Profile() {
  const {currentUser, loading, error} = useSelector((state)=>state.user)
  const fileRef = useRef(null)
  const [file, setFile] = useState(undefined)
  const [filePerc, setFilePerc] = useState(0)
  const [fileUploadError, setFileUploadError] = useState(false)
  const [formData, setFormData] = useState({})
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const [showListingsError, setShowListingsError] = useState(false)
  const [userListings, setUserListings] = useState([])
  const dispatch = useDispatch()
  const [notes, setNotes] = useState([{title: "Addsds", body: "Vimay", user: "Vinay"},{title: "Addsds", body: "Vimay", user: "Vinay"},{title: "Addsds", body: "Vimay", user: "Vinay"}])
  

  const handleSignOut = async() => {
    try{
      dispatch(signOutStart())
      const res = await fetch(`/api/auth/signout`)
      const data = res.json()
      console.log("Before's data", data )
      if(data.success===false){
        console.log("Mid's data", data )
        dispatch(signOutFailure(data.message))
        return
      }
      console.log("After's data", data )
      dispatch(signOutSuccess()) 
    } catch(error){
      dispatch(signOutFailure(error))
    }
  }

 

  useEffect(() => {
     const getListings = async() => {
    // Do something with the title and body (e.g., save to database)
    
    const res = await fetch("/api/user/showNotes")
    const data = await res.json()
    console.log(data, "ddsssadfsdsdf")
    setNotes(data)
    console.log(await notes, "Bhenchod")


  }
    getListings();
  }, []);
  



  return (
    <div className="notes-container">
      <div>
        <h1>Notes</h1>
        <NotesList notes={notes} />
      </div>



      <div className="display-flex justify-between mt-5">
        <button onClick={handleSignOut} type="button" class="btn btn-danger button-sign-out">Sign Out</button>
      </div>

      
      
      
    </div>
  )
}

export default Profile