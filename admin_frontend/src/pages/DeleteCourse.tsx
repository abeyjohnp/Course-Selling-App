import api from '@/api/api'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DeleteCourse() {
  const [courseId, setCourseId] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleDelete()
  {
    setLoading(true)
    try
    {
        await api.delete(`/admin/courses/${Number(courseId)}`)
        alert("Course has been deleted!")
        
    }
    catch(error)
    {
        alert("DELETION FAILS!");
    }
    finally
    {
        setLoading(false)
    }
  }

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        padding: "40px"
    }}>
        <h1>THE DELETE COURSE PAGE</h1>
        <div>
            <label>Course ID TO DELETE : </label>
            <input 
                type = "number"
                value = {courseId}
                placeholder='Enter ID number'
                onChange={(e) => setCourseId(e.target.value)}
                style = {{
                    padding : "8px",
                    borderRadius : "4px"
                }}
            />
        </div>
        <button
        disabled = {loading}
        onClick={handleDelete}
        >{loading ? "DELETING...." : "DELETE COURSE"}</button>
    </div>
  )
  
}
