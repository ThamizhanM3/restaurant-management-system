import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

var userData = []

fetch('http://localhost:3001/getUsers')
.then((res) => {
    return res.json()
})
.then((data) => {
    userData = [...data]
})

function handleLogin(){
    let userName = document.getElementById("userName")
    let password = document.getElementById("pass")
    // console.log(user + " " + pass + " print")
    // if(userName.value == "admin" && password.value == "admin"){
    //     window.location.href = "dashboard"
    // }
    // else if(userName.value == "employee" && password.value == "employee"){
    //     window.location.href = "foodmenu"
    // }
    // else{
    //     alert("Not Registered")
    //     userName.value = ""
    //     password.value = ""
    // }

    function loginUser(uname, pass) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = userData.find(
                    (user) => user.uname === uname && user.pass === pass
                );
                if (user) {
                    resolve(user);
    
                } else {
                    reject(new Error("Invalid email or password"));
                }
            }, 1000);
        });
    }

    var uname = userName.value
    var pass = password.value
    OnLogin()

    async function OnLogin() {
        try{
            const user = await loginUser (uname, pass);
            if (user){
                if (user.uname === 'admin'){
                    window.location.href="dashboard"
                    window.redirect(`dashboard?username=${uname}`);
                }
                else if (user.uname === 'employee'){
                    window.location.href="foodMenu"
                }
            }
            else {
                alert ('Invalid Login')
            }
        }
        catch{
            // alert('Invalid Login')
            // console.log(user)
            // window.location.href="../../index.html"
        }
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
