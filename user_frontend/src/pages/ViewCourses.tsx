import { useNavigate } from "react-router-dom"
import api from "../api/api"
import { useEffect, useState } from "react";

interface Courses{
    id : number;
    title : string;
    description : string;
    thumbnail : string;
}


export function ViewCourses()
{
    const navigate = useNavigate()
    const [courses, setCourses] = useState<Courses[]>([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() =>{
        async function fetchCourses()
        {
            try
            {
                const response = await api.get("/user/courses")
                setCourses(response.data.courses)
                alert("Courses loading")
            }
            catch(error)
            {
                alert("Failed to load courses!")
            }
            finally
            {
                setLoading(false)
            }
        }
        fetchCourses()
    }, []);

    if (loading) 
    {
        return(
            <div>
                <p>LOADING COURSES!</p>
            </div>
        )
    }

    async function goto(idx : number)
    {
        navigate(`/coursecontent/${idx}`)
    }

    return (
        <>
            <h1>View Courses</h1>
            {courses.map((course)=>(
                <div key={course.id} style={{ border : "1px solid gray", padding : "10px", margin : "10px"}}>
                    <h3>{course.title}</h3>
                    <img src={course.thumbnail} width = "300px"/>
                    <p>{course.description}</p>
                    <button onClick = {() => goto(course.id)}>
                        Go to course {course.id}
                    </button>
                </div>
            ))}
        </>
    )


}