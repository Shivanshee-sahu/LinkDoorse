import React from 'react';

const TermsAndConditions = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <style>
        {`
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #07252d;
            color: #333;
          }

          .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px #07252d;
          }

          h1 {
            text-align: center;
            color: #07252d;
            margin-bottom: 20px;
          }

          h2 {
            margin-top: 30px;
            color:#07252d;
            font-size: 1.5em; /* Adjusted font-size */
            border-bottom: 2px solid #ddd;
            padding-bottom: 5px;
          }

          p {
            font-size: 1em; /* Adjusted font-size */
            margin: 10px 0;
            line-height: 1.6; /* Adjusted line-height */
          }

          ul {
            margin: 10px 0;
            padding-left: 20px; /* Adjusted padding */
          }

          ul li {
            margin: 5px 0;
          }

          footer {
            text-align: center;
            margin-top: 40px;
            padding: 15px 0;
            background: #444;
            color: #fff;
            border-radius: 0 0 8px 8px;
          }
          
        `}
      </style>
      <img
        onClick={goBack}
       style={{ position: "absolute",
          top: "10px",
          left: "10px",
          padding:" 10px 20px",
          cursor: 'pointer',
          height:'50px',
          width: '70px'}}
        
        src="back.png"
        alt="Back"
      />
      <div style={{backgroundColor:''}} className="container">
        <h1>Influencer Payment Terms and Conditions</h1>

        <h2>1. Introduction</h2>
        <p style={{fontSize:'1rem'}}>Welcome to BranVolt. These payment terms and conditions outline the rules and regulations for influencers.</p>

        <h2>2. Payment Methods</h2>
        <p style={{fontSize:'1rem'}}>Influencers will be compensated through the following payment methods:</p>
        <ul>
          <li style={{fontSize:'1rem'}}>UPI</li>
          <li style={{fontSize:'1rem'}}>Bank Transfers</li>
          <li style={{fontSize:'1rem'}}>Other payment methods as agreed upon with the brand</li>
        </ul>
        <p style={{fontSize:'1rem'}}>It is the influencer's responsibility to ensure that these details are accurate and up-to-date.</p>

        <h2>3. Payment Due Dates</h2>
        <p style={{fontSize:'1rem'}}>Payments will be processed within 7 days after the brand has confirmed the completion of the agreed-upon deliverables and had delivered the amount to us. This confirmation will be communicated through the platform in Payments section.</p>

        <h2>4. Late Payments</h2>
        <p style={{fontSize:'1rem'}}>If payment is not received by the due date, influencers should contact our support team. We will work with the brand to resolve any payment issues promptly. But the Influencer can not ask for any kind of compensation or interest for late or unsuccessful payments.</p>

        <h2>5. Refunds and Disputes</h2>
        <p style={{fontSize:'1rem'}}>Refunds are not typically issued for services rendered. However, disputes will be handled on a case-by-case basis. Influencers should provide detailed information regarding the dispute, and our support team will mediate between the influencer and the brand to reach a resolution.</p>

        <h2>6. Accuracy of Payment Details</h2>
        <p style={{fontSize:'1rem'}}>Influencers must ensure the accuracy of their payment details. The platform is not responsible for any delays or failures in payment due to incorrect information provided by the influencer. Any changes in payment details must be promptly communicated to the platform. If in case amount is credited to a wrong person due to wrong details provided by the Influencer, our team/company is not responsible for it. And influencer must not ask us to reverse the transaction or to credit that amount to them as we will end up losing money. However, you can contact Bank/RBI for the reversal of the transaction, contact our team for support in such cases.</p>

        <h2>7. Tax Obligations</h2>
        <p style={{fontSize:'1rem'}}>Influencers are responsible for any taxes applicable to their earnings. The platform does not withhold taxes unless required by law. Influencers should consult with a tax professional to understand their tax obligations.</p>

        <h2>8. Currency of Payment</h2>
        <p style={{fontSize:'1rem'}}>All payments will be made in Indian Rupees (INR). Influencers should be aware of potential currency conversion fees if they are based outside of the platform's primary operating region.</p>

        <h2>9. Non-Compliance and Withholding of Payment</h2>
        <p style={{fontSize:'1rem'}}>The platform reserves the right to withhold payment if the influencer fails to comply with campaign guidelines or breaches any terms of the agreement. Repeated non-compliance may result in the suspension or termination of the influencer's account.</p>

        <h2>10. Confidentiality</h2>
        <p style={{fontSize:'1rem'}}>Influencers must maintain the confidentiality of payment terms and campaign details as outlined in the platform's confidentiality agreement. Unauthorized disclosure of such information may result in penalties, including suspension of payment and account termination.</p>

        <h2>11. Payment Discrepancies</h2>
        <p style={{fontSize:'1rem'}}>If there are any discrepancies in the payment received, influencers must report them within 15 days of receiving the payment. The platform will investigate and rectify any genuine discrepancies promptly.</p>

        <h2>12. Termination of Agreement</h2>
        <p style={{fontSize:'1rem'}}>Either party (the platform or the influencer or the brand) can terminate the agreement anytime. In the event of termination, the influencer will be paid for any completed and approved deliverables up to the termination date.</p>

        <h2>13. Force Majeure</h2>
        <p style={{fontSize:'1rem'}}>The platform is not liable for any delays or failures in payment due to circumstances beyond its control, such as natural disasters, strikes, or other events of force majeure.</p>

        <h2>14. Refunds and Chargebacks</h2>
        <p style={{fontSize:'1rem'}}>In the event of any refunds or chargebacks from the brand, the platform reserves the right to deduct the corresponding amount from the influencer's future payments.</p>

        <h2>15. Compliance with Laws</h2>
        <p style={{fontSize:'1rem'}}>Influencers must comply with all applicable laws and regulations, including those related to advertising, intellectual property, and data protection. Non-compliance may result in the withholding of payments and potential legal action.</p>

        <h2>16. Quality of Deliverables</h2>
        <p style={{fontSize:'1rem'}}>Influencers must ensure that all content produced for campaigns is original, high-quality, and free from any copyright infringement. Failure to meet these standards may result in payment deductions or non-payment.</p>

        <h2>17. Performance Monitoring</h2>
        <p style={{fontSize:'1rem'}}>The platform reserves the right to monitor influencer performance, including engagement metrics and audience feedback. Consistently poor performance may affect future payment rates and campaign opportunities.</p>

        <h2>18. Fraud Prevention</h2>
        <p style={{fontSize:'1rem'}}>The platform employs measures to detect and prevent fraudulent activities. Influencers found engaging in fraudulent activities, such as inflating engagement metrics, will be subject to immediate termination and forfeiture of payments.</p>

        <h2>19. In case of bankruptcy of the company</h2>
        <p style={{fontSize:'1rem'}}>We reserve the right to decline All payments for any leads/sales generated by the influencer for the future and also the payments of money kept in the wallet for the very moment we report bankruptcy.</p>

        <h2>20. Changes to Terms</h2>
        <p style={{fontSize:'1rem'}}>We reserve the right to modify these payment terms at any time. Any changes will be posted on this page and will take effect immediately upon posting. Influencers must review these terms regularly.</p>

        <footer>
          &copy; 2024 BranVolt. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
