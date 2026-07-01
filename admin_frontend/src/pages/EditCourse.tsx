import api from '@/api/api'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditCourse() {
  const [courseId, setCourseId] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [loading, setLoading ] = useState(false)

  const navigate = useNavigate()

  async function handleChange()
  {
    setLoading(true)
    try
    {
      const data = {courseId : Number(courseId), title, description, url : thumbnail}
      await api.put(`/admin/course`,data)
      alert("Data Updated Successfully!")
      navigate("/home")
    }
    catch(error)
    {
      alert("UPDATION FAILS!")
    }
    finally
    {
      setLoading(false)
    }
  }

  return (
    <div style ={{display : "flex",
            flexDirection : "column",
            gap : "20px",
            alignItems:"center"}}>
      <h1>THE EDIT COURSE PAGE</h1>
      <div>
        <label>Course ID to edit : </label>
        <input
          type = "number"
          value = {courseId}
          onChange = {(e) => setCourseId(e.target.value)}
        />
      </div>
      <div>
        <label>New Title :  </label>
        <input
          type = "text"
          value = {title}
          onChange = {(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>New Description :  </label>
        <input
          type = "text"
          value = {description}
          onChange = {(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>New URL THUMBNAIL :  </label>
        <input
          type = "text"
          value = {thumbnail}
          onChange = {(e) => setThumbnail(e.target.value)}
        />
      </div>
      <button disabled = {loading} onClick={handleChange}>{loading ? "Updating..." : "Updated Course details"}</button>
    </div>
  )
}
