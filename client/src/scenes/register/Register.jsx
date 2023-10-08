import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";
import URL from "../../URL";

function Register() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        gender: "",
        age: "",
        height: "",
        weight: ""
    });


    //Function to extract details from input
    const handleChange = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        })
        // event.preventDefault();
    }

    //To take user to register page
    const registerUser = async () => {
        const { userName, email, password, gender, age, height, weight } = user;
        //Checking if input is valid or Not
        if (userName && email && password && gender && age && weight && height) {
            const response = await axios.post(`${URL || "http://localhost:3000"}/auth/register`, user, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })     //Sending data to Backend
                .then(res => {
                    // console.log(res.data)
                    if (res.data.exists === true) {
                        alert("User Already Registered");   //Checking if user already registered
                        navigate("/")
                    } else {
                        alert("Registration Successful!");
                        navigate("/");
                    }
                }
                )
        } else {
            alert("Invalid Input");
        }
    }

    return (
        <div className="RegisterPage">
            <div className="leftHalf">
            </div>
            <div className="rightHalf">
                <h1 id="RegTitle">The Daily Scribble!</h1>
                <div className="RegisterPage-inputs">
                    <h2 id="signUp">Sign Up</h2>
                    <input id="RegInputs" type="username" name="userName" value={user.userName} placeholder="Username" onChange={handleChange} />
                    <input id="RegInputs" type="email" name="email" value={user.email} placeholder="Email Id" onChange={handleChange} />
                    <input id="RegInputs" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
                    <label>
                        <p>Gender</p>
                        <select name="gender" defaultValue={user.gender} onChange={handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </label>
                    <input type="number" name="age" value={user.age} min={1} max={150} placeholder="Age" onChange={handleChange}/>
                    <input type="number" name="weight" value={user.weight} min={20} max={150} placeholder="Weight int kgs" onChange={handleChange}/>
                    <input type="number" name="height" value={user.height} placeholder="Height in Meters" onChange={handleChange}/>
                    <button id="RegBtn" type="submit" onClick={registerUser}>Sign Up</button>
                    <p id="RegOr">Or</p>
                    <button id="RegBtn" type="submit" onClick={() => { navigate("/") }}>Already Have an Account?</button>
                </div>
            </div>
        </div>
    )
}

export default Register;