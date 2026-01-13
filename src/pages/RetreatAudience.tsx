import React from 'react';
import { PenTool, BookOpen, Feather, ScrollText, Briefcase, RefreshCw} from 'lucide-react';
import './RetreatAudience.css';

const audiences = [
  {
    id: 1,
    icon: PenTool,
    title: 'Aspiring First-Time Authors',
    description: 'You have a story burning inside you but don\'t know where to start. Get expert guidance to transform your ideas into a structured manuscript.',
    outcome: 'Leave with 10,000-30,000 words written',
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'Memoir & Biography Writers',
    description: 'You want to capture life stories — yours or someone else\'s. Learn techniques to organize memories into compelling narratives.',
    outcome: 'Master the art of personal storytelling',
  },
  {
    id: 3,
    icon: Feather,
    title: 'Fiction & Novel Writers',
    description: 'Working on a novel, short story collection, or creative fiction? Refine your plot, develop characters, and find your unique voice.',
    outcome: 'Breakthrough on plot and character',
  },
  {
    id: 4,
    icon: ScrollText,
    title: 'Poets & Lyrical Writers',
    description: 'Whether you\'re crafting a poetry collection or lyrical prose, develop your artistic expression in a nurturing environment.',
    outcome: 'Complete or refine your collection',
  },
  {
    id: 5,
    icon: Briefcase,
    title: 'Professionals with a Message',
    description: 'Entrepreneurs, coaches, or experts wanting to write a book to establish authority. Get clear on your structure and start writing.',
    outcome: 'Clarity on your book\'s purpose and outline',
  },
  {
    id: 6,
    icon: RefreshCw,
    title: 'Stuck Writers Needing a Breakthrough',
    description: 'You\'ve started but hit a wall. The retreat\'s focused environment and mentorship will help you push past creative blocks.',
    outcome: 'Renewed momentum and direction',
  },
];



const RetreatAudience: React.FC = () => {
  return (
    <section className="retreat-audience retreat-section" id="who-is-this-for">
      <div className="retreat-audience-inner retreat-inner">
        <div className="audience-header">
          <span className="audience-label">Is This You?</span>
          <h2 className="audience-title">Who This Retreat Is Perfect For</h2>
          <p className="audience-subtitle">
            If you see yourself in any of these descriptions, this retreat was designed with you in mind
          </p>
        </div>

        <div className="audience-grid">
          {audiences.map((audience) => {
            const IconComponent = audience.icon;
            return (
              <div key={audience.id} className="audience-card">
                <div className="audience-icon">
                  <IconComponent size={28} />
                </div>
                <h3 className="audience-card-title">{audience.title}</h3>
                <p className="audience-description">{audience.description}</p>
                <div className="audience-outcome">
                  <span className="outcome-label">Expected Outcome:</span>
                  <span className="outcome-text">{audience.outcome}</span>
                </div>
              </div>
            );
          })}
        </div>

        

        <div className="audience-cta">
          <p className="cta-question">Ready to commit to your writing journey?</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_XC5yOH7QyntgEfZk9uvkpXpkO5aj1rvkjoB4Ihv-hoXfsw/viewform?usp=dialog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="audience-cta-btn"
          >
            Yes, Reserve My Seat
          </a>
        </div>
      </div>
    </section>
  );
};

export default RetreatAudience;
