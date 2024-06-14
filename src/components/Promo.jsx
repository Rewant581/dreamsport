import React from 'react';
import './Promo.css';
// import whatsappIcon from 'path/to/whatsapp-icon.png'; 
import objects6 from '../asset/objects6.png'; 
import object7 from '../asset/object7.png';

const PromoOffer = () => {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://www.whatsapp.com/'; 
  };

  return (
    <div className="promo-offer-section">
      <h2 className="promo-offer-title">
        IT'S EASY TO DOWNLOAD APP WHATSAPP NOW TO GET DOWNLOAD LINK
      </h2>
      <div className="promo-offer-content">
        <div className="promo-text">
          <h3 className="offer-heading">A Super Welcome Offer!</h3>
          <p className="offer-subheading">CREATE ACCOUNT TO GET</p>
          <p className="bonus-text">15% Extra Bonus</p>
          <button className="cta-button" onClick={() => window.location.href = '/sign-up'}>
            Get Account
          </button>
        </div>
        <div className="promo-image">
          <img src={objects6} alt="Promo Offer" />
        </div>
      </div>
      <div className="whatsapp-section">
        <img
          src={object7}
          alt="WhatsApp"
          className="whatsapp-icon"
          onClick={handleWhatsAppClick}
        />
        <span className="whatsapp-text">15% Extra Bonus</span>
      </div>
    </div>
  );
};

export default PromoOffer;
