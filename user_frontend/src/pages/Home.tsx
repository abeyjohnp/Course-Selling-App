import { useNavigate } from "react-router-dom"

export function Home()
{
    const navigate =  useNavigate();

    function handleClick()
    {
        navigate("/signup")
    }
    return(
        <div className="form-container">  
            <div className="form-card" style={{ textAlign: "center" }}>
                <h1>Home</h1>
                <p style={{ margin: "20px 0" }}>
                Expand your knowledge by browsing and enrolling in premium video courses today.
                </p>
                <button onClick = {handleClick}>Go To Login</button>
            </div>
            
        </div>
    )
}