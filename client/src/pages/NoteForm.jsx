import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import "../styles/global.css"


const NoteForm = () => {
  // Define state variables for title and body
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const {currentUser, loading, error} = useSelector((state)=>state.user)

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Do something with the title and body (e.g., save to database)
    
    const user = currentUser._id
    const formData = {
      title,
      body,
      user
    };
    const res = await fetch("/api/note/create",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
    })
    const data = await res.json()
    console.log('Title:', title);
    console.log('Body:', body);
    // Reset the form after submission
    
  };
  

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
      
    </form>
  );
};

export default NoteForm;
