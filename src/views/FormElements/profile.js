import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          className="profile-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSQ8yS1dmcoeApLMDdWOfoYlBxDnl1LY3rQ&usqp=CAU"
          alt="Profile"
        />
        <h2>User Name</h2>
        <p>Description of the user</p>
      </div>
      <div className="account-card">
        <h2>Account Details</h2>
        <form>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
