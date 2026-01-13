import React from 'react';
import { BookOpen, Building2, Award, PenTool, Youtube, Globe, Users } from 'lucide-react';
import './RetreatFacilitator.css';

const RetreatFacilitator: React.FC = () => {
  return (
    <section className="retreat-facilitator retreat-section" id="facilitator">
      <div className="retreat-facilitator-inner retreat-inner">
        <div className="facilitator-header">
          <span className="facilitator-label">Your Host & Organizer</span>
          <h2 className="facilitator-title">Meet Captain Sahana Sundar</h2>
          <p className="facilitator-subtitle">The Visionary Behind Spark Writers' Retreat</p>
        </div>

        <div className="facilitator-content">
          <div className="facilitator-image-wrapper">
            <img
              src="/SparkWritersRetreat/sahanasundar.jpeg"
              alt="Captain Sahana Sundar"
              className="facilitator-image"
            />
            <div className="facilitator-badge">
              <span>32 Years of Service</span>
            </div>
          </div>

          <div className="facilitator-bio">
            <div className="bio-intro">
              <p className="bio-highlight">
                A distinguished officer who dedicated 32 years to national service, Captain Sahana Sundar (Retd.) 
                now channels her discipline, passion, and literary expertise into nurturing the next generation of Indian authors.
              </p>
            </div>

            <div className="credentials-grid">
              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <BookOpen size={24} />
                </div>
                <div className="credential-content">
                  <h4>3 Published Books as Author</h4>
                  <p>Her acclaimed works include her debut novel, <em>Anand</em>, inspired by the life of Café Coffee Day founder Siddhartha Hegde and well-received by the Indian audience. <em>Are You Smart with Words</em> has become a favourite among schoolchildren for language learning.</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <Building2 size={24} />
                </div>
                <div className="credential-content">
                  <h4>Founder, Spark Ingniting Minds</h4>
                  <p>Through Spark Igniting Minds, has published 25 books across fiction, non-fiction, anthologies, children's literature, and award-winning language-learning books, amplifying regional voices nationwide</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <Award size={24} />
                </div>
                <div className="credential-content">
                  <h4>NCC Career (1989-2022)</h4>
                  <p>Began as an instructor with the 1 Karnataka Girls Battalion NCC in 1989. Commissioned Lieutenant (2006), retired as Captain. Seven Republic Day Camp accompaniments where the Karnataka contingent won the prestigious PM's Banner once. Served as Administrative Officer across India in key postings including Shillong, Lucknow, Vijayawada, Goa, Mysore, Kurnool, and Anantapur.</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <PenTool size={24} />
                </div>
                <div className="credential-content">
                  <h4>400+ Poems & Literary Translations</h4>
                  <p>Including "Whispers of the Soil" — acclaimed Kannada stories rendered into English</p>
                </div>
              </div>
            </div>

            <div className="facilitator-mission">
              <blockquote>
                "Every person has a story worth telling. My mission is to help you find your voice, 
                craft your narrative, and share your unique perspective with the world."
              </blockquote>
              <cite>— Captain Sahana Sundar</cite>
            </div>

            <div className="facilitator-media">
              <span className="media-label">Featured In & High-Profile Recognition:</span>
              <div className="media-items">
                <span className="media-item"><Youtube size={14} /> 'Spark Igniting Minds' YouTube Interview Series — featuring interviews with great personalities from Karnataka and India, with tremendous reach and engagement</span>
                <span className="media-item"><Globe size={14} /> Book Launches by revered personalities including Sri Sri Ravi Shankar, Dr. Kiran Bedi, and Priya Dutt</span>
                <span className="media-item"><Users size={14} /> Regional Literary Festivals</span>
                <span className="media-item">Public Service Engagement — Brief involvement with the Aam Aadmi Party reflecting commitment to social change</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetreatFacilitator;
