import React from 'react';
import './Banner.css';

const Banner = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href attribute to the APK file location
    link.href = '/dreamsport.apk'; // Ensure this path is correct and accessible
    
    // Set the download attribute with the desired file name
    link.download = 'dreamsport.apk'; 
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
  };

  const handleTitleClick = (e) => {
    e.preventDefault(); // Prevent any default behavior
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>DreamSport</h1>
        <p className="banner-tagline">Unleash Your Potential</p>
        
        {/* Call to Action Section */}
        <div className="call-to-action">
          <button className="cta-button" onClick={handleDownload}>Download the App</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
