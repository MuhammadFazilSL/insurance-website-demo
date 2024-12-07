import React from 'react'
import logo from '../assets/gmat-logo.png'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navItems = ["Insurance","FAQs","About us","Blog","Contact Us"]
    const navigate = useNavigate()
    
  return (
    <div className="navbar-container">
        <img src={logo} alt="logo" />
        <div className="navitems-button">
            <span className="navitem">
               {
                navItems.map(item => (
                    <p onClick={()=>navigate(`/insurance-website-demo/${item}`)}>{item}</p>
                ))
               }
            </span>
            <span className="login-button">
               <div className="dropdown">
                <p>Eng</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.38 5.25005L6.18333 9.05338C6.6325 9.50255 7.3675 9.50255 7.81666 9.05338L11.62 5.25005" stroke="#D2242E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               </div>
               <button>Login</button>
            </span>
        </div>
    </div>
  )
}

export default Navbar