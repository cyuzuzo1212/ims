import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../../App.css";
import LoginForm from "./Login";
import img from "../../images/aboutimage.jpg";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter,TiSocialYoutube} from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { Typography,TextField,Button } from "@material-ui/core"; 

export const Home=()=> {
  const [name ,setName]= useState("");
  const [email, setEmail]= useState("");
  const [subject, setSubject]= useState("");
  const [ message, setMessage]= useState("");

  const handleNameChange= (event)=>{
    setName(event.target.value);
  };

  const handleEmailChange = (event)=>{
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event)=>{
    setSubject(event.target.value);
  };

  const handleMessageChange = (event)=>{
    setMessage(event.target.value);
  };

  const handleSubmit = (event)=>{
    event.preventDefault();

    if(!name || !email || !subject || !message ){
      alert('please fill in all fields');
      return;
    }
    axios.post('https://inventory-ciul.onrender.com/api/message/send',{
      name,
      email,
      subject,
      message,
    })
    .then((Response) => {
      alert('Your message has been sent');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    })
    .catch((error) => {
      console.log(error);
      alert('There was an error sending your message');
    });
  };
  const workInfoData = [
    {
      image:
        "https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg",
      title: "Inventory management",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image:
        "https://www.patriotsoftware.com/wp-content/uploads/2017/06/what-is-an-income-statement.jpg",
      title: "Report and analysing",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image:
        "https://learn.g2.com/hubfs/iStock-1024926532.jpg",
      title: "Demand forecasting",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et elementum interdum facilisi bibendum et ipsum.",
    },
  ];
  return (
    <div>
      <div className="home">
        <Navbar />

        <div className="home-container">
          <h1 className="head-text">
            Welcome to the inventory management system
          </h1>
          <p className="head-paragraph">
            This is a short description of the services we give and the benefits
            of using this system.
          </p>

          
        
        <button className="learn">Learn more</button>
      
        </div>
       
      </div>


<div className="about-section" style={{marginBottom: "300px"}}>
<h1 style={{margin:"80px 0px 0px 60px"}} id="about">About Us</h1>
    <div className="about-text">
       
        <h2 style={{color:"blue",paddingBottom:"50PX"}}>Welcome to our Inventory Management system</h2>
        <p >Our system is designed to help businesses improve efficiency.</p>
            <p>With our user-friendly interface and powerful features,</p>
            <p>you can easily track inventory levels, generate reports and analytics.</p>  
    </div>
    <img src={img} alt="about" className="right"></img>
</div>


      <div className="work-section-wrapper" id="services">
        <div className="work-section-top">
          <p className="primary-subheading">Services</p>
          <h1 className="primary-heading">How we Work</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" style={{height:"200px"}} />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}

      </div>
        <div className="contact-background">
          <div className="white-ground">
        <div className="contact-container" id="contact">
          <div style={{display:"flex",padding:"40px"}}>
          <div className="contact-left" style={{width:"110%"}}>
            <h2 className="contact-text1">Contact Us</h2>
            <ul style={{flexDirection:"column"}}>
            <li>Kigali Nyarugenge, KG ave 234</li>
            <li>Email:inveto@gmail.com</li>
            <li>Phone:+250786666666</li>
            <li>Skype:Invet.win</li>
            
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.026610205683!2d30.0549678!3d-1.9504945999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5e060874d73%3A0x5baa629e8229848b!2sVedox%20rwanda!5e0!3m2!1sen!2srw!4v1678084977625!5m2!1sen!2srw"
                  width="250"
                  height="120"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                </ul>
          </div>



          <div className="contact-right" style={{display:"flex",justifyContent:"center"}}> 
            <form className="contact-form" onSubmit={handleSubmit} style={{width:"100%",float:"right",marginLeft:"100px"}}>

              <TextField 
                type="names"
                value={name}
                onChange={handleNameChange}
                label="Your Name"
              
                required
                sx={{mb:1}}
              />

              <TextField
                type="your email"
                value={email}
                onChange={handleEmailChange}
                label="Your Email"
                required
                sx={{mb:1}}
              />
              <div  >
                <TextField
                fullWidth
                  type="subject"
                  value={subject}
                  onChange={handleSubjectChange}
                  label="Subject"
                  required
                  sx={{mb:1}}
                />
              </div>

              <textarea name="message" cols="60" rows="6" label="Message" value={message} onChange={handleMessageChange}></textarea>
              <Button type="submit" className="send-sms" style={{
              width:"100%",
              marginTop:"10px",
              padding:"10px",
              border:"none",
              borderRadius:"5px",
              backgroundColor:"blue",
              color:"white"}}> Send Message </Button>
            </form>
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className="footer">
          <div className="sb-footer section-padding">
          <button className="logo-footer">IMS</button>
            <div className="sb-footer-links">
              <div className="sb-footer-links-div">
                <h4>For Business</h4>
                <a href="employer"  style={{color:"white",textDecoration:"none"}}>
                  <p>Employers</p>
                </a>
                <a href="plan"  style={{color:"white",textDecoration:"none"}}>
                  <p>Plans</p>
                </a>

                <a href="individual"  style={{color:"white",textDecoration:"none"}}>
                  <p>Individuals</p>
                </a>
              </div>
              <div className="sb-footer-links-div">
                <h4>Useful links</h4>
                <a href="employer"  style={{color:"white",textDecoration:"none"}}>
                  <p>Pricing</p>
                </a>
                <a href="plan"  style={{color:"white",textDecoration:"none"}}>
                  <p>Certifications</p>
                </a>

                <a href="individual"  style={{color:"white",textDecoration:"none"}}>
                  <p>Services</p>
                </a>
              </div>
              <div className="sb-footer-links-div" >
                <h4>Useful links</h4>
                <a href="employer"   style={{color:"white",textDecoration:"none"}}>
                  <p>Sales</p>
                </a>
                <a href="plan"  style={{color:"white",textDecoration:"none"}}>
                  <p>Customers</p>
                </a>

                <a href="individual"  style={{color:"white",textDecoration:"none"}}>
                  <p>Stocking</p>
                </a>
              </div>
              
              <div className="sb-footer-links-div"  >
              <h4>Address</h4>
               <p>Kigali</p>
               <p style={{marginTop:"0px"}}> Nyarugenge</p>
               <p style={{marginTop:"0px"}}>KG ave 234</p>
               <h4>coming soon</h4>
                <div className="socialmedia">
                  <TiSocialFacebook />

                  <TiSocialTwitter />

                  <TiSocialLinkedin />
                  <TiSocialYoutube />
                </div>
              </div>
            </div>
           
                
          </div></div>
        </div>
    </div>
  );
}
export default Home;
