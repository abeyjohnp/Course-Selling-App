import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style ={{
        display : "flex",
        gap : "20px",
        padding : "20px",
        borderBottom : "1px solid gray"
    }}>
        <Link to="/">Home</Link>
        <Link to="/viewcourses">Courses</Link>
    </div>
   
    
  )
}
