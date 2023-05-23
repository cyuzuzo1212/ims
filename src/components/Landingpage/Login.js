import React, { useState, useEffect } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import {  loginUser } from "../Landingpage/authentication";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography } from "@material-ui/core";
import { LoadingOutlined } from "@ant-design/icons";

export const Login =()=> {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({email: {value: '', error: ''}, password: {value: '', error: ''}, message: ''});
  const [loggedIn, setLoggedIn] = useState(false);
  const { isLoggedIn, error: loginError ,loginSuccess, loading } = useSelector((state) => state.auth);
  if(isLoggedIn !== loggedIn) {
    setLoggedIn(!loggedIn);
  }
  
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  useEffect(() => {
    if (loggedIn ) {
      navigate("/dashboard/dashboard/home");
    }
  }, [loggedIn]);

  useEffect(() => {
    if(loginError !== '') {
      setFormData(pState => ({...pState, message: loginError}))
    }
  }, [loading])

  const handleLogin = (e) => {
    e.preventDefault()
    const email = formData.email;
    const password = formData.password;

    // check data presence
    if(email.value === '' || password.value === '') {
      setFormData(prevState => ({
        ...prevState, message: 'Please fill your email and password, then try again.'
      }))
      return;
    }
    
    // check email errors
    if(email.error) {
      setFormData(prevState => ({
        ...prevState,
        message: 'Please enter a valid email. example: user@mail.com'
      }))
      return;
    }
    
    // check password errors
    if(password.error) {
      setFormData(prevState => ({
        ...prevState,
        message: 'Please enter your password'
      }))
      return;
    }
    
    setFormData(prevState => ({...prevState, message: ''}));
    
    dispatch(
      loginUser({
        email: email.value,
        password: password.value,
      })
    );
  };

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    const emailObj = {
      value: emailValue,
      error: emailRegex.test(emailValue) ? '' : 'Email not valid'
    }
    setFormData(prevState => ({
      ...prevState,
      email: emailObj
    }));
  }

  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    setFormData(prevState => ({
      ...prevState,
      password: { value: passwordValue, error: !passwordValue ? 'Password not entered' : ''}
    }));
  }

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div style={{justifyContent:"left"}} >
          <TextField
            fullWidth
            type=""
            value={formData.email.value}
            onChange={handleEmail}
            label="Enter email"
            required
            sx={{mb: 2}}
          />
        </div>
        <div>
          <TextField
            fullWidth
            type="password"
            variant="outlined"
            value={formData.password.value}
            onChange={handlePassword}
            label="Enter password"
            required
            sx={{mb: 2}}
          />
        </div>

        <p style={{fontSize: 12, color: '#CC5555'}}>{formData.message}</p>

        <Button 
          style={{background:"blue", color:"white", width: '100%', cursor: 'pointer'}}
          onClick={handleLogin}
          >
          {loading && <LoadingOutlined style={{marginRight: 5}} />} Login
        </Button>

        <p><NavLink to="/Forgotpassword" sx={{mb:2}} style={{fontSize: 12}}>Forgot Password?</NavLink></p>
      <div className="right-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU4UAYQLyRqkbkNgr2PW-3I7ILBsX4bZDCw&usqp=CAU" alt="Square" />
      </div>
        </form>
    </div>
  );
};

export default Login;
