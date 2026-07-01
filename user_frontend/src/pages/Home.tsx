import { useNavigate } from "react-router-dom"

export function Home()
{
    const navigate =  useNavigate();

    function handleClick()
    {
        navigate("/signup")
    }
    return(
        <div>   
            <h1>Home</h1>
            <button onClick = {handleClick}>Go To Login</button>
        </div>
    )
}