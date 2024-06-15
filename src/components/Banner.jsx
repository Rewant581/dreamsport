import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/dreamsport.apk';
    link.download = 'dreamsport.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Redirect to banner page (can be the home page)
    window.location.href = '/';
  };

  const handleTitleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  const handleSignUpClose = () => {
    setShowSignUpModal(false);
    setShowLoginModal(true); // Show login modal after closing the sign-up modal
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setShowLoginModal(false);
    setShowLoginSuccess(true);
  };

  const handleLoginSuccessClose = () => {
    setShowLoginSuccess(false);
    setShowDownloadPrompt(true);
  };

  const handleDownloadPromptClose = () => {
    setShowDownloadPrompt(false);
    handleDownload();
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>DreamSport</h1>
        <p className="banner-tagline">Unleash Your Potential</p>
        
        <div className="call-to-action">
          <button className="cta-button" onClick={handleDownload}>Download the App</button>
          <button className="cta-button" onClick={() => setShowLoginModal(true)}>Login</button>
          <button className="cta-button" onClick={() => setShowSignUpModal(true)}>Sign Up</button>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLoginModal(false)}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="modal-button">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleSignUpClose}>&times;</span>
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="modal-button">Sign Up</button>
            </form>
          </div>
        </div>
      )}

      {/* Login Success Notification */}
      {showLoginSuccess && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleLoginSuccessClose}>&times;</span>
            <h2>Login Successful</h2>
            <p>Welcome back! Click below to download the app.</p>
            <button className="modal-button" onClick={handleLoginSuccessClose}>Continue</button>
          </div>
        </div>
      )}

      {/* Download App Prompt */}
      {showDownloadPrompt && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleDownloadPromptClose}>&times;</span>
            <h2>Download the App</h2>
            <p>Get the DreamSport app now and enjoy the best experience!</p>
            <button className="modal-button" onClick={handleDownloadPromptClose}>Download</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
