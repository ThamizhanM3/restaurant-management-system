import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function handleLogin(){
    let user = document.getElementById("userName")
    let pass = document.getElementById("pass")
    console.log(user + " " + pass + " print")
    if(user.value == "admin" && pass.value == "admin"){
        window.location.href = "dashboard"
    }
    else if(user.value == "employee" && pass.value == "employee"){
        window.location.href = "foodmenu"
    }
    else{
        alert("Not Registered")
        user.value = ""
        pass.value = ""
    }
}

const LoginForm = () => {
    return (
        <div className="LoginForm">
            <div className='wrapper'>

                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" name="" id="userName" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" name="" id="pass" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label htmlFor=""><input type="checkbox" name="" id="" />Remember me</label>
                        <a href="#">Forgot Password</a>
                    </div>

                    <button onClick={handleLogin}>Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#"><Link to = '/register' >Register</Link></a></p>
                    </div>

            </div>
        </div>
    )
}

export default LoginForm
