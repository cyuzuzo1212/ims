import React from 'react'
import Navbar from './Navbar'
import "../../App.css"



function Home() {
    return(
        <div className="home-container">
        <div>
            <Navbar/>
            <div>
            <h1 className='head-text'>Welcome to the inventory management system</h1>
            <p className='head-paragraph'>This is a short description of the services we give and the benefits of using this system.</p>
             </div>
             <div>
                <button className='learn'>Learn More</button>
                </div>
             </div>
             </div>
    )
}
export default Home