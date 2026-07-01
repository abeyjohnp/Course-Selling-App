import { BrowserRouter , Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home"
import {ViewCourses} from "./pages/ViewCourses"
import { APITester } from "./APITester";
import "./index.css"
import  Signup from "./pages/Signup";
import Signin from "./pages/Signin";

export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/Signin" element = {<Signin/>}/>
      <Route path = "/Signup" element = {<Signup/>}/>
      <Route path = "/viewcourses" element = {<ViewCourses/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
