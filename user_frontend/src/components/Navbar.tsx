import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style ={{
        display : "flex",
        gap : "20px",
        padding : "20px",
        borderBottom : "1px solid gray",
        alignItems : "center"
    }}>
        <h2 style={{color:"red"}}>The Course App</h2>
        <Link to="/">Home</Link>
        <Link to="/viewcourses">Courses</Link>
    </div>
   
    
  )
}
