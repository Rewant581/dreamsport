import React from 'react';
import './Step.css';
import objects from '../asset/objects.png';
import objects1 from '../asset/objects1.png';
import objects2 from '../asset/objects2.png';

const Steps = () => {
  return (
    <div className="steps-section">
      <div className="step">
        <div className="step-number">1</div>
        <h4 className="step-title">Select a match</h4>
        <p className="step-description">Choose an upcoming match from your favorite sport.</p>
        <img src={objects} alt="Select a match" className="step-image" />
      </div>
      <div className="step">
        <div className="step-number">2</div>
        <h4 className="step-title">Create Team</h4>
        <p className="step-description">Create your team with the best players using your skills.</p>
        <img src={objects1} alt="Create team" className="step-image" />
      </div>
      <div className="step">
        <div className="step-number">3</div>
        <h4 className="step-title">Join League</h4>
        <p className="step-description">From a wide range of contests, choose the one you want to join.</p>
        <img src={objects2} alt="Join league" className="step-image" />
      </div>
    </div>
  );
};

export default Steps;
