import React from 'react'
import {useState} from "react"

export default function Signin() {
  const [username, setUsername ] = useState("")
  const [password, setPassword ] = useState("")
  function handleSignin()
  {
    console.log(username, password)
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
      <button onClick = {handleSignin}>Signin</button>
    </div>
  )
}
