import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
        <h2 className="navbar-brand">The Course App</h2>
        <div className="navbar-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/viewcourses">Courses</Link>
        </div>
        
    </nav>
   
    
  )
}
