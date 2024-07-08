// About.jsx

import React from 'react';
import './About.css'; // Import your existing CSS file

const About = () => {
    return (
        <div>
            {/* Header Section */}
            <header>
                <img onClick={() => window.history.back()} id="back" src="back.png" alt="Back"></img>
                <h1 className="animate_animated animate_fadeInDown" contentEditable="true" id="about">About Us</h1>
                <p className="animate_animated animate_fadeInUp aboutit" id="abtpg">Welcome to BranVolt.<br />Empowering Influencers, Elevating Brands.</p>
            </header>

            {/* Vision Section */}
            <section className="section vision-section">
                <div className="container">
                    <div className="section-content">
                        <h2 className="animate_animated animate_fadeInLeft" id="vision">Our Mission</h2>
                        <p className="animate_animated animate_fadeInRight" id="visionp">Our Mission goals are -
                            <ol id="visionlist">
                                <li>Connecting influencers with brands to create authentic partnerships and meaningful campaigns.</li>
                                <li>Transforming digital engagement through influencer-brand collaborations.</li>
                                <li>Empowering Startups by reducing Marketing Expense.</li>
                                <li>Revolutionising the Marketing Sector.</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="section vision-section" id="story">
                <div className="container">
                    <div className="section-content">
                        <h2 className="animate_animated animate_fadeInLeft" id="vision">Our Story</h2>
                        <p className="animate_animated animate_fadeInRight" id="visionp">We are starting our journey with you and always want to stay connected with you...</p>
                    </div>
                    <div className="section-image animate_animated animate_fadeIn">
                        {/* Replace with your images */}
                        <img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Vision" />

                        <img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Vision" />
                        <img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Vision" />

<img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Vision" />


                        <img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Vision" />
                    </div>
                </div>
            </section>

            {/* What We Provide Section */}
            <section id="provide" className="section provide-section section vision-section">
                <div className="container">
                    <div className="section-content">
                        <h2 className="animate_animated animate_fadeInLeft" id="vision">What We Provide</h2>
                        <p className="animate_animated animate_fadeInRight" id="visionp">We provide a platform where any creator or Influencer can connect with any brand of their choice & can create on their own terms. <br /> For Brands, we are providing a method of low-budget marketing and enormous collabs with Influencers.</p>
                    </div>
                    <div className="section-image animate_animated animate_fadeIn">
                        {/* Replace with your images */}
                        <img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Vision" />

<img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Vision" />


<img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Vision" />

<img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Vision" />


                        <img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Vision" />
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section id="team" className="section team-section">
                <div className="container">
                    <h2 className="animate_animated animate_fadeInLeft" id="vision">Meet Our Team</h2>
                    <p className="animate_animated animate_fadeInRight" id="visionp">Introducing our team members.</p>
                    <div className="team-members">
                        <div className="team-member animate_animated animate_zoomIn">
                            <img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member" />
                            <p>Shivanshee Sahu</p>
                            <p>Co-founder & Lead Developer</p>
                        </div>
                        <div className="team-member animate_animated animate_zoomIn">
                            <img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member" />
                            <p>Shubham Shrivastav</p>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="team-member animate_animated animate_zoomIn">
                            <img src="https://images.unsplash.com/photo-1558293322-979e7c3540d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVzdGVibHVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member" />
                            <p>Jane Smith</p>
                            <p>Lead Developer</p>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact" className="section contact-section">
                <div className="container">
                    <h2 className="animate_animated animate_fadeInLeft" id="vision">Contact Us</h2>
                    <p className="animate_animated animate_fadeInRight" id="visionp">Either Email us at startup@example.com OR click the button below to request a callback from us.</p>
                </div>
            </section>

            {/* Connect with Us Section */}
            <section id="connect" className="section connect-section">
                <div className="container">
                    <h2 className="animate_animated animate_fadeInLeft" id="vision">Connect with Us</h2>
                    <p className="animate_animated animate_fadeInRight" id="visionp">Provide links to your social media profiles.</p>
                    <div className="social-links">
                        <a href="#" target="blank" className="animate_animated animate_zoomIn"><img src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png" alt="Facebook" /></a>
                        <a href="#" target="blank" className="animate_animated animate_zoomIn"><img src="https://png.pngtree.com/png-clipart/20180506/ourmid/pngtree-twitter-icon-logo-png-image_3560523.png" alt="Twitter" /></a>
                        <a href="#" target="blank" className="animate_animated animate_zoomIn"><img src="https://as2.ftcdn.net/v2/jpg/03/20/88/33/1000_F_320883393_q7ROQwEkFchU1WGGSfwxCG9X9CLUW0JD.jpg" alt="Instagram" /></a>
                        {/* Add more social media icons as needed */}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer>
                <div  >
                    <p style={{fontSize:'1rem'}}>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default About;
