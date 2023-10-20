import { useNavigate } from "react-router-dom";
import React from "react";
import WorkoutPlan from "../../components/WorkoutPlan/WorkoutPlan";
import "./homepage.css";
import Banner1 from "../../components/Banner/Banner1";
import Banner2 from "../../components/Banner/Banner2";
import Workouts from "../../components/WorkoutList/Workouts";

function Homepage({setLoggedUser, user}){
    const navigate = useNavigate();
    
    return(
        <div className="homepage">
            <br />
            <br />
            <Banner1 />
            <br />
            <Banner2 />
            <br />
            <WorkoutPlan user={user}/>
            <br />
            <Workouts user={user}/>
            <button type="submit" onClick={()=>{setLoggedUser(null); navigate("/")}}>Logout</button>
        </div>
    )
}

export default Homepage;