import React, { useState } from 'react';
import { Award, Quote, Sparkles, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import './RetreatTestimonials.css';

// Testimonial Data Array
const testimonials = [
  {
    name: "Roopa Rani Bussa",
    image: "https://static.wixstatic.com/media/8d716a_91f56741a25b451cbed729360bdafa09~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/RRB.jpg",
    content: `Captain Sahana Sundar created Spark and Spark is igniting the world. An inspiration to many, best platform for numerous aspirants. Lioness Captain Sahana is a writer with profound knowledge. Her passion to give something back to society, the very reason spark is sparkling today. Simplicity is her charm, knowledge is her power, Hope is her strength Genuinity is her voice.

I write because I’m passionate about it. Immense happiness flows with exposure to various emotions, experiences while learning, absolutely that is the power of writing. I feel Grow and Let Grow is the concept of writing. It’s bonafide blessings to show light on various topics to the world. Words are always the best way to reach the minds of people. Sparkians are innovative, initiative, invincible. They are extremely supportive.  My unfeigned feedback is writing and blogging with spark made my skills imperative.

My sincere thanks to Spark for the kind aura provided by spark and sparkians. Please enjoy the spirit spurring in this unblemished platform. Join spark to experience the tranquility in and out. Discover yourself in the flow of thoughts.`,
    role: "Author & Sparkian"
  },
  {
    name: "Ritu Garg",
    image: "https://static.wixstatic.com/media/8d716a_b29f33394f56411d8c15a2371aa3a0ff~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/RG.jpg",
    content: `I love to write, so I write. I love to share, so I blog. I write for national and international websites.  I have a wide repertoire of genres in which I write. I write on social institutions, spirituality, relationships, parenting, food, fashion, travel, humor, and politics. I get powered by the magic of words and the potential hidden within them. Words are like capsules filled with a deep meaning. Each word is like a bobbin which when opens unravels lengths and lengths of thread packed within it compactly and neatly. That’s what words are to me. I always say that I collect words like a numismatic collects coins and a philatelist collects stamps. And I believe that a “ word alone is a bird alone, put them together and the story begins. Together they make a flight, and that reflects their might.”

Spark, the beautiful platform came my way serendipitously and gave my writing a true voice – the voice of an author. The energy of this platform and synergy amongst fellow authors has become my agency to work as an author. While I was writing a lot when I joined Spark, but my dream came true when I got an opportunity to co-author two books with them and the process sparked energy within me which was seminal and self –assuring. I am so blessed to be part of this platform and planning to release a book of Hindi and English poems soon with them.`,
    role: "Co-Author & Blogger"
  },
  {
    name: "Aditi Rai",
    image: "https://static.wixstatic.com/media/8d716a_7a36ed5fffeb46c18bcf4bd774751996~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AR.jpg",
    content: `The word itself works as a plug. It sets the energy level to take off to a high. Your thoughts & your ideas find words and these words find a page and these pages find a stage. A stage created very compassionately by Captain Sahana Sundar. A lady as Sundar as her surname.

I love to write. A call from Sahana made space for my writings to be read. A writer’s pen becomes charged and motivated when it finds readers. That’s what Sahana did. Connected readers and writers.

Making a change in the writer’s world, Spark has stood true to it’s name.

Thank you Sahana for this opportunity. I met some beautiful people during my journey with Spark.

Looking forward to create a new horizon with Spark.

Long live Spark in all of us!!!`,
    role: "Writer & Enthusiast"
  },
];


const RetreatTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  React.useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="retreat-testimonials" id="testimonials">
      {/* Animated Background Elements */}
      <div className="testimonials-bg-pattern">
        <div className="floating-quote">❝</div>
        <div className="floating-quote">❞</div>
        <div className="floating-sparkle"><Sparkles size={20} /></div>
        <div className="floating-sparkle"><Sparkles size={20} /></div>
      </div>

      <div className="testimonials-container">
        {/* Header Section */}
        <div className="testimonials-header">
          <div className="header-badge">
            <Sparkles size={16} />
            <span>Testimonials</span>
          </div>
          <h2 className="testimonials-title">
            Voices That <span className="gradient-text">Echo Success</span>
          </h2>
          <p className="testimonials-subtitle">
            Discover how writers transformed their craft and found their unique voice in our retreats
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="testimonials-content-grid">
          {/* Left Column - Featured Testimonial */}
          <div className="featured-testimonial">
            <div className="testimonial-card premium">
              <div className="card-glow"></div>
              <div className="card-header">
                <Quote className="quote-icon" size={32} />
                <div className="play-controls">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="play-btn">
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <span>Auto-play {isPlaying ? 'ON' : 'OFF'}</span>
                </div>
              </div>
              
              <div className="testimonial-image-wrapper">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="featured-image"
                />
                <div className="image-overlay"></div>
              </div>

              <blockquote className="featured-content">
                "{testimonials[activeIndex].content}"
              </blockquote>

              <div className="author-section">
                <div className="author-info">
                  <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                  <p className="author-role">{testimonials[activeIndex].role}</p>
                </div>
                <div className="navigation-controls">
                  <button onClick={prevTestimonial} className="nav-btn">
                    <ChevronLeft size={20} />
                  </button>
                  <div className="pagination-dots">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                  <button onClick={nextTestimonial} className="nav-btn">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Other Testimonials */}
          <div className="testimonials-sidebar">
           

           

            {/* Trust Badge */}
            <div className="trust-badge">
              <div className="trust-header">
                <Award size={18} />
                <span>Verified Experiences</span>
              </div>
              <p className="trust-note">
                All testimonials are from verified participants of Spark Igniting Minds' programs
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="testimonials-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Write Your Success Story?</h3>
            <p className="cta-subtitle">Join our flagship Himalayan retreat in March 2026</p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSe_XC5yOH7QyntgEfZk9uvkpXpkO5aj1rvkjoB4Ihv-hoXfsw/viewform?usp=dialog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span>Apply Now</span>
              <ChevronRight size={20} />
            </a>
          </div>
          <div className="cta-decoration">
            <Sparkles className="sparkle" />
            <div className="cta-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetreatTestimonials;