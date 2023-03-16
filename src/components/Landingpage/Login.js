import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, NavLink } from "react-router-dom";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import {  loginUser } from "../Landingpage/authentication";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, error ,loginSuccess } = useSelector((state) => state.auth);
  
  
  
  useEffect(() => {
    if (isLoggedIn ) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            required
          />
          <button color="white" textDecoration="none"><Link to="/dashboard"  onClick={handleLogin}>Login</Link></button>
          
        <NavLink to="/ForgotPassword">Forgot Password</NavLink>
      </div>
      <div className="right-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU4UAYQLyRqkbkNgr2PW-3I7ILBsX4bZDCw&usqp=CAU" alt="Square" />
      </div>
        </form>
    </div>
  );
};

export default Login;
