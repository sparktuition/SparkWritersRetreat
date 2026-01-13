import React from 'react';
import { 
  Hotel, UtensilsCrossed, PenTool, UserCheck, Car, Mountain, 
  Heart, BookOpen, BookMarked, Wifi, Users, Award, 
  Shield, FileText, Send, CheckCircle 
} from 'lucide-react';
import './RetreatPricing.css';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe_XC5yOH7QyntgEfZk9uvkpXpkO5aj1rvkjoB4Ihv-hoXfsw/viewform?usp=dialog';

const inclusions = [
  { icon: Hotel, text: '7 Nights Luxury Villa Stay', highlight: true },
  { icon: UtensilsCrossed, text: 'All Meals: Breakfast, Lunch, Dinner & Snacks', highlight: true },
  { icon: PenTool, text: 'All Writing Workshops & Sessions', highlight: true },
  { icon: UserCheck, text: 'One-on-One Mentorship Sessions', highlight: true },
  { icon: Car, text: 'Transport: Amritsar to Dalhousie (Return)', highlight: false },
  { icon: Mountain, text: 'Dalhousie Sightseeing Day Trip', highlight: false },
  { icon: Heart, text: 'Vipassana Meditation Sessions', highlight: false },
  { icon: BookOpen, text: 'Free ISBN for Your Book', highlight: true },
  { icon: BookMarked, text: 'Publishing Guidance from Spark Publishing', highlight: true },
  { icon: Wifi, text: 'WiFi Connectivity at Villa', highlight: false },
  { icon: Users, text: 'Writer Community Access (Post-Retreat)', highlight: false },
  { icon: Award, text: 'Certificate of Completion', highlight: false },
];

const RetreatPricing: React.FC = () => {
  return (
    <section className="retreat-pricing retreat-section" id="pricing">
      <div className="retreat-pricing-inner retreat-inner">
        <div className="pricing-header">
          <span className="pricing-label">Investment in Your Dream</span>
          <h2 className="pricing-title">Retreat Fee & What's Included</h2>
          <p className="pricing-subtitle">
            Everything you need for 7 transformative days in the Himalayas
          </p>
        </div>

        <div className="pricing-content">
          {/* Pricing Card */}
          <div className="pricing-card">
            <div className="pricing-badge">Early Bird Offer</div>
            
            <div className="pricing-amount">
              <span className="original-price">₹1,40,000</span>
              <div className="current-price">
                <span className="currency">₹</span>
                <span className="amount">1,20,000</span>
              </div>
              <span className="price-note">All-inclusive • No hidden charges</span>
            </div>

            <div className="savings-callout">
               <span>You Save ₹20,000 with Early Bird!</span>
            </div>

            <div className="pricing-details">
              <div className="detail-item">
                <span className="detail-label">Dates:</span>
                <span className="detail-value">March 1-8, 2026</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Alps Resort, Dalhousie</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Seats:</span>
                <span className="detail-value seats-highlight">Only 20 Available</span>
              </div>
            </div>

            <a 
              href={GOOGLE_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="pricing-cta-btn"
            >
              Reserve Your Seat Now
            </a>

           
          </div>

          {/* Inclusions */}
          <div className="inclusions-section">
            <h3 className="inclusions-title">What's Included</h3>
            <div className="inclusions-grid">
              {inclusions.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className={`inclusion-item ${item.highlight ? 'highlighted' : ''}`}
                  >
                    <IconComponent size={20} className="inclusion-icon" />
                    <span className="inclusion-text">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="not-included">
              <h4>Not Included:</h4>
              <ul>
                <li>Travel to Amritsar (flight/train tickets)</li>
                <li>Personal expenses & shopping</li>
                <li>Travel insurance (recommended)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="payment-section">
          <h3 className="payment-title">How to Register</h3>
          <div className="payment-steps">
            <div className="payment-step">
              <div className="step-number"><FileText size={20} /></div>
              <div className="step-content">
                <h4>Fill the Form</h4>
                <p>Complete the registration form with your details</p>
              </div>
            </div>
            <div className="payment-step">
              <div className="step-number"><Send size={20} /></div>
              <div className="step-content">
                <h4>Pay via GPay</h4>
                <p>Scan the QR code and transfer the fee</p>
              </div>
            </div>
            <div className="payment-step">
              <div className="step-number"><CheckCircle size={20} /></div>
              <div className="step-content">
                <h4>Share Screenshot</h4>
                <p>Send payment proof via WhatsApp/Email</p>
              </div>
            </div>
            <div className="payment-step">
              <div className="step-number"><Award size={20} /></div>
              <div className="step-content">
                <h4>Get Confirmation</h4>
                <p>Receive your confirmation & prep guide</p>
              </div>
            </div>
          </div>

          <div className="payment-qr">
            <p className="qr-label">Pay via Google Pay</p>
            <img 
              src="/SparkWritersRetreat/Gpay.jpeg" 
              alt="Google Pay QR Code" 
              className="qr-image"
            />
            <p className="qr-note">Scan to pay ₹1,00,000</p>
          </div>
        </div>

        {/* Guarantee */}
        <div className="guarantee-section">
          <Shield size={32} className="guarantee-icon" />
          <div className="guarantee-content">
            <h4>Our Promise</h4>
            <p>
              If you're not satisfied with the retreat experience within the first 2 days, 
              we'll work with you to address your concerns. Your creative growth is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetreatPricing;
