import React, { useState } from "react";
import "./Login.css";
import { Link, NavLink, useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await fetch("https://inventory-ciul.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          // if(data.message){
          //   setError("user  not found")
          //   setLoading(false)
          // }else{
          localStorage.setItem("inv-token", "Bearer " + data.token);
          localStorage.setItem("inv-role", data.data.role);
          navigate("/dashboard");
          setLoading(false);
          // }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          
        });
    } catch (error) {
      setLoading(false);
     
    }
  }

  console.log(error);
  return (
    <div className="login-container">
      <div className="left-container">
        <h2>Login</h2>
        <form>
          <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
         
          </div>
         <div>
         <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
         </div>
          {loading ? (
            <button type="submit" onClick={handleSubmit}>
              loading.....
            </button>
          ) : (
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          )}
        </form>
        <NavLink to="/ForgotPassword">Forgot Password</NavLink>
      </div>
      <div className="right-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU4UAYQLyRqkbkNgr2PW-3I7ILBsX4bZDCw&usqp=CAU"
          alt="Square"
        />
      </div>
    </div>
  );
}

export default Login;

