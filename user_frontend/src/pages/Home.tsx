import { useNavigate } from "react-router-dom"

export function Home()
{
    const navigate =  useNavigate();

    function handleClick()
    {
        navigate("/signup")
    }
    return(
        <div style={{
            display : "flex",
            flexDirection : "column",
            gap : "20px",
            alignItems:"center"
        }}>   
            <h1>Home</h1>
            <button onClick = {handleClick}>Go To Login</button>
        </div>
    )
}