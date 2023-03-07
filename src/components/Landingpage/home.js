import React from "react";
import Navbar from "./Navbar";
import "../../App.css";
import img from "../../images/aboutimage.jpg";
import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Home() {
  const workInfoData = [
    {
      image:
        "https://i.pinimg.com/originals/0d/90/f7/0d90f76f03c935f8ca82b24e50a713c1.jpg",
      title: "Inventory management",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg",
      title: "Reporting and analysing",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg",
      title: "Demand forecasting",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi lorem ipsum",
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
        </div>
        <div>
          <button className="learn">Learn More</button>
        </div>
      </div>

      <div className="about-section" style={{ marginBottom: "300px" }}>
        <h1 style={{ margin: "80px 0px 0px 60px" }}>About Us</h1>
        <div className="about-text">
          <h2 style={{ color: "blue", paddingBottom: "50PX" }}>
            Welcome to our Inventory Management system
          </h2>
          <p>Our system is designed to help businesses improve efficiency.</p>
          <p>With our user-friendly interface and powerful features,</p>
          <p>
            you can easily track inventory levels, generate reports and
            analytics.
          </p>
        </div>
        <img src={img} alt="about" className="right"></img>
      </div>

      <div className="work-section-wrapper" style={{ marginBottom: "300px" }}>
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
              <div className="info-boxes-img-container" style={{background:`url(${data.image})`,backgroundPosition:"center",backgroundSize:"cover",height:250,width:400,borderRadius:"8px"}}>
                {/* <img src={data.image} alt="" /> */}
              </div>
              <h2 style={{color:"blue"}}>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
        <div className="contact-background">
          <div className="white-ground">
            <div className="contact-container">
              <div className="contact-left">
                <h2 className="contact-text1">Contact Us</h2>
                <p className="contact-text2">Kigali Nyarugenge, KG ave 234</p>
                <p className="contact-text3">
                  Email:<span>inveto@gmail.com</span>
                </p>
                <p className="contact-text3">
                  Phone:<span>+250786666666</span>
                </p>
                <p className="contact-text3">
                  Skype:<span>Invet.win</span>
                </p>
                {/* <img src={require("../../images/map")} alt="map" className="center"></img> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.026610205683!2d30.0549678!3d-1.9504945999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5e060874d73%3A0x5baa629e8229848b!2sVedox%20rwanda!5e0!3m2!1sen!2srw!4v1678084977625!5m2!1sen!2srw"
                  width="250"
                  height="120"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="contact-right">
                <form className="contact-form">
                  
                  <input 
                    style={{ padding: "10px 0px 10px 30px" }}
                    type="text"
                    placeholder="Your name"
                    name="user_name"
                    required
                  />

                  <input
                    style={{ padding: "10px 20px 10px", marginLeft: "26px" }}
                    type="text"
                    placeholder="Your Email"
                    name="user_email"
                    required
                  />
                  <div>
                    <input
                      style={{
                        margin: "20px 0px 20px 0px",
                        padding: "10px 135px 10px",
                      }}
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                  </div>

                  <textarea name="message" cols="60" rows="7"></textarea>
                  <button
                    type="submit"
                    className="send-sms"
                    style={{
                      marginLeft: "200px",
                      marginTop: "10px",
                      padding: "10px",
                      border: "none",
                      borderRadius: "10px",
                      backgroundColor: "#020250",
                      color: "white",
                    }}
                  >
                    {" "}
                    Send Message{" "}
                  </button>
                </form>
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
                <a href="employer">
                  <p>employer</p>
                </a>
                <a href="plan">
                  <p>plan</p>
                </a>

                <a href="individual">
                  <p>individual</p>
                </a>
              </div>
              <div className="sb-footer-links-div">
                <h4>resourses</h4>
                <a href="employer">
                  <p>employer</p>
                </a>
                <a href="plan">
                  <p>plan</p>
                </a>

                <a href="individual">
                  <p>individual</p>
                </a>
              </div>
              <div className="sb-footer-links-div">
                <h4>resourses</h4>
                <a href="employer">
                  <p>employer</p>
                </a>
                <a href="plan">
                  <p>plan</p>
                </a>

                <a href="individual">
                  <p>individual</p>
                </a>
              </div>
              
              <div className="sb-footer-links-div">
              <h4>Address</h4>
               <p>Kigali</p>
               <p style={{marginTop:"-10px"}}> Nyarugenge</p>
               <p style={{marginTop:"-10px"}}>KG ave 234</p>
               <h4>coming soon</h4>
                <div className="socialmedia">
                  {/* <p><img src={Facebook} alt=""/></p> */}
                  <FaFacebookSquare />
                  {/* <p><img src={Twitter} alt=""/></p> */}
                  <FaTwitterSquare />
                  <p>
                    <img src={LinkedIn} alt="" />
                  </p>
                  <FaLinkedin />
                  {/* <p><img src={utube} alt=""/></p> */}
                  <FaYoutube />
                </div>
              </div>
            </div>
            {/* <hr></hr> */}
            {/* <div className="sb-footer-links-div"> */}
              
              {/* <div className="sb-footer-below-div">
              <a href="/terms"><div><p>Terms & Conditions</p></div></a>
              <a href="/privacy"><div><p>privacy</p></div></a>
              <a href="/security"><div><p>security</p></div></a>
              <a href="/cookis"><div><p>cookis declaration</p></div></a>
            </div> */}
            {/* </div> */}
            <div className="sb-footer-copyright">
                <p>
                  @{new Date().getFullYear()} Inventory. All right reserved.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
