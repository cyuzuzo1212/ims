import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import "./Signup.css";
import { TextField ,Button, Typography} from "@material-ui/core";
import { LoadingOutlined } from "@ant-design/icons";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  

  const handleSignup = (event) => {
    console.log("2222222")
    event.preventDefault();
    setLoading(true);
    fetch("https://inventory-ciul.onrender.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password}),
    })
    .then((response) => response.json())
    .then ((data) => {
      console.log("Success", data);
    })
    .catch((error) =>{
      console.error("Error:", error);
    });
    
  };

  return (
    <div className="signup-container">
      <div className="signup-image-container" >
        <img
          className="signup-image" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU4UAYQLyRqkbkNgr2PW-3I7ILBsX4bZDCw&usqp=CAU"
          alt="signup"
        />
        
      </div>
      <div className="signup-form-container" style={{width:"100%"}}>
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <div className="form-group-row">
              <div className="form-group-column">
                <TextField
                  type=""
                  label="First Name"
                  id="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              <div className="form-group-column">
                <TextField
                  type=""
                  label="Last Name"
                  id="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group-row">
              <div className="form-group-column">
                <TextField
                  type=""
                  label="Email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group-column">
                <TextField
                  type="password"
                  // id="password"
                  label="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group-row">
              <div className="form-group-column">
                <TextField type="password" label="Confirm Your Password" id="confirmPassword" />
              </div>
            </div>
          </div>
          <Button className=" signup-button" type="submit"  style={{paddingLeft:"10px",width:"100%"}}>
            {loading ? <LoadingOutlined  style={{marginRight: 5}}/> :''} Sign Up</Button>
        </form>
        <p><Typography>Already have an account? <NavLink to="/login">Login</NavLink></Typography></p> 
      </div>
    </div>
  );
}

export default Signup;
