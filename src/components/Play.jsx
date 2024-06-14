import React from 'react';
import './Play.css';

const HowToPlay = () => {
  return (
    <div className="how-to-play-section">
      <h2 className="how-to-play-title">How to Play on DreamSport</h2>
      <p className="how-to-play-intro">
        Playing on DreamSport is simple and exciting! Follow these steps to start your fantasy sports journey:
      </p>

      <div className="play-step">
        <div className="step-number">1</div>
        <div className="step-details">
          <h4 className="step-title">Register and Create Your Account</h4>
          <p className="step-description">Sign up on DreamSport using your email or social media account. It's quick and easy, and you'll be ready to join the action in no time!</p>
        </div>
      </div>

      <div className="play-step">
        <div className="step-number">2</div>
        <div className="step-details">
          <h4 className="step-title">Select a Match and Build Your Team</h4>
          <p className="step-description">Choose from a variety of upcoming matches in different sports. Use your knowledge and strategy to select the best players and build your dream team.</p>
        </div>
      </div>

      <div className="play-step">
        <div className="step-number">3</div>
        <div className="step-details">
          <h4 className="step-title">Join Contests and Compete</h4>
          <p className="step-description">Enter your team into various contests. Compete against other players to win exciting prizes and showcase your fantasy sports skills.</p>
        </div>
      </div>

      <div className="play-step">
        <div className="step-number">4</div>
        <div className="step-details">
          <h4 className="step-title">Track Your Performance and Win Rewards</h4>
          <p className="step-description">Monitor your team's performance in real-time. Earn points based on how your selected players perform in actual matches and climb the leaderboard to win rewards.</p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
