import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage({setLoggedUser}){
    const navigate = useNavigate();

    return(
        <div>
            <button type="submit" onClick={()=>{setLoggedUser(null); navigate("/")}}>Logout</button>
        </div>
    )
}

export default Homepage;