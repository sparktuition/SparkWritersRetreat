import React from 'react';
import './WhatsappFloat.css';

const WhatsappFloat: React.FC = () => {
  const prefilledText = encodeURIComponent('Hello! I am interested in the Spark Writers’ Retreat. Please share more details.');
  return (
    <a
      href={`https://wa.me/918050023212?text=${prefilledText}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Logo"
        className="whatsapp-logo"
      />
    </a>
  );
};

export default WhatsappFloat;
