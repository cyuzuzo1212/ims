import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../App.css"

export default function Navbar () {
    return (
<nav>
    <div>
        <button className='logo'>IMS</button>
    </div>

    <ul className='nav-links'>
                    <li><NavLink to={'/'} > Home</NavLink></li>
                    <li><NavLink to={'/'} >  About</NavLink></li>
                    <li><NavLink to={'/'} > Services</NavLink></li>
                    <li><NavLink to={'/'} > Contact</NavLink></li>
                

                    <button><NavLink to={'/dashboard'} > Get Started</NavLink></button>


                </ul>
               
</nav>
    );
}