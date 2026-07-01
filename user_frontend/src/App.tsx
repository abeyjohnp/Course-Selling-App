import { BrowserRouter , Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home"
import {ViewCourses} from "./pages/ViewCourses"
import { APITester } from "./APITester";
import  Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import UserLayouts from "./layouts/UserLayouts";
import CourseContent from "./pages/CourseContent";



export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/Signin" element = {<Signin/>}/>
      <Route path = "/Signup" element = {<Signup/>}/>
      <Route element={<UserLayouts/>}>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/viewcourses" element = {<ViewCourses/>}/>
        <Route path = "/coursecontent/:courseId" element = {<CourseContent/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
