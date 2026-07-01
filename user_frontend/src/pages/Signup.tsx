import React from 'react'
import {useState} from "react"
import api from "../api/api"
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [username, setUsername ] = useState("")
  const [password, setPassword ] = useState("")
  const [loading, setLoading] = useState(false)


  const navigate =  useNavigate()

  async function handleSignup()
  {
    setLoading(true)
    try {
      let data = {username, password}
      let response = await api.post("/user/signup", data)
      alert("Sign up is succesfull! Please sign in!")
      navigate("/signin")
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return(
    <div>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange = {(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
      </div>
      <button onClick = {handleSignup} disabled={loading}>{loading ? "loading..." : "Signup"}</button>
      <p>Already have an account ? <Link to="/signin">Signin</Link></p>
    </div>
  )
}
