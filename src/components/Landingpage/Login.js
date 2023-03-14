import React, { useState } from "react";
import "./Login.css";
import { Link, NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <div className="login-container">
      <div className="left-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit"><Link to="/dashboard">Login</Link>Login</button>
          
        </form>
        <NavLink to="/ForgotPassword">Forgot Password</NavLink>
      </div>
      <div className="right-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU4UAYQLyRqkbkNgr2PW-3I7ILBsX4bZDCw&usqp=CAU" alt="Square" />
      </div>
    </div>
  );
}

export default Login;
