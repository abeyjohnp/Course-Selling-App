import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

import React from 'react'

export default function UserLayouts() {
  return (
    <>
    <Navbar/>
    <main style={{padding : "20px"}}>
        <Outlet/>
    </main>
    </>
  )
}
