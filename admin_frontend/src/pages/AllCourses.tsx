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
        <div className="catalog-container">
            <h1 className = "catalog-title">ALL COURSES CURRENTLY LIVE</h1>
            <div className="catalog-grid">
                {courses.map((course)=>(
                <div key={course.id} className='course-card'>
                    <img src={course.thumbnail} className = "course-thumbnail"/>
                    <div className="course-body">
                        <h3 className="course-title">{course.title}</h3>
                        <p className="course-description">{course.description}</p>
                    </div>
                    <div className="course-id-tag">
                        ID: {course.id}
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}
