import React, { useState } from "react";

function WorkoutCard({workout}){
    const[userWorkout, setUserWorkout] = useState(workout);
    console.log(userWorkout);
    return(
        <div className="WorkoutCard">
            {userWorkout.exerciseType === "Cardio" ? (
                <div className="WorkoutCard-Container"> 
                    <p id="wc-et">{userWorkout.exerciseType}</p>
                    <p id="wc-du">{userWorkout.duration}</p>
                </div>
                ) : (
                    <div className="WorkoutCard-Container"> 
                        <p id="wc-et">{userWorkout.exerciseType}</p>
                        <p id="wc-sets">{userWorkout.sets}</p>
                        <p id="wc-reps">{userWorkout.reps}</p>
                    </div>
                ) 
            }
        </div>
    )
}

export default WorkoutCard;