import React, { useState } from 'react';

function Pay() {
  const [accountNo, setAccountNo] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [upiId, setUpiId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if ((accountNo && ifscCode) || upiId) {
      setMessage('Payout request submitted successfully!');
      // You can set the message color using a class or inline style
      // Add your AJAX request here to send the data to the server
      // Example:
      // fetch('/submit-payout', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({ accountNo, ifscCode, upiId })
      // }).then(response => response.json())
      // .then(data => {
      //     console.log(data);
      // });
    } else {
      setMessage('Please fill either Account Number and IFSC Code or UPI ID.');
    }
  };

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
        }

        .container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px #07252d;
          width: 320px;
          text-align: center;
          max-width: 100%;
        }

        h2 {
          margin-bottom: 20px;
          color: #333;
          font-size: 2rem;
        }

        .form-group {
          margin-bottom: 15px;
          text-align: left;
        }

        label {
          display: block;
          margin-bottom: 6px;
          color: #555;
          font-size: 14px;
        }

        input {
          width: calc(100% - 20px);
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        #message {
          margin-top: 15px;
          color: #dc3545;
          font-size: 14px;
        }

        @media (max-width: 480px) {
          .container {
            width: 90%;
            max-width: 100%;
          }

          h2 {
            font-size: 1.8rem;
          }

          label {
            font-size: 12px;
          }

          input,
          button {
            font-size: 14px;
          }

          button {
            padding: 10px;
          }

          #message {
            font-size: 12px;
          }
        }
      `}</style>
      <div className="container">
        <h2>Payout Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="accountNo">Account Number:</label>
            <input
              type="text"
              id="accountNo"
              name="accountNo"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ifscCode">IFSC Code:</label>
            <input
              type="text"
              id="ifscCode"
              name="ifscCode"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="upiId">UPI ID:</label>
            <input
              type="text"
              id="upiId"
              name="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
          <button type="submit">Request Payout</button>
        </form>
        <div id="message" style={{ color: (accountNo && ifscCode) || upiId ? 'green' : 'red' }}>
          {message}
        </div>
      </div>
    </div>
  );
}

export default Pay;
