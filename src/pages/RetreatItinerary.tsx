import React from 'react'
import { Eye, Lightbulb, BookOpen, Users2, Heart, Target } from 'lucide-react';
import './RetreatItinerary.css'

const RetreatItinerary: React.FC = () => {
  const takeaways = [
    { icon: Eye, number: '01', heading: 'Clarity of Vision', text: "You will leave with a clear understanding of your book's concept, purpose, and direction — whether you're writing a novel, memoir, poetry collection, or a factual/inspirational book." },
    { icon: Lightbulb, number: '02', heading: 'Mastering the Craft', text: 'Learn storytelling techniques, structure, plot building, narrative voice, poetic expression, and research skills. Each session is crafted to elevate your writing with precision and creativity.' },
    { icon: BookOpen, number: '03', heading: 'Understanding the Publishing Path', text: 'Gain a full overview of the publishing process — manuscript preparation, editing, cover design, marketing, and book launch strategies — so that the road ahead becomes smooth and achievable.' },
    { icon: Users2, number: '04', heading: 'Personal Mentorship & Feedback', text: 'Receive individual guidance from seasoned mentors who understand your voice and help refine your work with depth and clarity.' },
    { icon: Heart, number: '05', heading: 'Building a Creative Community', text: 'Connect with fellow writers, form lifelong relationships, exchange ideas, and grow together in a space filled with inspiration and support.' },
    { icon: Target, number: '06', heading: 'Renewed Sense of Purpose', text: 'In the serene Himalayan surroundings, you will rediscover your creative energy, discipline, and confidence — returning home with a writer\'s soul awakened and strengthened.' },
  ];

  return (
    <section className="retreat-itinerary retreat-section">
      <div className="retreat-itinerary-inner retreat-inner">
        <h2 className="itinerary-title">Your Seven-Day Transformative Experience</h2>

        

        <div className="timeline-wrapper">
          {/* Left Column - Content */}
          <div className="timeline-left stagger-list">
            <div className="timeline-left-item">
              <h3 className="timeline-left-label">Arrival Day</h3>
              <p className="timeline-left-text">Sunday, 1 March 2026 — Settle into your luxurious villa, meet fellow writers, and embrace the mountain serenity</p>
           
             </div>
          </div>

          {/* Middle Column - Vertical Line */}
          <div className="timeline-middle">
            <div className="timeline-line"></div>
            <div className="timeline-dot top-dot"></div>
            <div className="timeline-dot bottom-dot"></div>
          </div>

          {/* Right Column - Content */}
          <div className="timeline-right stagger-list">
            <div className="timeline-right-item">
              <h3 className="timeline-left-label">Departure Day</h3>
              <p className="timeline-left-text">Sunday, 8 March 2026 — Leave transformed, inspired, and equipped with tools to continue your writing journey</p>
            </div>

            
          </div>
        </div>

        {/* Key Takeaways Section */}
        <div className="key-takeaways-section">
          <h2 className="takeaways-title">Key Takeaways from the Spark Writers' Retreat</h2>
          <div className="takeaways-grid">
            {takeaways.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="takeaway-card">
                  <div className="takeaway-icon">
                    <IconComponent size={28} />
                  </div>
                  <div className="takeaway-number">{item.number}</div>
                  <h3 className="takeaway-heading">{item.heading}</h3>
                  <p className="takeaway-text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RetreatItinerary