import React from 'react';
import { BookOpen, Award, Film, Globe, Users, PenTool, Star, Calendar } from 'lucide-react';
import './AuthorPage.css';
const AuthorPage: React.FC = () => {
  return (
    <section className="author-page retreat-section" id="author">
      <div className="author-page-inner retreat-inner">
        <div className="author-header">
          <div className="author-section">
              <h1>Meet Your Mentors!</h1>
            </div>
          <span className="author-label">Renowned Indian Author</span>
          <h1 className="author-title">Dr. Manjiri Prabhu</h1>
          <p className="author-subtitle">The 'Desi Agatha Christie' & Pioneer of Indian Mystery Fiction</p>
        </div>

        <div className="author-content">
          <div className="author-image-wrapper">
            <img
             src="/SparkWritersRetreat/jpeg%20(1).jpeg"
                 alt="Dr. Manjiri Prabhu at book launch"
              className="author-image"
            />
            <div className="author-badge">
              <span>First Woman Mystery Writer of India</span>
            </div>
          </div>

          <div className="author-bio">
            <div className="bio-intro">
              <p className="bio-highlight">
                Hailed as the 'Desi Agatha Christie' by media worldwide, Dr. Manjiri Prabhu is acknowledged 
                as India's first woman writer of mystery fiction. An accomplished novelist, TV producer, 
                filmmaker, and founder-director of the Pune International Literary Festival.
              </p>
            </div>

            <div className="credentials-grid">
              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <BookOpen size={24} />
                </div>
                <div className="credential-content">
                  <h4>20+ Published Books</h4>
                  <p>Spanning mystery, romantic suspense, children's literature, and non-fiction across major publishers</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <Film size={24} />
                </div>
                <div className="credential-content">
                  <h4>TV Producer & Filmmaker</h4>
                  <p>Directed 200+ infotainment programs and adapted her novel into feature film "Kuchh Dil Ne Kaha"</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <Award size={24} />
                </div>
                <div className="credential-content">
                  <h4>Kiriyama Prize Notable Fiction</h4>
                  <p>"The Astral Alibi" honored in 2007. Multiple awards including BTB Best Mystery (2012)</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <Globe size={24} />
                </div>
                <div className="credential-content">
                  <h4>Festival Director</h4>
                  <p>Founder-director of Pune International Literary Festival and International Festival of Spiritual India</p>
                </div>
              </div>
            </div>

            <div className="author-education">
              <h3 className="section-subtitle">Education & Background</h3>
              <div className="education-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Early Education</h4>
                    <p>St. Joseph's High School, Pune • Inspired by Enid Blyton and Agatha Christie</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Higher Education</h4>
                    <p>MA in French from Ferguson College, Pune University • PhD in Communication Science</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Specialized Training</h4>
                    <p>Post Graduate Diploma in Social Communication Media from Sophia College, Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="author-notable-works">
              <h3 className="section-subtitle">Notable Works</h3>
              <div className="works-grid">
                <div className="work-card">
                  <div className="work-icon">
                    <Star size={20} />
                  </div>
                  <h4>The Cosmic Clues</h4>
                  <p>First in the Sonia Samarth mystery series (Bantam Books, 2004)</p>
                </div>
                <div className="work-card">
                  <div className="work-icon">
                    <Star size={20} />
                  </div>
                  <h4>The Astral Alibi</h4>
                  <p>Kiriyama Prize Notable Fiction (Bantam Dell, 2006)</p>
                </div>
                <div className="work-card">
                  <div className="work-icon">
                    <Star size={20} />
                  </div>
                  <h4>In the Shadow of Inheritance</h4>
                  <p>Romantic mystery suspense (Penguin India, 2014)</p>
                </div>
                <div className="work-card">
                  <div className="work-icon">
                    <Star size={20} />
                  </div>
                  <h4>The Rampur Raza Mystery</h4>
                  <p>Launched by Hon. President of India Smt. Droupadi Murmu (NBT, 2023)</p>
                </div>
              </div>
            </div>

            <div className="author-mission">
              <blockquote>
                "As the first woman mystery writer in India, I believe in creating stories that entertain, 
                intrigue, and showcase the rich tapestry of Indian culture through the lens of suspense and discovery."
              </blockquote>
              <cite>— Dr. Manjiri Prabhu</cite>
            </div>

            <div className="author-recognition">
              <h3 className="section-subtitle">Recent Honors</h3>
              <div className="recognition-list">
                <div className="recognition-item">
                  <Calendar size={16} />
                  <span>Global Woman Leader - 10th World Women Leadership Congress Awards (2023)</span>
                </div>
                <div className="recognition-item">
                  <Award size={16} />
                  <span>Excellence in Service for Humanity - Rotary Club of Pune (2022)</span>
                </div>
                <div className="recognition-item">
                  <PenTool size={16} />
                  <span>Inspirational Women of Maharashtra - Excellence in Writing (2017)</span>
                </div>
                <div className="recognition-item">
                  <Users size={16} />
                  <span>Rex Karmaveer Gold Medal Award - iCONGO & UN (2016)</span>
                </div>
              </div>
            </div>

            <div className="author-section">
              <h2>Who are your authors...</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorPage;