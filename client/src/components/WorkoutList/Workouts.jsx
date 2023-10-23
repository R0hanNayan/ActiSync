import React, {useState, useEffect} from "react";
import axios from 'axios';
import WorkoutCard from "../WorkoutCard/WorkoutCard";
import "./workouts.css";

function Workouts({user}){
    const [workouts, setWorkouts] = useState([]);
    const [workoutsAvailable, setWorkoutsAvailable] = useState(false);

    const getWorkouts = async () => {
        await axios.get(`http://localhost:3000/${user.userName}`)
            .then((res) => {
                if (res.data.noWorkouts === true) {
                    console.log("Workout Not Found")
                    // alert("No !");
                } else {
                    setWorkoutsAvailable(!workoutsAvailable);
                    setWorkouts(res.data);
                    console.log("Workouts Loaded");
                }
            })
    }

    // console.log(workouts);
    useEffect(() => {
        if (!workoutsAvailable) {
            getWorkouts();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    
    return (
        <div className="Workouts">
            <h1 id="w-head">Today's Workout</h1>
            <div className="Workouts-Container">
                {
                    workouts.map(
                        (workout) => (
                            <WorkoutCard
                                key={workout._id}
                                workout={workout}
                            />
                            // console.log(workout)
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Workouts;