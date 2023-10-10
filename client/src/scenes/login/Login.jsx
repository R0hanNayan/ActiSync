import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  //To change route
import "./login.css";
import URL from "../../URL";

function Login({setLoggedUser}) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    //Function to extract details from input
    const handleChange = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        })
    }

    const loginUser = async () => {
        const { email, password } = user;

        //Checking if input is valid or Not
        if (email && password) {
            const response = await axios.post(`${URL || "http://localhost:3000"}/auth/login`, user, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })     //Sending data to Backend
                .then(res => {
                    if (res.data.userNotFound === true) {
                        alert("User does not exists!");
                    } else if (res.data.invalidCredentials === true) {
                        alert("Invalid Credentials!");
                    } else {
                        setLoggedUser(res.data.user);
                    }
                }
                )
        } else {
            alert("Invalid Input");
        }

    }

    return (
        <div className="Login">
            <div className="LoginPage">
                <div className="leftHalf">
                    <h1 id="loginTitle">Welcome to ActiSync</h1>
                    <div className="LoginPage-inputs">
                        <h2 id="signIn">Sign in</h2>
                        <input id="email" autoComplete="on" type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
                        <input id="password" autoComplete="on" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
                        <button id="loginBtn1" type="submit" onClick={loginUser}>Sign in</button>
                        <button id="loginBtn2" type="button" onClick={() => { navigate("/auth") }}>New Account?</button>
                    </div>
                </div>
                <div className="rightHalf">
                    <img id="regImg" src="/assets/regImg.jpg" alt="Register" />
                </div>
            </div>
        </div>
    )
}

export default Login;