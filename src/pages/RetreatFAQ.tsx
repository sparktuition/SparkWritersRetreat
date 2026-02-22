import React from 'react';
import { Phone, Mail, Star, Quote, Sparkles, PenTool } from 'lucide-react';
import './RetreatFAQ.css';

const RetreatContact: React.FC = () => {
  return (
    <section className="retreat-contact retreat-section" id="contact">
      <div className="retreat-contact-inner retreat-inner">
        {/* Inspiring Header */}
        <div className="contact-header">
          <div className="contact-label">
            <Sparkles size={16} />
            <span>Let Your Story Begin</span>
          </div>
          <h2 className="contact-title">Connect & Create Your Legacy</h2>
          <p className="contact-subtitle">
            The world is waiting for your story. Take the first step toward bringing it to life.
          </p>
        </div>

        {/* Inspirational Quotes */}
        <div className="inspirational-section">
          <div className="inspiration-card">
            <Quote size={24} className="quote-icon" />
            <p className="inspiration-text">
              "Every great story begins with a single courageous decision to write it."
            </p>
            <PenTool size={16} className="inspiration-icon" />
          </div>
          
          <div className="inspiration-card">
            <Star size={24} className="quote-icon" />
            <p className="inspiration-text">
              "Your words have the power to inspire generations. Let's help you share them with the world."
            </p>
            <Sparkles size={16} className="inspiration-icon" />
          </div>
        </div>

       

        {/* Contact Options */}
        <div className="contact-section">
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Phone size={24} />
            </div>
            <div className="contact-details">
              <h4 className="contact-method">Call Us</h4>
              <p className="contact-info">Speak directly with our retreat coordinator</p>
              <a href="tel:+918050023212" className="contact-link">
                +91 80500 23212
              </a>
              <p className="contact-hint">Available Mon-Sat, 10AM - 7PM IST</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Mail size={24} />
            </div>
            <div className="contact-details">
              <h4 className="contact-method">Email Us</h4>
              <p className="contact-info">Get detailed information and personalized responses</p>
              <a href="mailto:sundarsahana.19@gmail.com" className="contact-link">
                sundarsahana.19@gmail.com
              </a>
              <p className="contact-hint">We respond within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Final Inspirational Message */}
        <div className="final-message">
          <h3 className="final-title">Your Writing Sanctuary Awaits</h3>
          <p className="final-text">
            In the peaceful embrace of the Himalayas, surrounded by nature and nurtured by expert mentors, 
            your story will find its true voice. This retreat isn't just about writing a book—it's about 
            discovering the writer within you.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default RetreatContact;