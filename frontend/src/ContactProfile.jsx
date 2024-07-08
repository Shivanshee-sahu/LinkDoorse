import React from 'react';

function ContactProfile() {
  const goBack = () => {
    window.history.back();
  };

  const validateForm = (e) => {
    const instaId = document.getElementById('instaId').value;
    const otherPlatformsId = document.getElementById('otherPlatformsId').value;
    const platformError = document.getElementById('platformError');

    if (!instaId && !otherPlatformsId) {
      e.preventDefault();
      platformError.style.display = 'block';
    } else {
      platformError.style.display = 'none';
    }
  };

  return (
    <div>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #07252d;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
          position: relative;
        }
        .container {
          max-width: 600px;
          width: 90%;
          padding: 20px;
          background-color: rgba(248, 252, 252, 0.942);
          box-shadow: 0 4px 8px #07252d;
          border-radius: 8px;
          overflow-y: auto;
          max-height: 90vh;
        }
        h2 {
          text-align: center;
          font-size: 2.3rem;
          margin-bottom: 20px;
          color: #333333;
        }
        .form-group {
          display: grid;
          grid-template-columns: 1fr 2fr;
          align-items: center;
          margin-bottom: 15px;
        }
        .form-group label {
          margin-right: 10px;
          color: black;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          border: 1px solid #cccccc;
          border-radius: 4px;
          font-size: 16px;
        }
        .form-group textarea {
          resize: vertical;
        }
        .form-group input[type="submit"] {
          grid-column: 1 / span 2;
          background-color:  #07252d;
          color: #ffffff;
          border: none;
          margin-top:25%;
          cursor: pointer;
          outline: none;
       
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        .form-group input[type="submit"]:hover {
          background-color: #07252d;
        }
        .form-group .error {
          color: red;
          display: none;
          grid-column: 1 / span 2;
        }
        @media (max-width: 768px) {
          .container {
            width: 100%;
            margin: 10px;
          }
        }
        .back-button {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 10px 20px;
          cursor: pointer;
          height: 50px;
          width: 70px;
        }
      `}</style>
      <img onClick={goBack} className="back-button" src="back.png" alt="Back" />
      <div className="container">
        <h2>Complete your Profile</h2>
        <form id="personalInfoForm" onSubmit={validateForm}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input type="tel" id="contact" name="contact" required pattern="\d{10}" title="Please enter a valid 10-digit phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" required />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode:</label>
            <input type="text" id="pincode" name="pincode" required pattern="\d{6}" title="Please enter a valid 6-digit pincode" />
          </div>
          <div className="form-group">
            <label htmlFor="instaId">Instagram ID:</label>
            <input type="text" id="instaId" name="instaId" />
          </div>
          <div className="form-group">
            <label htmlFor="otherPlatformsId">Other Platforms ID: (if any)</label>
            <input type="text" id="otherPlatformsId" name="otherPlatformsId" />
          </div>
          <div className="form-group">
            <label htmlFor="about">About:</label>
            <textarea id="about" name="about" rows="3" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="referral">How did you know about us:</label>
            <select id="referral" name="referral" required>
              <option value="">Select an option</option>
              <option value="social_media">Social Media</option>
              <option value="friends">Friends</option>
              <option value="advertisements">Advertisements</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <span className="error" id="platformError">Please fill at least one of Instagram ID or Other Platforms ID.</span>
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactProfile;
