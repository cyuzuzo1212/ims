import React from 'react'
import { CiUser } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import "../../App.css"

export default function Navbar () {
    return (
<nav>
    <div>
        <button className='log'>IMS</button>
    </div>

    <ul className='nav-links'>
                    <li><NavLink to={'/'} > Home</NavLink></li>
                    <li><NavLink to={'/'} >  About</NavLink></li>
                    <li><NavLink to={'/'} > Services</NavLink></li>
                    <button><NavLink to={'/'} > Get Started</NavLink></button>


                </ul>
               
</nav>
    );
}