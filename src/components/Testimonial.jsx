import React from 'react';
import './Testimonial.css';

const testimonialsData = [
  {
    amount: 'International Trip',
    name: 'Aakash',
    message: 'I have been playing on DreamSport since it was launched. My journey has been fantastic, especially enjoying the UI and the leagues they offer. I just love the platform.'
  },
  {
    amount: 'Gift Cards',
    name: 'Aamir Khan',
    message: 'DreamSport is an excellent platform that provides the best facilities to its users. The customer support staff is very cooperative. I am happy that such platforms exist.'
  },
  {
    amount: 'Vouchers',
    name: 'Aditya Kumar',
    message: 'My experience with DreamSport has been incredible. The tagline "Unleash Your Potential" is perfect. I have been playing for a long time and my first game itself made me a winner.'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">Hear it from <span className="highlight">Our Winners</span></h2>
      <div className="testimonials-cards">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-amount">WON {testimonial.amount}</div>
            <div className="testimonial-user">
              {/* <img src="path/to/user-icon.png" alt="User" className="user-icon" />  */}
              <h4 className="user-name">{testimonial.name}</h4>
            </div>
            <p className="testimonial-message">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
