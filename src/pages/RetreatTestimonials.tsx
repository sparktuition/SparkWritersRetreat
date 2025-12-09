import React from 'react';
import { Users, BookOpen, Star, Award } from 'lucide-react';
import './RetreatTestimonials.css';


const stats = [
  { number: '150+', label: 'Writers Mentored', icon: Users },
  { number: '45+', label: 'Books Published', icon: BookOpen },
  { number: '4.9/5', label: 'Average Rating', icon: Star },
  { number: '12', label: 'Retreats Conducted', icon: Award },
];

const RetreatTestimonials: React.FC = () => {
  return (
    <section className="retreat-testimonials retreat-section" id="testimonials">
      <div className="retreat-testimonials-inner retreat-inner">
        <div className="testimonials-header">
          <span className="testimonials-label">Success Stories</span>
          <h2 className="testimonials-title">Writers Who Found Their Voice</h2>
          <p className="testimonials-subtitle">
            Hear from participants who transformed their writing journey at our retreats
          </p>
        </div>

        {/* Stats Bar */}
        <div className="testimonials-stats">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="stat-item">
                <IconComponent size={24} className="stat-icon" />
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            );
          })}
        </div>


        {/* Trust Builder */}
        <div className="testimonials-trust">
          <p className="trust-text">
            <strong>Note:</strong> These testimonials represent the experiences of participants from 
            Spark Igniting Minds' writing programs and workshops. The March 2026 retreat is our 
            flagship Himalayan experience.
          </p>
        </div>

        {/* CTA */}
        <div className="testimonials-cta">
          <p>Ready to write your own success story?</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_XC5yOH7QyntgEfZk9uvkpXpkO5aj1rvkjoB4Ihv-hoXfsw/viewform?usp=dialog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="testimonials-cta-btn"
          >
            Join the March 2026 Retreat
          </a>
        </div>
      </div>
    </section>
  );
};

export default RetreatTestimonials;
