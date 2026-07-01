import api from '@/api/api'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface ContentItem{
    id : number,
    title : string,
    videoUrl : string,
    courseId : string,
    createdAt : string
}

export default function AddCourseContent() {
    const [courseID, setCourseID] = useState("")
    const [title, setTitle] =  useState("")
    const [videoURL, setVideoURL] = useState("")

    const navigate = useNavigate()

    async function handleClick()
    {
        const data = {title, videoUrl : videoURL, courseId : Number(courseID) } 
        const response = await api.post("/admin/content",data)
        alert("Course Content Added!")
        navigate("/home")
    }

    return (
        <div style ={{display : "flex",
                flexDirection : "column",
                gap : "20px",
                alignItems:"center"}}>
            <h1>ADD COURSE CONTENT</h1>
            
            <div>
                <label>Enter Course ID </label>
                <input type ="number" value={courseID} onChange={(e) => setCourseID(e.target.value)}></input>
            </div>
            <div>
                <label>Title </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div>
                <label>Video URL </label>
                <input type="text" value={videoURL} onChange={(e) => setVideoURL(e.target.value)}></input>
            </div>
           
            <button  onClick={handleClick}> Create New Course </button>
        </div>
    )
}
