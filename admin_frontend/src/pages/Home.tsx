import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className = "dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome to the Admin Dashboard</h1>
        <p className="dashboard-subtitle">Select a task below to manage your courses</p>
        <div className="dashboard-grid">
            <button className="dashboard-tile" onClick={()=> navigate("/AllCourses")}>
              <span className="tile-title">All Courses</span>
              <span className="tile-desc">View and browse all live courses</span>
            </button>
            {/* <button className="dashboard-title" onClick={()=> navigate("/Analytics")}>
              
            </button> */}
            <button className="dashboard-tile" onClick={()=> navigate("/AddCourse")}>
              <span className="tile-title">Create Course</span>
              <span className="tile-desc">Add a new course to the catalog</span>
            </button>
            <button className="dashboard-tile" onClick={()=> navigate("/EditCourse")}>
              <span className="tile-title">Edit Course</span>
              <span className="tile-desc">Modify details of an existing course</span>
            </button>
            <button className="dashboard-tile" onClick={()=> navigate("/AddCourseContent")}>
              <span className="tile-title">Add Content</span>
              <span className="tile-desc">Upload video lessons to a course</span>
            </button>
            <button className="dashboard-tile" onClick={()=> navigate("/DeleteCourses")}>
              <span className="tile-title">Delete Course</span>
              <span className="tile-desc">Permanently remove a course</span>
            </button>   
        </div>
        
      </div>
    </div>
  )
}
