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
        // console.log(user)
        //Checking if input is valid or Not
        if (userName && email && password && gender && age && height && weight) {
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
        <div className="Register">
            <div className="RegisterPage">
                <div className="RegisterPage-Container">
                    <h1 id="RegTitle">Welcome to ActiSync</h1>
                    <div className="RegisterPage-inputs">
                        <h2 id="signUp">Sign Up</h2>
                        <input id="userName" type="username" name="userName" value={user.userName} placeholder="Username" onChange={handleChange} />
                        <input id="email" type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
                        <input id="password" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
                        <div className="userDetails">    
                            <label id="gender">
                                <select id="gender-box" name="gender" value={user.gender} onChange={handleChange}>
                                    <option value="">--Gender--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </label>
                            <input id="age" type="number" name="age" min={1} max={150} value={user.age} placeholder="Age" onChange={handleChange} />
                            <input id="height" type="number" name="height" min={0} max={5} step={0.01} value={user.height} placeholder="Height in meters" onChange={handleChange} />
                            <input id="weight" type="number" name="weight" min={0} max={200} step={0.1} value={user.weight} placeholder="Weight in Kgs" onChange={handleChange} />
                        </div>
                        <button id="RegBtn1" type="submit" onClick={registerUser}>Sign Up</button>
                        <button id="RegBtn2" type="submit" onClick={() => { navigate("/") }}>Already Have an Account?</button>
                    </div>
                </div>
                <div className="RegisterPage-Right">
                    <img id="regImg" src="/assets/regImg.jpg" alt="Register" />
                </div>
            </div>
        </div>
    )
}

export default Register;