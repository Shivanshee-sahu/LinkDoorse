import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#0e3742', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0 }}>
      <div className="error-container" style={{ textAlign: 'center', padding: '40px', maxWidth: '600px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px #07252d' }}>
        <h1 style={{ color: '#ff6347', fontSize: '5rem', marginBottom: '20px' }}>404</h1>
        <p style={{ fontSize: '1.5rem', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>Oops! Page Not Found</p>
        <p style={{ fontSize: '1.5rem', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>Looks like you've wandered off the beaten path.</p>
        <p style={{ fontSize: '1.5rem', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>No worries, even the best explorers get lost sometimes.</p>
        <p style={{ fontSize: '1.5rem', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>Here are a few steps you could take:</p>
        <ul style={{ textAlign: 'left', marginLeft: '40px', fontSize: 'large', listStyleType: 'none' }}>
          <li><strong>Double-check the URL:</strong> Maybe there's a small typo or a gremlin at play.</li>
          <li><strong>Go Back:</strong> Use the navigation bar above or click the back button on your browser.</li>
          <li><strong>Stay Calm:</strong> Take a deep breath. Everything will be alright.</li>
        </ul>
        <Link to="/" className="contact-link" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s ease', fontSize: 'x-large' }}>Go Home</Link>
      </div>
    </div>
  );
}

export default Error;
