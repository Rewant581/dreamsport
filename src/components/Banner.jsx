import React from 'react';
import './Banner.css';
import objects3 from '../asset/objects3.png';
import objects4 from '../asset/objects4.png';
import objects5 from '../asset/objects5.png';

const Banner = () => {
  const handleDownload = () => {
    
    const link = document.createElement('a');
    link.href = '/index2.pdf';
    link.download = 'DreamSport_App_Link.pdf'; // Name the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTitleClick = (e) => {
    e.preventDefault(); // Prevent any default behavior
    window.scrollTo(0, 0); // Optionally scroll to top if needed
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>DreamSport</h1>
        <p className="banner-tagline">Unleash Your Potential</p>
        
        {/* Call to Action Section */}
        <div className="call-to-action">
          <button className="cta-button" onClick={handleDownload}>Get App Link</button>
          <p className="cta-subtext">Join now and get 15% bonus</p>
        </div>
        
        {/* Features Section */}
        <div className="features">
          <div className="feature-item">
            <img src={objects3} alt="Registrations" />
            <p>5 LAKHS+<br />Registrations</p>
          </div>
          <div className="feature-item">
            <img src={objects4} alt="Players" />
            <p>3 LAKHS+<br />Play Everyday</p>
          </div>
          <div className="feature-item">
            <img src={objects5} alt="Contests" />
            <p>1000+<br />Everyday Contests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
