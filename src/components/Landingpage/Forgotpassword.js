import React, { useState } from "react";
import "./Forgot.css";
import { Typography,TextField,Button } from "@material-ui/core";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform forgot password logic here
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <Typography>Email</Typography>
          <TextField
            type=""
            label="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{mb:2}}
          />
          <Button fullWidth type="submit">Reset Password</Button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
