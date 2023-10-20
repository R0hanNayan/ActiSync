import React, { useState } from "react";

function WorkoutCard({workout}){
    const[userWorkout, setUserWorkout] = useState(workout);
    console.log(userWorkout);
    return(
        <div className="WorkoutCard">
            {userWorkout.exerciseType === "Cardio" ? (
                <div className="WorkoutCard-Container"> 
                    <p>{userWorkout.exerciseType}</p>
                    <p>{userWorkout.duration}</p>
                </div>
                ) : (
                    <div> 
                        <p>{userWorkout.exerciseType}</p>
                        <p>{userWorkout.sets}</p>
                        <p>{userWorkout.reps}</p>
                    </div>
                ) 
            }
        </div>
    )
}

export default WorkoutCard;