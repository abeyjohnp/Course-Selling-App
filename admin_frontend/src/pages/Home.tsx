import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div style ={{display : "flex",
            flexDirection : "column",
            gap : "20px",
            alignItems:"center"}}
          >
      <h1>Welcome to the Admin Dashboard</h1>
      <div style={{display : "flex", flexDirection:"column", gap:"10px"}} >
        <button onClick={()=> navigate("/AllCourses")}>ALL COURSES</button>
        <button onClick={()=> navigate("/Analytics")}>ANALYTICS</button>
        <button onClick={()=> navigate("/AddCourse")}>ADD COURSE</button>
        <button onClick={()=> navigate("/EditCourse")}>EDIT COURSE</button>
      </div>     
    </div>
  )
}
