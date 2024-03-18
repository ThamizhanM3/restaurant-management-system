import React from 'react'
import './RegisterForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const RegisterForm = () => {
    return (
        <div className="RegisterForm">
            {/* <div className="nav">
                <NavBar />
            </div> */}
            <div className='wrapper'>
                <form action="">
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="text" name="" id="" placeholder='Full Name' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="text" name="" id="" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" name="" id="" placeholder='Create Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" name="" id="" placeholder='Confirm Password' required />
                        <FaLock className='icon' />
                    </div>

                    <button type="submit">Register</button>

                    <div className="register-link">
                        <p>Already have an account? <a href="#"> <Link to = '/login' >Login</Link> </a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
