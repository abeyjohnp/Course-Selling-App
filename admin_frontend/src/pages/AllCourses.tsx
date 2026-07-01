import api from '@/api/api'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


interface Courses{
    id : number;
    title : string;
    description : string;
    thumbnail : string;
}

export default function AllCourses() {
    const [courses, setCourses] = useState<Courses[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        async function fetchCourses()
        {
            try
            {
                const response = await api.get("/admin/courses")
                setCourses(response.data)
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
    },[])

    if (loading)
    {
        return(
            <div>
                Loading All live courses
            </div>
        )
    }

    return (
        <div style ={{display : "flex",
                flexDirection : "column",
                gap : "20px",
                alignItems:"center"}}>
            <h1>ALL COURSES CURRENTLY LIVE</h1>
            {courses.map((course)=>(
                <div key={course.id} style={{ border : "1px solid gray", padding : "10px", margin : "10px"}}>
                    <h3>{course.title}</h3>
                    <img src={course.thumbnail} width = "300px"/>
                    <p>{course.description}</p>
                </div>
            ))}
        </div>
    )
}
