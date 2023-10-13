import React, { useState, useEffect } from "react";
import axios from "axios";
import URL from "../../URL";
import './workoutplan.css';

function WorkoutPlan({user}){
    const date = new Date();
    const [workout, setWorkout] = useState(
        {
            userName: user.userName,
            day: date,
            exerciseType: "",
            sets: 0,
            reps: 0,
            duration: 0
        }
    )

    const handleChange = (event) => {
        const { name, value } = event.target;

        setWorkout({
            ...workout,
            [name]: value
        })
    }

    const saveWorkout = async () => {
        const { userName, day, exerciseType, sets, reps, duration } = workout;
        // console.log(user)
        //Checking if input is valid or Not
        if (userName && day && exerciseType) {
            const response = await axios.post(`${URL || "http://localhost:3000"}/workoutPlan`, workout, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })     //Sending data to Backend
            .then((res) =>{
                    alert("Success!");
                    console.log(res.savedWorkout);
                }
            )
        } else {
            alert("Invalid Input");
        }
    }
    return(
        <div>
            {/* <input id="date" type="date" name="day" value={workout.day} placeholder="Day" onChange={handleChange} /> */}
            <input id="exerciseType" type="text" name="exerciseType" value={workout.exerciseType} placeholder="Exercise Type" onChange={handleChange} />
            <input id="sets" type="Number" name="sets" value={workout.sets} placeholder="Sets" onChange={handleChange} />
            <input id="reps" type="Number" name="reps" value={workout.reps} placeholder="Reps" onChange={handleChange} />
            <input id="duration" type="Number" name="duration" value={workout.duration} placeholder="Duration" onChange={handleChange} />
            <button type="submit" onClick={saveWorkout}>Save!</button>
        </div>
    )
}

export default WorkoutPlan;
