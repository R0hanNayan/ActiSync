import { useNavigate } from "react-router-dom";
import React from "react";
import WorkoutPlan from "../../components/WorkoutPlan/WorkoutPlan";
import "./homepage.css";

function Homepage({setLoggedUser, user}){
    const navigate = useNavigate();
    
    return(
        <div className="homepage">
            <WorkoutPlan user={user}/>
            <button type="submit" onClick={()=>{setLoggedUser(null); navigate("/")}}>Logout</button>
        </div>
    )
}

export default Homepage;