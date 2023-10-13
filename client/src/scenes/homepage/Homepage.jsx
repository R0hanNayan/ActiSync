import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import URL from "../../URL";
import WorkoutPlan from "../../components/WorkoutPlan/WorkoutPlan";

function Homepage({setLoggedUser, user}){
    const navigate = useNavigate();
    
    return(
        <div>
            <WorkoutPlan user={user}/>
            <button type="submit" onClick={()=>{setLoggedUser(null); navigate("/")}}>Logout</button>
        </div>
    )
}

export default Homepage;