import React from 'react';

function Phone() {
  const goBack = () => {
    window.history.back();
  };

  const validatePhoneNumber = (e) => {
    const phoneNumber = document.getElementById("phone").value.trim();
    const phoneRegex = /^\d{10}$/; // Simple regex for 10-digit phone number

    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      e.preventDefault(); // Prevent form submission
      return false;
    }

    // Continue with your logic here (e.g., send verification code, redirect to next page)

    return true;
  };

  return (
    <div>
      <style>{`
        /* Global reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #07252d;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .container {
          width: 100%;
          max-width: 600px;
          height: 650px;
          background-color: #fff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 8px #07252d;
          text-align: center;
        }

        .brand-logo {
          width: 80px;
          margin-bottom: 20px;
        }

        #phone {
          font-size: 1rem;
          margin-top: 40px;
        }
        
        .brand-name {
          color: #333;
          font-size: 24px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 1.5rem;
        }

        h2 {
          margin-bottom: 20px;
          color: #333;
          font-size: 12px;
        }

        input[type="tel"] {
          width: 100%;
          padding: 14px;
          margin-bottom: 20px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 16px;
          transition: border-color 0.3s, box-shadow 0.3s;
          box-sizing: border-box;
        }

        input[type="tel"]:focus {
          outline: none;
          border-color: #6a7eff;
          box-shadow: 0 0 8px rgba(106, 126, 255, 0.5);
        }

        input[type="submit"] {
          background-color: #07252d;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 6px;
          padding: 14px 20px;
          font-size: 16px;
          transition: background-color 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          width: 100%;
          max-width: 100%;
        }

        input[type="submit"]:hover {
          background-color: #0056b3;
        }

        .info-text {
          color: #666;
          font-size: 1rem;
          margin-top: 10px;
        }

        @media (max-width: 480px) {
          .container {
            padding: 30px;
          }
          
          .brand-logo {
            width: 60px;
          }
          
          .brand-name {
            font-size: 20px;
          }
          
          h1 {
            font-size: 1.2rem;
          }
          
          h2 {
            font-size: 18px;
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
        <img src="https://via.placeholder.com/100x100?text=Logo" alt="Brand Logo" className="brand-logo" />
        <div className="brand-name">Your Brand Name</div>
        <h1>Enter Your Phone Number to Continue</h1>
        <form id="phone-form" onSubmit={validatePhoneNumber}>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          <input type="submit" value="Continue" />
          <div className="info-text">
            <br />We'll contact you through this phone number if required. 
            <br /><br /> Ensure to give correct phone number to have no hassle in making payments.
          </div>
        </form>
      </div>
    </div>
  );
}

export default Phone;
