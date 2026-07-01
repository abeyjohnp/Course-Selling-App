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
            <div>
                <h2>You are not enrolled in this course, to enroll click </h2>
                <button onClick = {handleEnroll}>Enroll Now</button>
            </div>
        )
    }
    else
    {
        return(
            <div>
            <h1>Course Content</h1>
                {contents.length === 0 ? 
                    <div> No Content yet </div> :
                    <div>
                    {
                        contents.map((content) => (
                            <div key = {content.id} style={{border : "1px solid black", padding: "16px", margin : "10px"}}>
                                <h3>{content.title}</h3>
                                <ReactPlayer
                                    width="400px"
                                    height={300}
                                    src={content.videoUrl} />
                            </div>
                        ))
                    }
                    </div>
                }
                
            </div>
        )
    }
}


export default CourseContent