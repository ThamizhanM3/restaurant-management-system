import React, { useState } from 'react'
import Avatar from '../../Images/Logog04.png'
import { menuItems } from '../Utils/menuItems'
import { signout } from '../Utils/Icons'
import './Navigation.css'
import { Link, useNavigate } from 'react-router-dom'

function handleSignOut(){
    window.location.href = "login"
}


function Navigation({active, setActive}) {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate('/login');
    }
    return (
        <div className='Navigation'>
            <div className="user-con">
                <img src={Avatar} alt="" />
                <div className="text">
                    <h2>M3's TMZ</h2>
                    {/* <p>Your Money</p> */}
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <Link to = {item.link} ><li
                        key={item.id}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span> {item.title} </span>
                    </li></Link>
                })}
            </ul>
            <div className="bottom-nav">
                <li onClick={handleSignOut} style={{cursor: 'pointer'}}>
                    {signout} Sign Out
                </li>
            </div>
        </div>
    )
}

export default Navigation
