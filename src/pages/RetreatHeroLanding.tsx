import React from 'react'
import './RetreatHeroLanding.css'

const RetreatHeroLanding: React.FC = () => {
  return (
    <section className="retreat-hero-main">
      <div className="retreat-hero-overlay" />
      <div className="retreat-hero-content">
        {/* Trust Badge */}
        <div className="retreat-hero-badge">
          
          <span>Only 20 Seats · March 1-8, 2026 · Dalhousie, Himalayas</span>
        </div>
        
        <h1 className="retreat-hero-title big-title">
          Write Your Book in 7 Days<br />
          <span className="hero-highlight-line">In the Heart of the Himalayas</span>
        </h1>
        
        <p className="retreat-hero-tagline">
          India's Premier Writers' Retreat with Award-Winning Mentors
        </p>
        
        <div className="retreat-hero-usps">
         <div className="usp-item">
            <span>4 Acclaimed Authors as Your Personal Mentors</span>
          </div>
        <div className="usp-item">
            <span>Luxury Resort Stay Amid Himalayan Serenity</span>
          </div>
       
          <div className="usp-item">
            <span>Free ISBN + Publishing Guidance Included</span>
          </div>
        </div>


       
        <div className="retreat-hero-trust">
          
          <span>All-inclusive: Stay, Meals, Sessions, Transport from Amritsar</span>
        </div>
      </div>
    </section>
  )
}

export default RetreatHeroLanding
