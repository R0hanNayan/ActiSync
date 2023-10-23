import React, { useState } from "react";
import './workoutCard.css';

function WorkoutCard({workout}){
    const[userWorkout, setUserWorkout] = useState(workout);
    console.log(userWorkout);
    return(
        <div className="WorkoutCard">
            {userWorkout.exerciseType === "Cardio" ? (
                <div className="WorkoutCard-Container"> 
                    <div className="wc-et-c">
                        <p id="wc-et">{userWorkout.exerciseType}</p>
                    </div>
                    <div className="wc-dc">
                        <p id="wc-du">{userWorkout.duration}</p>
                    </div>
                    
                </div>
                ) : (
                    <div className="WorkoutCard-Container"> 
                        <div className="wc-et-c">
                            <p id="wc-et">{userWorkout.exerciseType}</p>
                        </div>
                        <div className="wc-dc">   
                            <p id="wc-sets">{userWorkout.sets} Sets</p>
                            <p id="wc-reps">{userWorkout.reps} Reps</p>
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default WorkoutCard;