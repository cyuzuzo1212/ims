import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../../App.css"

export default function Navbar () {
    return (
<nav className='navbar'>
    <div>
        <button className='logo'>IMS</button>
    </div>

    <ul className='nav-links' id='/home#home'>
                    <li><HashLink to={'/'} > Home</HashLink></li>
                    <li><HashLink to={'/home#about'} >  About</HashLink></li>
                    <li><HashLink to={'/home#services'} > Services</HashLink></li>
                    <li><HashLink to={'/home#contact'} > Contact</HashLink></li>
                    <button><HashLink to={'/signup'} > Get Started</HashLink></button>


                </ul>
               
</nav>
    );
}