import React from 'react';
import './Footer.css';
import object8 from '../asset/object8.png'; 
import object9 from '../asset/object9.png'; 

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-info">
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/Fair" className="footer-link">Fair Play Violation</a>
          <a href="/Legal" className="footer-link">Legalities</a>
          <a href="/Privacy" className="footer-link">Privacy Policy</a>
          <a href="/Responsible" className="footer-link">Responsible Gaming</a>
          <a href="https://web.whatsapp.com/" className="footer-link" target="_blank" rel="noopener noreferrer">Contact Us</a>
          <a href="/Faq" className="footer-link">FAQ</a>
          <a href="/Addiction" className="footer-link">Game Addiction</a>
          <a href="/Terms" className="footer-link">Terms & Conditions</a>
        </div>
        
        <div className="footer-payments">
          <h4>Payment Options</h4>
          <img src={object8} alt="Payment Options" className="payment-options-image" />
        </div>
        <div className="footer-logo">
          <h4>Presented By</h4>
          <img src={object9} alt="DreamSport" className="footer-logo-image" />
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="footer-disclaimer">
      <h2>DISCLAIMER</h2>
        <p>
          Geographical Restrictions Location Compliance: Our platform is not accessible from states where DFS is prohibited, including Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.
          <br />
          This game involves an element of financial risk and may be addictive. Please play responsibly at your own work.
          <br />
          © 2024 PRO GO. All rights reserved.
        </p>
      </div>

      <div className="footer-policies">
        <a href="/" className="footer-policy">100% Legal & Secure</a>
        <a href="/" className="footer-policy">24x7 Customer Support</a>
        <a href="/" className="footer-policy">Strict Fairplay Policies</a>
        <a href="/" className="footer-policy">Instant Prizes</a>
        <a href="/" className="footer-policy">Exciting Offers</a>
      </div>
    </div>
  );
};

export default Footer;
