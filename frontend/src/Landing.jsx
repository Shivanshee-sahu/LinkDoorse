import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
function Landing() {
    const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });

    useEffect(() => {
      const updateCursorPosition = (e) => {
        setCursorPosition({ left: e.pageX, top: e.pageY });
      };
  
      document.addEventListener('mousemove', updateCursorPosition);
  
      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
      };
    }, []);
  return (
    <div>
      <style>
        {`
          /* General Styles */
          body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            line-height: 1.6;
            scroll-behavior: smooth;
            overflow-x: hidden;
            color: black;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: rgb(119, 117, 117);
            padding: 10px 2em;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            backdrop-filter: blur(10px);
            transition: background-color 0.3s ease-in-out;
          }

          nav .logo img {
            height: 40px;
          }

         .cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgba(12, 245, 245, 0.942);
            transition: 0.1s;
            transform: translate(-50%, -50%);
            pointer-events: none;
            mix-blend-mode: difference;
            left: ${cursorPosition.left}px;
            top: ${cursorPosition.top}px;
          }
          nav ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
          }

          nav ul li {
            margin-left: 20px;
          }

          /* Link styles */
          nav ul li a {
            padding: 12px;
            text-decoration: none;
            color: black;
            transition: background 0.3s, color 0.3s;
          }

          /* Hover styles */
          nav ul li a:hover {
            background: #0e3742;
            color: white;
            border-radius: 10px;
          }

          .bgred {
            padding: 5px;
            background-color: #e20e54e4;
            border-radius: 10px;
            margin-top: -1%;
            width: 90px;
          }

          /* Hero Section */
          header {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 2em;
            position: relative;
            color: white;
            overflow: hidden;
            background-color: #07252d;
            animation: backgroundZoom 10s infinite alternate;
          }

          header .hero {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 1200px;
          }

          header .hero-text:hover .cursor {
            transform: scale(5);
          }

          header .hero-text {
            flex: 1;
            text-align: left;
            padding-right: 2em;
          }

          header .hero h1 {
            font-size: 3.7em;
            margin: 0;
            font-weight: 700;
            animation: fadeInDown 1s ease-in-out;
            font-family: 'Playfair Display', serif;
          }

          header .hero p {
            font-size: 1.3em;
            margin: 0.5em 0;
            animation: fadeInUp 1s ease-in-out;
          }

          header .signup-button {
            display: inline-block;
            padding: 12px 20px;
            background-color: #f04;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 1.2em;
            transition: 0.3s, transform 0.3s;
            animation: fadeInUp 1s ease-in-out;
          }

          header .signup-button:hover {
            background-color: #f04;
            transform: scale(1.05);
            box-shadow: 5px 5px 0px black;
            transition: all ease 0.5s;
          }

          header .hero-image {
            max-width: 100%;
            height: 500px;
            border-radius: 10px;
            align-items: center;
            position: relative;
            padding: 8px;
            background-color: black;
            overflow: hidden;
          }

          .in {
            height: 100%;
            width: 100%;
            background-color: black;
            position: relative;
            z-index: 99;
          }

          @keyframes backgroundZoom {
            from {
              background-size: 100%;
            }
            to {
              background-size: 110%;
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          hr {
            border: none;
            height: 5px;
            background-color: black;
            margin: 90px 0;
          }

          /* Features Section */
          .features {
            padding: 100px 20px;
            text-align: center;
            color: black;
            
            position: relative;
            z-index: 1;
          }

          .features .feature {
            display: inline-block;
            flex-direction: column;
            align-items: center;
            margin: 20px;
            padding: 20px;
            color: white;
            background-color: #07252d;
            border-radius: 5px;
            transition: transform 0.3s, background-color 0.3s;
            max-width: 100%;
          }

          .features .feature:hover {
            background-color: #07252d;
            transform: translateY(-10px);
          }

          .features .feature img {
            width: 300px;
            height: 300px;
            border-radius: 10px;
            margin-bottom: 15px;
            overflow: hidden;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
          }

          .features .feature:hover img {
            transform: scale(1.2);
          }

          .features .feature h3 {
            font-size: 1.1em;
            margin: 0;
          }

          /* Partners Section */
          .brands {
            color: white;
            padding: 100px 20px;
            background-color: #07252d;
            text-align: center;
          }

          .brands h2 {
            font-size: 2.5em;
            margin-bottom: 1em;
          }

          .brands .brand-logos {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }

          .brands .brand-logos img {
            margin: 20px;
            max-width: 200px;
            height: 200px;
            transition: transform 0.3s;
          }

          .brands .brand-logos img:hover {
            transform: scale(1.1);
          }

          /* Testimonials Section */
          .testimonials {
            color: black;
            padding: 100px 20px;
            text-align: center;
          }

          .testimonials h2 {
            font-size: 2.5em;
            margin-bottom: 1em;
          }

          .testimonials .testimonial {
            margin: 20px;
            display: inline-block;
            max-width: 300px;
            background-color: #07252d;
            padding: 20px;
            color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }

          .testimonials .testimonial img {
            border-radius: 50%;
            margin-bottom: 10px;
            height: 150px;
            width: 150px;
            overflow: hidden;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
          }

          .testimonials .testimonial img:hover {
            transform: scale(1.2);
          }

          /* Footer Section */
          footer {
            padding: 10px 20px;
            text-align: center;
            background-color: #07252d;
          }

          footer h2 {
            font-size: 2em;
            color: white;
            margin-bottom: .1em;
          }

          footer p {
            margin: 0.5em 0;
            color: white;
          }

          footer .social-media {
            margin-top: 20px;
          }

          footer .social-media a {
            margin: 0 10px;
            font-size: 1em;
            color: white;
            transition: color 0.3s;
          }

          footer .social-media a:hover {
            color: #f04;
          }

          @media screen and (max-width: 768px) {
            nav {
              padding: 10px 1em;
            }
            nav .logo img {
              height: 30px;
            }
            nav ul li {
              margin-left: 10px;
            }
            header {
              padding: 0 1em;
            }
            header .hero {
              flex-direction: column-reverse;
              text-align: center;
            }
            header .hero-text {
              padding: 0;
              text-align: center;
            }
            header .hero h1 {
              font-size: 2.5em;
            }
            header .hero p {
              font-size: 1em;
            }
            header .hero-image {
              height: auto;
              max-height: 300px;
            }
            .features .feature {
              max-width: 100%;
            }
            .brands .brand-logos img {
              max-width: 70px;
            }
          }
        `}
      </style>
      <nav>
        <div className="logo">
          <img src="logo.svg" alt="Logo" />
        </div>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/influencer">Influencer</a></li>
          <li><a href="/brand">Brands</a></li>
          <li style={{backgroundColor:" #e20e54e4",borderRadius:'25%'}}><a href="/login">Login</a></li>
        </ul>
        <div className="cursor"></div>
      </nav>
      <header>
      <div class="hero">
            <div class="hero-text">
               
                <h1 style={{color:'white'}}>Discover, Connect, Collaborate – The future of Influencer marketing.</h1>
                <p>Where Influencers meets opportunity – empowering you with paid brand partnerships.</p>
                <a href="/profile" class="signup-button">Sign Up Now & Start Earning</a>
                <div class="cursor"></div>
            </div>
          <div className="hero-image">
            <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="Hero" className="in" />
          </div>
        </div>
      </header>
      <section className="features" id="features">
        <h2 id='vision'>Features</h2>
        <div className="feature">
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png"alt="Feature 1" />
          <h3>Feature 1</h3>
          <p>Description of feature 1.</p>
        </div>
        <div className="feature">
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="Feature 2" />
          <h3>Feature 2</h3>
          <p>Description of feature 2.</p>
        </div>
        <div className="feature">
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="Feature 3" />
          <h3>Feature 3</h3>
          <p>Description of feature 3.</p>
        </div>
        <div className="feature">
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="Feature 3" />
          <h3>Feature 3</h3>
          <p>Description of feature 3.</p>
        </div>
        <div className="feature">
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="Feature 3" />
          <h3>Feature 3</h3>
          <p>Description of feature 3.</p>
        </div>
        <div className="feature">
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="Feature 3" />
          <h3>Feature 3</h3>
          <p>Description of feature 3.</p>
        </div>
      </section>
      <section className="brands" id="partners">
        <h2 id='vision'>Our Partners</h2>
        <div className="brand-logos">
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="Partner 1" />
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="Partner 2" />
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="Partner 3" />
        </div>
      </section>
      <section className="testimonials" id="testimonials">
        <h2 id='vision'> Testimonials</h2>
        <div className="testimonial">
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="User 1" />
          <p>"Great service! Highly recommend."</p>
          <p>- User 1</p>
        </div>
        <div className="testimonial">
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="User 2" />
          <p>"Amazing experience with this company."</p>
          <p>- User 2</p>
        </div>
        <div className="testimonial">
          <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png" alt="User 3" />
          <p>"Very satisfied with the product."</p>
          <p>- User 3</p>
        </div>
      </section>
      <footer id="footer">
        <h2>Contact Us</h2>
        <p>For inquiries, email us at info@example.com</p>
      
        <div className="social-media" style={{marginTop:'-2%'}}>
            <p style={{color:'white',fontSize:'1rem'}}>Connect with us :</p>
            <div className="social-icons" style={{alignItems:'center',display:'flex',justifyContent:'center',paddingBottom:'20px'}}>
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
            <p style={{color:"white"}}>&copy; 2024 Your Company. All rights reserved.</p>
            <a style={{color:"white",'listStyleType':'none',textDecoration:'none'}} href="/term">{/* Add your link destination here */}Terms and Conditions</a>
         
      
      </footer>
      <div className="cursor"></div>
    </div>
  );
}

export default Landing;
