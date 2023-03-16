import React, { useState } from 'react';
import "../../App.css";
import Navbar from './Navbar';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
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
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="image-container">
        <img src="https://via.placeholder.com/150" alt="small picture" />
      </div>
    </div>
  );
};

export default LoginForm;
