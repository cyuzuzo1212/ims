import React from 'react'
import Navbar from './Navbar'
import "../../App.css"



function Home() {
    return(
        <div>
            <Navbar/>
            <div>
        <dev className="home-container">
            <h1 className='head-text'>Welcome to the inventory management system</h1>
            <p className='head-paragraph'>This is a short description of the services we give and the benefits of using this system.</p>
             </dev>
             <dev>
                <button className='learn'>Learn More</button>
                </dev>
             </div>
             </div>
    )
}
export default Home