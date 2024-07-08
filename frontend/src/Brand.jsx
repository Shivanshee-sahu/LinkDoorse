import React, { useState } from 'react';
import './Brand.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
function Brand() {
    const [activeAccordion, setActiveAccordion] = useState(null);

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null); 
    } else {
      setActiveAccordion(index);
    }
  };
  return (
    <>
     
          <script>
            {`
              function goBack() {
                window.history.back();
              }
            `}
          </script>

          <section id="header">
            <header>
              
            <img onClick={() => window.history.back()} id="back" src="back.png" alt="Back"></img>
              <h1 className="brands" id="vision1">
                Brands
              </h1>
              <p>Explore our services and collaborations</p>
            </header>
          </section>

          <section id="collaborations">
            <h2 className="section-title" id="vision">
              Discover What We Offer
            </h2>
            <div className="logo-grid">
              <div className="offer-item">
                <div className="offer-content">
                  <h3>Low Marketing Cost</h3>
                  <p>
                    amet, consectetur adipiscing elit. Nulla convallis libero
                    et feugiat sdjs lorem ipson  sdjs lorem ipson .
                  </p>
                </div>
                <div className="offer-image">
                  <img
                    src="https://t4.ftcdn.net/jpg/06/56/21/93/240_F_656219330_WqR3SBQT8KVnHgcZz9Mar2aNNrfW4ZjN.jpg"
                    alt="Product Design"
                  />
                </div>
              </div>

              <div className="offer-item">
                <div className="offer-content">
                  <h3>Brand Strategy</h3>
                  <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis libero et feugiat jsdhjsh.
                  </p>
                </div>
                <div className="offer-image">
                  <img
                    src="https://t4.ftcdn.net/jpg/06/56/21/93/240_F_656219330_WqR3SBQT8KVnHgcZz9Mar2aNNrfW4ZjN.jpg"
                    alt="Product Design"
                  />
                </div>
              </div>

              <div className="offer-item">
                <div className="offer-content">
                  <h3>Pay as Per Sales You Gain</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis libero et feugiat.
                  </p>
                </div>
                <div className="offer-image">
                  <img
                    src="https://t4.ftcdn.net/jpg/06/56/21/93/240_F_656219330_WqR3SBQT8KVnHgcZz9Mar2aNNrfW4ZjN.jpg"
                    alt="Product Design"
                  />
                </div>
              </div>

              <div className="offer-item">
                <div className="offer-content">
                  <h3>Web Development</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis libero et feugiat.
                  </p>
                </div>
                <div className="offer-image">
                  <img
                    src="https://t4.ftcdn.net/jpg/06/56/21/93/240_F_656219330_WqR3SBQT8KVnHgcZz9Mar2aNNrfW4ZjN.jpg"
                    alt="Product Design"
                  />
                </div>
              </div>

              <div className="offer-item">
                <div className="offer-content">
                  <h3>Acquire New Customers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis libero et feugiat.
                  </p>
                </div>
                <div className="offer-image">
                  <img
                    src="https://t4.ftcdn.net/jpg/06/56/21/93/240_F_656219330_WqR3SBQT8KVnHgcZz9Mar2aNNrfW4ZjN.jpg"
                    alt="Product Design"
                  />
                </div>
              </div>
            </div>
          </section>
        
          <section id="start">
            <div id="get-started">
              <h2 className="section-title" id="vision">
                Getting Started
              </h2>
              <p>
                Learn how to start collaborating with us today. Click the
                button below to get started.
              </p>
              <a href="/login/completeprofile.html" id="GS">
                Get Started
              </a>
            </div>
          </section>
          {/* End How to Get Started Section */}

          <div class="containerCon">
          <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;&nbsp;
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <FontAwesomeIcon icon={faEnvelope} /> &nbsp;&nbsp;
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <FontAwesomeIcon icon={faPhone} /> &nbsp;&nbsp;
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
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
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>


          <section id="comp">
            <h2 id="vision2">Our collaborations</h2>
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="container1">
      <h2 className="que" id="vision">
        Frequently Asked Questions
      </h2>
      <div className="accordion">
        <div className="accordion-item">
          <button
            id="accordion-button-1"
            aria-expanded={activeAccordion === 1 ? 'true' : 'false'}
            className="accordion-title"
            onClick={() => toggleAccordion(1)}
          >
            Why is the moon sometimes out during the day?
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeAccordion === 1 ? 'open' : 'closed'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-2"
            aria-expanded={activeAccordion === 2 ? 'true' : 'false'}
            className="accordion-title"
            onClick={() => toggleAccordion(2)}
          >
            Why is the sky blue?
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeAccordion === 2 ? 'open' : 'closed'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-3"
            aria-expanded={activeAccordion === 3 ? 'true' : 'false'}
            className="accordion-title"
            onClick={() => toggleAccordion(3)}
          >
            Will we ever discover aliens?
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeAccordion === 3 ? 'open' : 'closed'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-4"
            aria-expanded={activeAccordion === 4 ? 'true' : 'false'}
            className="accordion-title"
            onClick={() => toggleAccordion(4)}
          >
            How much does the Earth weigh?
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeAccordion === 4 ? 'open' : 'closed'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-5"
            aria-expanded={activeAccordion === 5 ? 'true' : 'false'}
            className="accordion-title"
            onClick={() => toggleAccordion(5)}
          >
            How do airplanes stay up?
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeAccordion === 5 ? 'open' : 'closed'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
      </div>
    </div>
          <footer>
            <nav>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </nav>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </footer>
          <script src="brands.js"></script>
          <script
            src="https://kit.fontawesome.com/64d58efce2.js"
            crossorigin="anonymous"
          ></script>
          <script>
            {`
              const items = document.querySelectorAll(".accordion button");

              function toggleAccordion() {
                const itemToggle = this.getAttribute('aria-expanded');

                for (let i = 0; i < items.length; i++) {
                  items[i].setAttribute('aria-expanded', 'false');
                }

                if (itemToggle === 'false') {
                  this.setAttribute('aria-expanded', 'true');
                }
              }

              items.forEach(item => item.addEventListener('click', toggleAccordion));

              const inputs = document.querySelectorAll(".input");

              function focusFunc() {
                let parent = this.parentNode;
                parent.classList.add("focus");
              }

              function blurFunc() {
                let parent = this.parentNode;
                if (this.value === "") {
                  parent.classList.remove("focus");
                }
              }

              inputs.forEach((input) => {
                input.addEventListener("focus", focusFunc);
                input.addEventListener("blur", blurFunc);
              });
            `}
          </script>
       
    </>
  );
}

export default Brand;
