import React from 'react'
import {useState} from "react"
import api from "../api/api"
import { useNavigate } from 'react-router-dom'
export default function Signin() {
  const [username, setUsername ] = useState("")
  const [password, setPassword ] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSignin()
  {
    setLoading(true)
    try
    {
      let data  = {username, password}
      let response = await api.post("/user/signin",data)
      localStorage.setItem("token",response.data.token)
      alert("Signin Successfull")
      navigate("/viewcourses")
    }
    catch(error)
    {
      alert("Please Sign up")
    }
    finally
    {
      setLoading(false)
    }
  }

  return(
    <div style ={{display : "flex",
            flexDirection : "column",
            gap : "20px",
            alignItems:"center"}}>
      <h1>SIGNIN PAGE</h1>
      <div >

        <label>Username </label>
        <input type="text" value={username} onChange = {(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <label>Password </label>
        <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
      </div>
      <button disabled={loading} onClick = {handleSignin}>{loading ? "loading..." : "Signin"}</button>
    </div>
  )
}
