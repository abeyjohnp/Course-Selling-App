import { useNavigate } from "react-router-dom"

export function ViewCourses()
{
    const navigate = useNavigate()
    function handleClick ()
    {
       navigate("/viewcourses/4")
    }
    return(
        <div>
            <h1>View Courses</h1>
            <button onClick = {handleClick}> Go to course no 4</button>
        </div>
    )
}