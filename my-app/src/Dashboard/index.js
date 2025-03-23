import React from "react";
import "./index.css";

const Dashboard = () => {
  return (
    <div className="account-container">
      <div className="account-box">
        <h2 className="account-title">Account Settings</h2>
        <div className="profile-section">
          <img
            src="https://res.cloudinary.com/dfodxbgfn/image/upload/v1711445017/samples/smile.jpg" // Replace with actual profile image URL
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-info">
            <h3 className="profile-name">Marry Doe</h3>
            <p className="profile-email">Marry@gmail.com</p>
          </div>
        </div>
        <p className="account-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
