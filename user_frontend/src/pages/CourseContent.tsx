import api from "@/api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ReactPlayer from 'react-player'

interface ContentItem{
    id : number,
    title : string,
    videoUrl : string,
    courseId : string,
    createdAt : string
}


export function CourseContent(){
    const {courseId} = useParams();
    const [contents, setContents ] = useState<ContentItem[]>([])
    const [loading, setLoading ] = useState(false)
    const [isEnrolled, setisEnrolled] = useState(true)

    async function handleEnroll()
    {
        try
        {
            {
                await api.post("/user/enroll",{
                    courseId : Number(courseId)
                })
            }

            alert("Successfully enrolled in the course!")

            setisEnrolled(true)
        }
        catch(error)
        {
            console.log(error)
            alert("failed to enroll!")
        }
        

    }

    useEffect(() => {
        async function fetchContent()
        {
            try
            {
                const response = await api.get(`/user/course/content/${courseId}`)
                setContents(response.data.content)
            }  
            catch(error :any)
            {
                if (error.response.status === 403)
                {
                    setisEnrolled(false);
                }
                else
                {
                    alert("FAILED TO LOAD CONTENT!")
                }

            } 
            finally
            {
                setLoading(false)
            }
        }
        fetchContent()
    },[courseId,isEnrolled])
    
    if (loading)
    {
        return (
            <div>
                Loading course content..
            </div>
        )
    }
    if (!isEnrolled)
    {
        return(
            <div className="form-container">
                <div className="form-card" style={{ textAlign: "center" }}>
                    <h2>Not Enrolled Yet! </h2>
                    <p style={{ margin: "20px 0" }}>
            You are not enrolled in this course yet. Enroll today to access all video lectures and files!
          </p>
                    <button onClick = {handleEnroll}>Enroll Now</button>
                </div>
                
            </div>
        )
    }
    else
    {
        return(
            <div className="form-container">
                <div className="content-card">
                    <h1>Course Content</h1>
                    {contents.length === 0 ? 
                        <div className="no-content-message"> No Content yet </div> :
                        <div>
                        {
                            contents.map((content) => (
                                <div key = {content.id}  className="lecture-card">
                                    <h3>{content.title}</h3>
                                    <div className="video-player-container">
                                    <ReactPlayer
                                        width="400px"
                                        height={300}
                                        src={content.videoUrl} />
                                        
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    }
                </div>
            
                
            </div>
        )
    }
}


export default CourseContent