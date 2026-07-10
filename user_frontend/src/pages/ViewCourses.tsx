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
        <div className="catalog-container">
            <h1 className="catalog-title">Explore Courses</h1>
            <div className="catalog-grid">
            {courses.map((course)=>(
                <div key={course.id} className="course-card">

                    <img src={course.thumbnail} className="course-thumbnail" />

                    <div className="course-body">
                        <h3 className="course-title">{course.title}</h3>
                        <p className="course-description">{course.description}</p>
                        <button onClick = {() => goto(course.id)}>
                        Go to course {course.id}
                    </button>
                    </div>
                    
                </div>
            ))}
            </div>
        </div>
    )


}