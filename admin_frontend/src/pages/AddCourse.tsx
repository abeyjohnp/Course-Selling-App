import api from '@/api/api'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddCourse() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const navigate = useNavigate()
  async function handleClick()
  {
    try
    {
      const data = {title, description, url : thumbnail}
      const response = await api.post("/admin/course",data)
      alert("New Course Created Successfully!")
      navigate("/home")
    }
    catch(error)
    {
      alert("Could not create a new course, try again later!")
    }
    
  }
  

  return (
    
    <div style ={{display : "flex",
            flexDirection : "column",
            gap : "20px",
            alignItems:"center"}} >
      <h1>THE ADD COURSE PAGE</h1>
      <div>
          <label>Title </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      </div>
      <div>
        <label>Description </label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      </div>
      <div>
        <label>Thumbnail </label>
        <input type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)}></input>
      </div>
      <button  onClick={handleClick}> Create New Course </button>
    </div>
    
  )
}
