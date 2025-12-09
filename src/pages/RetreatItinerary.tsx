import React from 'react'
import './RetreatItinerary.css'

const RetreatItinerary: React.FC = () => {
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
            <div className="takeaway-card">
              <div className="takeaway-number">01</div>
              <h3 className="takeaway-heading">Clarity of Vision</h3>
              <p className="takeaway-text">You will leave with a clear understanding of your book's concept, purpose, and direction — whether you're writing a novel, memoir, poetry collection, or a factual/inspirational book.</p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-number">02</div>
              <h3 className="takeaway-heading">Mastering the Craft</h3>
              <p className="takeaway-text">Learn storytelling techniques, structure, plot building, narrative voice, poetic expression, and research skills. Each session is crafted to elevate your writing with precision and creativity.</p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-number">03</div>
              <h3 className="takeaway-heading">Understanding the Publishing Path</h3>
              <p className="takeaway-text">Gain a full overview of the publishing process — manuscript preparation, editing, cover design, marketing, and book launch strategies — so that the road ahead becomes smooth and achievable.</p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-number">04</div>
              <h3 className="takeaway-heading">Personal Mentorship & Feedback</h3>
              <p className="takeaway-text">Receive individual guidance from seasoned mentors who understand your voice and help refine your work with depth and clarity.</p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-number">05</div>
              <h3 className="takeaway-heading">Building a Creative Community</h3>
              <p className="takeaway-text">Connect with fellow writers, form lifelong relationships, exchange ideas, and grow together in a space filled with inspiration and support.</p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-number">06</div>
              <h3 className="takeaway-heading">Renewed Sense of Purpose</h3>
              <p className="takeaway-text">In the serene Himalayan surroundings, you will rediscover your creative energy, discipline, and confidence — returning home with a writer's soul awakened and strengthened.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RetreatItinerary