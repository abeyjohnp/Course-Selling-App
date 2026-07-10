import api from '@/api/api'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signin() {

  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleClick()
  {
    setLoading(true)
    try
    {
      let data = {username, password}
      let response = await api.post("/admin/signin",data)
      localStorage.setItem("token", response.data.token)
      alert("Sign in admin success")
      navigate("/home")
    }
    catch(error)
    {
      alert("Signin fails")
    }
    finally
    {
      setLoading(false)
    }
  }

  return (
    <div className ="signin-container">
      <div className = "signin-card">
        <h1>SIGN-IN PAGE - ADMIN</h1>
        <div className="input-group">
          <label>Username </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div className="input-group">
          <label>Password </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button disabled={loading} onClick={handleClick}> {loading ? "loading..." : "Signin"} </button>
      </div>
    </div>
    
  )
}
