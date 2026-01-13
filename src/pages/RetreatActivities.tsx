import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import './RetreatActivities.css';

const RetreatActivities: React.FC = () => (
  <section className="retreat-activities-section parallax-bg" data-aos="fade-up" data-aos-duration="900">
    <div className="retreat-activities-inner">
      <h2 className="retreat-activities-title">Rejuvenating Activities & Local Exploration</h2>
      <div className="retreat-activities-content">
        <div className="activity-item">
          <Heart size={24} className="activity-icon" />
          <p>
            In addition to our immersive writing sessions, we have planned some rejuvenating activities for you. Enjoy peaceful <strong>Vipassana training sessions</strong> to clear your mind, and take short walks to soak in the fresh mountain air.
          </p>
        </div>
        <div className="activity-item">
          <MapPin size={24} className="activity-icon" />
          <p>
            One day is dedicated to a delightful <strong>sightseeing tour of Dalhousie</strong> and its surroundings. You will visit charming local spots and might even witness the arrival of migratory birds from Europe, making the landscape a writer's paradise.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default RetreatActivities;
