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
            sets: null,
            reps: null,
            duration: null
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
        <div className="WorkoutPlan">
            {/* <input id="date" type="date" name="day" value={workout.day} placeholder="Day" onChange={handleChange} /> */}
            <div className="exercise-Type">
                <input id="exerciseType" type="text" name="exerciseType" value={workout.exerciseType} placeholder="Exercise Type" onChange={handleChange} />
            </div>
            <div className="type-1">
                <input id="sets" type="Number" name="sets" value={workout.sets} placeholder="Sets" onChange={handleChange} />
                <input id="reps" type="Number" name="reps" value={workout.reps} placeholder="Reps" onChange={handleChange} />
            </div>
            <p id="WoroutPlan-or">Or</p>
            <div className="type-2">
                <input id="duration" type="Number" name="duration" value={workout.duration} placeholder="Minutes" onChange={handleChange} />
            </div>
            <button id="WoroutPlan-Save" type="submit" onClick={saveWorkout}>Save!</button>
        </div>
    )
}

export default WorkoutPlan;
