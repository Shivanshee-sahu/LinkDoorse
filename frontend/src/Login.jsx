import React from 'react';

function Login() {
  return (
    <div>
      <style>{`
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #07252d;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            position: relative;
        }
        .container {
            width: 100%;
            max-width: 400px;
            background-color: #fff;
            padding: 40px;
            height: 600px;
            border-radius: 8px;
            box-shadow: 0 0 20px #07252d;
            text-align: center;
            transition: transform 0.2s, box-shadow 0.3s;
            overflow: hidden; /* Ensure rounded corners are visible */
        }
        .back-button {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            height: 80px;
            width: 100px;
        }
        h2 {
            margin-bottom: 50px;
            color: #333;
            font-size: 2.5rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        input[type="text"], input[type="password"], input[type="submit"], .oauth-buttons {
            width: 100%;
            padding: 14px;
            margin-bottom: 20px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1rem;
            transition: border-color 0.3s, box-shadow 0.3s;
        }
        input[type="text"]:focus, input[type="password"]:focus {
            outline: none;
            border-color: #6a7eff;
            box-shadow: 0 0 8px rgba(106, 126, 255, 0.5);
        }
        input[type="submit"], .oauth-button {
            background-color: #07252d;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 6px;
            padding: 14px;
            font-size: 1rem;
            transition: background-color 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            width: 100%;
            max-width: 100%;
            display: inline-block;
            box-shadow: 0 4px 8px #07252d;
        }
        input[type="submit"]:hover, .oauth-button:hover {
            background-color:  #07252d;
        }
        .error-message {
            color: #f44336;
            margin-top: 10px;
            font-size: 0.875rem;
            text-align: left;
        }
        .oauth-buttons {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        #vision {
            position: relative;
            font-size: 3em;
            letter-spacing: 15px;
            color: #0b5e75;
            margin-top: 1%;
            text-transform: uppercase;
            width: 100%;
            -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
            line-height: 0.70em;
            outline: none;
            align-items: center;
            text-align: center;
        }
        .oauth-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px;
            border-radius: 6px;
            text-decoration: none;
            color: white;
            transition: background-color 0.3s ease;
            width: 100%;
            max-width: 100%;
            font-size: 1rem;
            box-shadow: 0 4px 8px #07252d;
        }
        .oauth-button img {
            width: 44px;
            height: 44px;
            margin-right: 10px;
        }
        .oauth-button.instagram {
            background-color: #e4405f; 
        }
        .oauth-button.google {
            background-color: #4285f4; 
        }
        .oauth-button.facebook {
            background-color: #3b5998; 
        }
        .oauth-button:hover {
            filter: brightness(90%);
        }
        .divider {
            margin: 30px 0;
            position: relative;
            display: flex;
            align-items: center;
            text-align: center;
        }
        .divider::before,
        .divider::after {
            content: "";
            flex: 1;
            border-bottom: 1px solid #ccc;
        }
        .divider::before {
            margin-right: 10px;
        }
        .divider::after {
            margin-left: 10px;
        }
        .or-text {
            position: relative;
            z-index: 1;
            color: #999;
            text-transform: uppercase;
            font-size: 1.375rem;
            font-weight: bold;
            letter-spacing: 1px;
            background-color: #fff;
            padding: 0 15px;
        }
        .social-buttons {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        .social-button {
            background-color: transparent;
            border: 1px solid #ccc;
            padding: 12px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
            width: 120px;
            max-width: 100%;
            text-decoration: none;
            color: #333;
        }
        .social-button img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }
        .social-button:hover {
            background-color: #f0f0f0;
            border-color: #6a7eff;
            color: #6a7eff;
        }
        @media (max-width: 480px) {
            .container {
                padding: 30px;
            }
            h2 {
                font-size: 1.5rem;
            }
            input[type="text"], input[type="password"], input[type="submit"], .oauth-button {
                padding: 12px;
                font-size: 0.875rem;
            }
            .social-buttons {
                flex-direction: column;
                gap: 15px;
            }
            .social-button {
                width: 100%;
                max-width: 100%;
            }
            .back-button {
                top: 5px;
                left: 5px;
                height: 40px;
                width: 60px;
                padding: 8px 16px;
            }
        }
      `}</style>
      <img className="back-button" onClick={() => window.history.back()} src="back.png" alt="Back Button" />
      <div className="container">
        <h2 id="vision">Login</h2>
        <form id="login-form" action="#" method="POST" onSubmit={() => validateForm()}>
          <input type="text" id="username" name="username" placeholder="Username" required /><br />
          <input type="password" id="password" name="password" placeholder="Password" required /><br />
          <input type="submit" value="Login" />
          <div id="error-message" className="error-message"></div>
        </form>

        <div className="divider">
          <span className="or-text">or login with</span>
        </div>

        <div className="social-buttons">
          <a href="#" className="social-button instagram" onClick={() => loginWithInstagram()}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Icon" /> Instagram
          </a>
          <a href="#" className="social-button google" onClick={() => loginWithGoogle()}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Icon" /> Google
          </a>
          <a href="#" className="social-button facebook" onClick={() => loginWithFacebook()}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Icon" /> Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

function validateForm() {
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    document.getElementById("error-message").innerText = "Please enter both username and password.";
    return false;
  }

  return true;
}

function loginWithInstagram() {
  // Add your Instagram login logic here
}

function loginWithGoogle() {
  // Add your Google login logic here
}

function loginWithFacebook() {
  // Add your Facebook login logic here
}

export default Login;
