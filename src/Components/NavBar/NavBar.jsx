import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from "react"
import './NavBar.css'

function NavBar(){
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <div className="navbar">
            <header>
                <h3>Logo</h3>
                <nav ref={navRef} >
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Works</a>
                    <Link to='/login'> Login </Link>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar} >
                        <FaTimes />
                    </button>
                </nav>
            </header>
        </div>
    )
}

export default NavBar