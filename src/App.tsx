import React from 'react'
import RetreatHeroLanding from './pages/RetreatHeroLanding'
import RetreatHeroTwoColumn from './pages/RetreatHeroTwoColumn'
import RetreatItinerary from './pages/RetreatItinerary'
import RetreatDaily from './pages/RetreatDaily'
import RetreatMentors from './pages/RetreatMentors'
import RetreatVilla from './pages/RetreatVilla'
import RetreatWhy from './pages/RetreatWhy'
import RetreatSeats from './pages/RetreatSeats'
import RetreatActivities from './pages/RetreatActivities'
import RetreatCTA from './pages/RetreatCTA'
import TransportArrangements from './pages/TransportArrangements';
import RetreatCuisine from './pages/RetreatCuisine';
import RetreatEssentials from './pages/RetreatEssentials';
import RetreatStay from './pages/RetreatStay';
import BookWritingPlan from './pages/BookWritingPlan';
import Contact from './pages/Contact';
import WhatsappFloat from './components/WhatsappFloat';
import './pages/RetreatBase.css'
import './pages/RetreatAnimations.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const RetreatPage: React.FC = () => {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="retreat-page-container">
      {/* 1. Welcome & Registration */}
      <div data-aos="fade-down" data-aos-duration="900"><RetreatHeroLanding /></div>
      {/* 2. Overview & Inspiration */}
      <div data-aos="fade-right" data-aos-duration="750" data-aos-delay="15"><RetreatHeroTwoColumn /></div>
      {/* 4. Features & Amenities */}

    {/* 7. Schedule & Timeline */}
      <div className="theme-amber" data-aos="fade-up" data-aos-duration="800" data-aos-delay="42"><RetreatItinerary /></div>
      {/* 8. Daily Experiences */}
      <div className="theme-lime" data-aos="fade-up" data-aos-duration="800" data-aos-delay="50"><RetreatDaily /></div>
      {/* 9. Special Activities */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="75"><RetreatActivities /></div>
      {/* 10. Accommodation Details */}
      <div className="theme-sand" data-aos="zoom-in" data-aos-duration="850" data-aos-delay="78"><RetreatVilla /></div>
      {/* 11. Resort Experience & Payment */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="82"><RetreatStay /></div>
      {/* 12. Food & Dining */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="85"><RetreatCuisine /></div>
      {/* 13. What to Bring & Guidelines */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="86"><RetreatEssentials /></div>
      {/* 14. Limited Seats & Pricing */}
      <div className="theme-mint" data-aos="zoom-in-up" data-aos-duration="850" data-aos-delay="78"><RetreatSeats /></div>
      {/* 15. Transport Arrangements */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="88"><TransportArrangements /></div>
      {/* 6. Meet the Mentors */}
      <div className="theme-plum" data-aos="fade-right" data-aos-duration="800" data-aos-delay="60"><RetreatMentors /></div>
     
      {/* 17. Writing Plan Support */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="92"><BookWritingPlan /></div>
      {/* 18. Why Choose This Retreat */}
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="88"><RetreatWhy /></div>
      {/* 19. Final Call to Action */}
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="98"><RetreatCTA /></div>
      {/* Contact Page */}
      <Contact />
      <WhatsappFloat />
    </div>
  )
}

export default RetreatPage