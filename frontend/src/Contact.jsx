import React from 'react';

function Contact() {
  return (
    <div 
    style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%' 
    }}
  >
 <img onClick={() => window.history.back()} id="back" src="back.png" alt="Back"  style={{ 
            position: 'absolute',
            top: '10px',
            left: '10px'
          }}/>
    <div 
      className="container" 
      id="mainbox" 
      style={{ 
        backgroundColor: '#07252d',
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        padding: "40px",
        alignContent:'center',

        marginTop: "20px",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(7, 37, 45, 0.3)", 
        textAlign: "center"
      }}
    >
     
      <h1 id="vision" style={{ 
        fontSize: '3em',
        letterSpacing: '15px',
        color: '#0b5e75',
        textTransform: 'uppercase',
        width: '100%',
        WebkitBoxReflect: 'below 1px linear-gradient(transparent, #0008)',
        lineHeight: '0.70em',
        textAlign: 'center'
      }}>Contact Sales</h1>
      <p style={{fontSize:"1.3rem",marginTop:'8%',color:'white'}}>For inquiries or to get started with us, <b>please contact us via email or fill out the form below to request a callback.</b></p>

      <div className="contact-info">
        <p style={{ fontSize: 'large', color: 'white', marginTop: '10%', fontSize: '1rem', marginBottom: '10px' }}>
          Email: <a href="mailto:sales@example.com" style={{color: 'white'}}>sales@example.com</a>
        </p>
      </div>

      <h2 style={{ color: 'red' }}>Request a Callback</h2>
      <form 
        action="https://docs.google.com/forms/d/e/your-form-id/formResponse" 
        method="POST" 
        target="_blank" 
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <label htmlFor="name" style={{
          marginBottom: '3px',
          color: 'white',
          fontSize: '18px',
          display: 'block',
          textAlign: 'left',
          alignItems: 'left',
          width: '100%',
          
        }}>Your Brand Name</label>
        <input 
          type="text" 
          id="name" 
          name="entry.1234567890" 
          required 
          style={{
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #dddddd',
            borderRadius: '6px',
            fontSize: '16px',
            width: '100%',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            backgroundColor: '#0b5e75',
            color: 'white'
          }}
        />

        <label htmlFor="phone" style={{
          marginBottom: '3px',
          color: 'white',
          fontSize: '18px',
          display: 'block',
          textAlign: 'left',
          alignItems: 'left',
          width: '100%',
          
        }}>Your Phone Number or mail id</label>
        <input 
          type="text" 
          id="phone" 
          name="entry.0987654321" 
          required 
          style={{
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #dddddd',
            borderRadius: '6px',
            fontSize: '16px',
            width: '100%',
            alignItems:'left',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            backgroundColor: '#0b5e75',
            color: 'white'
          }}
        />

        <label htmlFor="website" style={{
          marginBottom: '3px',
          color: 'white',
          fontSize: '18px',
          display: 'block',
          textAlign: 'left',
          alignItems: 'left',
          width: '100%',
          
        }}>Your website url</label>
        <input 
          type="text" 
          id="website" 
          name="entry.2468013579" 
          style={{
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #dddddd',
            borderRadius: '6px',
            fontSize: '16px',
            width: '100%',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            backgroundColor: '#0b5e75',
            color: 'white'
          }}
        />

        <label htmlFor="message" style={{
          marginBottom: '3px',
          color: 'white',
          fontSize: '18px',
          display: 'block',
          textAlign: 'left',
          alignItems: 'left',
          width: '100%',
       
        }}>Additional Information (optional)</label>
        <textarea 
          id="message" 
          name="entry.1357913579" 
          rows="4" 
          style={{
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #dddddd',
            borderRadius: '6px',
            fontSize: '16px',
            width: '100%',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            backgroundColor: '#0b5e75',
            color: 'white'
          }}
        ></textarea>

        <button 
          type="submit" 
          style={{
            padding: '16px 28px',
            backgroundColor: '#b42525',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '18px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#b42525'}
        >
          Request Callback
        </button>
      </form>
    </div>
    </div> 
  );
}

export default Contact;
