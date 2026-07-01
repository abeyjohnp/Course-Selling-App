import { APITester } from "./APITester";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddCourse from "./pages/AddCourse";
import Analytics from "./pages/Analytics";
import EditCourse from "./pages/EditCourse";
import Signin from "./pages/Signin";

export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/Signin" element = {<Signin/>}/>
      <Route path = "/AddCourse" element = {<AddCourse/>}/>
      <Route path = "/Analytics" element = {<Analytics/>}/>
      <Route path = "/EditCourse" element = {<EditCourse/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
