import React from 'react';
import './Contact.css';


const Contact: React.FC = () => (
  <section className="contact-section premium-bg">
    <div className="contact-container premium-card">
      <h2 className="contact-title premium-title">Get in Touch</h2>
      <p className="contact-description premium-desc">For any queries or to reserve your spot, contact us directly. We respond quickly and value your privacy.</p>
      <div className="contact-details">
        <div className="contact-action-group">
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <a href="tel:+918050023212" className="contact-link premium-link">+91 80500 23212</a>
          </div>
         
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:sundarsahana.19@gmail.com" className="contact-link premium-link">sundarsahana.19@gmail.com</a>
          </div>
        
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
