import React from "react";
import Navbar from "./Navbar";
import "../../App.css";

function Home() {
  const workInfoData = [
    {
      image:
        "https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg",
      title: "Inventory management",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg",
      title: "Reporting and analysing",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg",
      title: "Demand forecasting",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
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
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
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
          </div>

          <div className="contact-right">
            <form className="contact-form">
              <input
                type="text"
                placeholder="Your name"
                name="user_name"
                required
              />

              <input
                type="text"
                placeholder="Your Email"
                name="user_email"
                required
              />
              <div className="namemail">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>

              <textarea name="message" cols="50" rows="10"></textarea>
              <button type="submit" className="send-sms">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
