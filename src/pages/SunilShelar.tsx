import React from 'react';
import { Building2, Palette, Compass, TreePine, Award, GraduationCap, Mountain, Globe } from 'lucide-react';
import './ArchitectPage.css';

const ArchitectProfile: React.FC = () => {
  return (
    <section className="architect-page retreat-section" id="architect-sunil">
      <div className="architect-page-inner retreat-inner">
        <div className="architect-header">
          <span className="architect-label">Visionary Architect & Artist</span>
          <h1 className="architect-title">Sunil Shelar</h1>
          <p className="architect-subtitle">Principal Architect • 40+ Years Experience • Sustainable Design Pioneer</p>
        </div>

        <div className="architect-content">
          <div className="architect-image-wrapper">
            <img
                   src="/SparkWritersRetreat/jpeg%20(2).png"
           alt="Sunil Shelar - Architect"
              className="architect-image"
            />
            <div className="architect-badge">
              <span>40+ Years of Design Excellence</span>
            </div>
          </div>

          <div className="architect-bio">
            <div className="bio-intro">
              <p className="bio-highlight">
                A visionary architect blending tradition with innovation, Sunil Shelar has dedicated over four decades 
                to creating sustainable, inspiring spaces. An avid adventurer and artist, he integrates his passion 
                for travel and nature into groundbreaking architectural designs.
              </p>
            </div>

            <div className="architect-philosophy">
              <h3 className="section-subtitle">
                <Compass className="section-icon" size={22} />
                Design Philosophy
              </h3>
              <div className="philosophy-grid">
                <div className="philosophy-card">
                  <div className="philosophy-icon">
                    <TreePine size={24} />
                  </div>
                  <h4>Sustainability First</h4>
                  <p>Pioneering eco-conscious designs that harmonize with nature</p>
                </div>
                <div className="philosophy-card">
                  <div className="philosophy-icon">
                    <Building2 size={24} />
                  </div>
                  <h4>Tradition Meets Innovation</h4>
                  <p>Blending timeless principles with contemporary design thinking</p>
                </div>
                <div className="philosophy-card">
                  <div className="philosophy-icon">
                    <Palette size={24} />
                  </div>
                  <h4>Artistic Integration</h4>
                  <p>Infusing architectural spaces with artistic expression</p>
                </div>
              </div>
            </div>

            <div className="credentials-grid">
              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <Building2 size={24} />
                </div>
                <div className="credential-content">
                  <h4>Principal Architect</h4>
                  <p>Sunil Shelar Architects • AUM Group, Bengaluru • 40+ years of architectural practice</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <GraduationCap size={24} />
                </div>
                <div className="credential-content">
                  <h4>Education & Mentorship</h4>
                  <p>Sir J.J. College of Architecture, Mumbai • Mentee of legendary architect Charles Correa</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <Mountain size={24} />
                </div>
                <div className="credential-content">
                  <h4>Adventurer & Artist</h4>
                  <p>Solo motorcycle expeditions across India • Himalayan treks • Landscape painter</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <Award size={24} />
                </div>
                <div className="credential-content">
                  <h4>Major Projects</h4>
                  <p>Manyata Tech Park • Angadi Silks • Unity Build Tech collaborations</p>
                </div>
              </div>
            </div>

            <div className="notable-projects">
              <h3 className="section-subtitle">
                <Building2 className="section-icon" size={22} />
                Iconic Projects
              </h3>
              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-image-placeholder">
                    <Building2 size={32} />
                  </div>
                  <div className="project-details">
                    <h4>Manyata Tech Park</h4>
                    <p>Major technology township in Bengaluru</p>
                    <span className="project-tag">Commercial</span>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image-placeholder">
                    <Palette size={32} />
                  </div>
                  <div className="project-details">
                    <h4>Angadi Silks</h4>
                    <p>Renowned textile showroom design</p>
                    <span className="project-tag">Retail</span>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image-placeholder">
                    <TreePine size={32} />
                  </div>
                  <div className="project-details">
                    <h4>Miyawaki Forest</h4>
                    <p>Sustainable forest initiative in Shirwal</p>
                    <span className="project-tag">Eco-Project</span>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image-placeholder">
                    <Globe size={32} />
                  </div>
                  <div className="project-details">
                    <h4>Unity Build Tech</h4>
                    <p>Major architectural collaborations</p>
                    <span className="project-tag">Development</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="adventure-section">
              <h3 className="section-subtitle">
                <Mountain className="section-icon" size={22} />
                The Adventurer Architect
              </h3>
              <div className="adventure-timeline">
                <div className="adventure-item">
                  <div className="adventure-content">
                    <h4>Solo Motorcycle Expeditions</h4>
                    <p>Kanyakumari to Kashmir • Cross-country journeys inspiring design perspectives</p>
                  </div>
                </div>
                <div className="adventure-item">
                 <div className="adventure-content">
                    <h4>Himalayan Treks</h4>
                    <p>Extensive trekking across the Himalayas • Drawing inspiration from nature's grandeur</p>
                  </div>
                </div>
                <div className="adventure-item">
                 <div className="adventure-content">
                    <h4>Landscape Painting</h4>
                    <p>Breathtaking paintings inspired by travels • Artistic integration into architectural spaces</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="architect-mission">
              <blockquote>
                "Architecture is not just about building spaces; it's about creating experiences that 
                connect people with nature, tradition, and innovation. Every structure should tell a story 
                and inspire those who interact with it."
              </blockquote>
              <cite>— Sunil Shelar</cite>
            </div>

            <div className="career-timeline">
              <h3 className="section-subtitle">
                <Award className="section-icon" size={22} />
                Career Journey
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">1980s</div>
                  <div className="timeline-content">
                    <h4>Architectural Education</h4>
                    <p>Graduation from Sir J.J. College of Architecture • Mentorship under Charles Correa</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">1990s</div>
                  <div className="timeline-content">
                    <h4>Establishing Practice</h4>
                    <p>Founding Sunil Shelar Architects • Early sustainable projects</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2000s</div>
                  <div className="timeline-content">
                    <h4>Major Projects</h4>
                    <p>Manyata Tech Park • Angadi Silks • National recognition</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">Present</div>
                  <div className="timeline-content">
                    <h4>Sustainability Leadership</h4>
                    <p>Miyawaki forest projects • Eco-conscious design advocacy • Artistic integration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="interview-section">
              <div className="interview-card">
                <div className="interview-icon">
                  <Globe size={24} />
                </div>
                <div className="interview-content">
                  <h4>SPARK Interview Series</h4>
                  <p>Featured in "Designing Dreams - The Visionary's Journey" hosted by Sahana Sundar</p>
                  <a href="#" className="interview-link">
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectProfile;