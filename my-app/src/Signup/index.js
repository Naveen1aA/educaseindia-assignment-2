import React, { useState } from "react";
import "./index.css"; 
import {Link} from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create your<br/> PopX account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name<span className="astrick">*</span></label>
            <input
              type="text"
              name="fullName"
              className="input-field"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Phone Number<span className="astrick">*</span></label>
            <input
              type="tel"
              name="phoneNumber"
              className="input-field"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email Address<span className="astrick">*</span></label>
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password<span className="astrick">*</span></label>
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              className="input-field"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Are you an Agency?<span className="astrick">*</span></label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
          <Link to="/dashboard"><button type="submit" className="signup-button">Create Account</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
