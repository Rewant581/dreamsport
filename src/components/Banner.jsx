import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a user is already logged in
    const userLoggedIn = localStorage.getItem('userLoggedIn');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/dreamsport.apk';
    link.download = 'dreamsport.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTitleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up:', { username, email, password });
    localStorage.setItem('userLoggedIn', true); // Mark user as logged in
    setIsLoggedIn(true);
    setShowSignUpModal(false);
    setShowLoginModal(true); // Show login modal after closing the sign-up modal
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { username, password });
    localStorage.setItem('userLoggedIn', true); // Mark user as logged in
    setIsLoggedIn(true);
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

  // Redirect to homepage if already logged in and trying to open login or sign-up modals
  if (isLoggedIn) {
    if (showLoginModal || showSignUpModal) {
      setShowLoginModal(false);
      setShowSignUpModal(false);
      window.location.href = '/';
    }
  }

  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>DreamSport</h1>
        <p className="banner-tagline">Unleash Your Potential</p>
        
        <div className="call-to-action">
          <button className="cta-button" onClick={handleDownload}>Download the App</button>
          {!isLoggedIn && (
            <>
              <button className="cta-button" onClick={() => setShowLoginModal(true)}>Login</button>
              <button className="cta-button" onClick={() => setShowSignUpModal(true)}>Sign Up</button>
            </>
          )}
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLoginModal(false)}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="modal-button">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSignUpModal(false)}>&times;</span>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
