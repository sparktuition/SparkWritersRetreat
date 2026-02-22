import React from 'react';
import { Globe, BookOpen, Award, GraduationCap, Users, Building2, Youtube, MapPin } from 'lucide-react';
import './AuthorPage.css';

const SangeetaBahadurPage: React.FC = () => {
  return (
    <section className="author-page retreat-section" id="author-sangeeta">
      <div className="author-page-inner retreat-inner">
        <div className="author-header">
          <span className="author-label">Diplomat & Fantasy Author</span>
          <h1 className="author-title">Sangeeta Bahadur</h1>
          <p className="author-subtitle">Indian Foreign Service Officer & Creator of The Kaal Tetralogy</p>
        </div>

        <div className="author-content">
          <div className="author-image-wrapper">
            <img
             src="/SparkWritersRetreat/sangeetha.jfif"
                      alt="Sangeeta Bahadur"
              className="author-image"
            />
            <div className="author-badge">
              <span>35 Years Diplomatic Service</span>
            </div>
          </div>

          <div className="author-bio">
            <div className="bio-intro">
              <p className="bio-highlight">
                A distinguished Indian Foreign Service officer with 35 years of diplomatic service, 
                Sangeeta Bahadur masterfully blends her deep understanding of Indian philosophy with 
                epic fantasy in her groundbreaking Kaal Trilogy, creating India's first heroic fantasy universe.
              </p>
            </div>

            <div className="diplomatic-career">
              <h3 className="section-subtitle">
                <Globe className="section-icon" size={22} />
                Diplomatic Career (1987-2022)
              </h3>
              <div className="postings-grid">
                                <div className="posting-card"><div className="posting-flag">🌍</div><h4>Other Postings</h4><p>Served in 4 additional countries at various levels of seniority, including Spain, Bulgaria, Mexico, and Belgium.</p></div>
                <div className="posting-card"><div className="posting-flag">🇮🇳</div><h4>Ambassador to Belarus</h4><p>Led diplomatic missions and bilateral relations</p></div>
                <div className="posting-card"><div className="posting-flag">🇬🇧</div><h4>Director, Nehru Centre</h4><p>India's flagship cultural centre in London (4 years)</p></div>
                <div className="posting-card"><div className="posting-flag">🇲🇹</div><h4>High Commissioner to Malta</h4><p>Final diplomatic posting before retirement</p></div>
                <div className="posting-card"><div className="posting-flag">🇮🇳</div><h4>Deputy Director General</h4><p>Indian Council for Cultural Relations (ICCR)</p></div>
                <div className="posting-card"><div className="posting-flag">🇪🇸</div><h4>Posting: Spain</h4><p>Various senior diplomatic roles</p></div>
                <div className="posting-card"><div className="posting-flag">🇧🇬</div><h4>Posting: Bulgaria</h4><p>Various senior diplomatic roles</p></div>
                <div className="posting-card"><div className="posting-flag">🇲🇽</div><h4>Posting: Mexico</h4><p>Various senior diplomatic roles</p></div>
                <div className="posting-card"><div className="posting-flag">🇧🇪</div><h4>Posting: Belgium</h4><p>Various senior diplomatic roles</p></div>
              </div>
            </div>

            <div className="credentials-grid">
              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <BookOpen size={24} />
                </div>
                <div className="credential-content">
                  <h4>The Kaal Trilogy</h4>
                  <p>Groundbreaking heroic fantasy epic weaving Indian spiritual traditions into original fantasy</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <Building2 size={24} />
                </div>
                <div className="credential-content">
                  <h4>35 Years IFS Service</h4>
                  <p>Joined Indian Foreign Service in 1987, retired June 2022 after distinguished career</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <GraduationCap size={24} />
                </div>
                <div className="credential-content">
                  <h4>Faculty & Mentor</h4>
                  <p>Sushma Swaraj Institute of Foreign Service & strategic advisor on international business</p>
                </div>
              </div>

              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <Youtube size={24} />
                </div>
                <div className="credential-content">
                  <h4>Tattle Tales Channel</h4>
                  <p>YouTube channel sharing supernatural stories, legends, and cultural insights</p>
                </div>
              </div>
            </div>

            <div className="trilogy-section">
              <h3 className="section-subtitle">
                <BookOpen className="section-icon" size={22} />
                Literary Works
              </h3>
              
              <div className="books-subsection" style={{marginBottom: '2rem'}}>
                <h4 style={{marginBottom: '1rem', fontWeight: 600}}>The Kaal Tetralogy - Epic Fantasy Series</h4>
                <div className="trilogy-timeline">
                  <div className="trilogy-book">
                    <div className="book-number">I</div>
                    <div className="book-details">
                      <h4>Jaal (Book I)</h4>
                      <p>Published: 2012 • The beginning of the epic fantasy journey</p>
                    </div>
                  </div>
                  <div className="trilogy-book">
                    <div className="book-number">II</div>
                    <div className="book-details">
                      <h4>Vikraal (Book II)</h4>
                      <p>Published: 2015 • The saga continues with deeper philosophical themes</p>
                    </div>
                  </div>
                  <div className="trilogy-book">
                    <div className="book-number">III</div>
                    <div className="book-details">
                      <h4>Mahakaal (Book III)</h4>
                      <p>Published: 2022 • Culmination of the epic Indian superhero narrative</p>
                    </div>
                  </div>
                  <div className="trilogy-book">
                    <div className="book-number">IV</div>
                    <div className="book-details">
                      <h4>Drohakaal (Book IV)</h4>
                      <p>The story that turned the trilogy into a tetralogy, bringing the saga to its true conclusion.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="standalone-book-section" style={{borderTop: '1px solid #e0e0e0', paddingTop: '1.5rem'}}>
                <h4 style={{marginBottom: '1rem', fontWeight: 600}}>Standalone Works</h4>
                <div className="trilogy-timeline">
                  <div className="trilogy-book">
                    <div className="book-number">S</div>
                    <div className="book-details">
                      <h4>Devadasi</h4>
                      <p>A standalone novel exploring profound cultural themes through the lens of Indian traditions and contemporary society.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="personal-background">
              <h3 className="section-subtitle">
                <Users className="section-icon" size={22} />
                Personal Background
              </h3>
              <div className="background-grid">
                <div className="background-item">
                  <MapPin size={18} />
                  <div>
                    <h5>Born in Kolkata</h5>
                    <p>Into a family of civil servants</p>
                  </div>
                </div>
                <div className="background-item">
                  <GraduationCap size={18} />
                  <div>
                    <h5>PG in English Literature</h5>
                    <p>Bombay University • Double major in Economics & English</p>
                  </div>
                </div>
                <div className="background-item">
                  <BookOpen size={18} />
                  <div>
                    <h5>Literary Works</h5>
                    <p>Kaal Tetralogy & Standalone Novel Author</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="author-mission">
              <blockquote>
                "Through The Kaal Trilogy, I aim to create an authentic Indian fantasy universe 
                that draws from our rich spiritual traditions and philosophical depth, 
                giving the world an Indian superhero who embodies our cultural ethos."
              </blockquote>
              <cite>— Sangeeta Bahadur</cite>
            </div>

            <div className="post-retirement">
              <h3 className="section-subtitle">
                <Award className="section-icon" size={22} />
                Post-Retirement Contributions
              </h3>
              <div className="contributions-list">
                <div className="contribution-item">
                  <div className="contribution-bullet"></div>
                  <span>Strategic advisor on international business and foreign collaborations</span>
                </div>
                <div className="contribution-item">
                  <div className="contribution-bullet"></div>
                  <span>Guest lecturer and mentor at diplomatic and literary institutions</span>
                </div>
                <div className="contribution-item">
                  <div className="contribution-bullet"></div>
                  <span>Prominent roles in not-for-profit organizations</span>
                </div>
                <div className="contribution-item">
                  <div className="contribution-bullet"></div>
                  <span>Continues writing and cultural storytelling through various platforms</span>
                </div>
              </div>
            </div>

            <div className="author-media">
              <span className="media-label">Literary Contributions:</span>
              <div className="media-items">
                <span className="media-item">
                  <BookOpen size={14} /> Epic Fantasy Trilogy
                </span>
                <span className="media-item">
                  <Youtube size={14} /> Cultural Storytelling
                </span>
                <span className="media-item">
                  <Globe size={14} /> Diplomatic Memoirs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SangeetaBahadurPage;