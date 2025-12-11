import React from 'react'
import RetreatHeroLanding from './pages/RetreatHeroLanding'
import SparkPresentation from './pages/SparkPresentation'
import RetreatHeroTwoColumn from './pages/RetreatHeroTwoColumn'
import RetreatItinerary from './pages/RetreatItinerary'
import RetreatDaily from './pages/RetreatDaily'

import RetreatVilla from './pages/RetreatVilla'
import RetreatWhy from './pages/RetreatWhy'
import RetreatActivities from './pages/RetreatActivities'

import TransportArrangements from './pages/TransportArrangements';
import RetreatCuisine from './pages/RetreatCuisine';
import RetreatEssentials from './pages/RetreatEssentials';
import RetreatStay from './pages/RetreatStay';
import BookWritingPlan from './pages/BookWritingPlan';
import WhatsappFloat from './components/WhatsappFloat';
import SEO from './components/SEO';
// New sections for improved UX
import ManjiriPrabhu from './pages/ManjiriPrabhu';
import SangeethaBahadur from './pages/SangeethaBahadur';
import SunilShelar from './pages/SunilShelar';
import RetreatFacilitator from './pages/RetreatFacilitator';
import RetreatTestimonials from './pages/RetreatTestimonials';
import RetreatFAQ from './pages/RetreatFAQ';
import RetreatAudience from './pages/RetreatAudience';
import RetreatPricing from './pages/RetreatPricing';
import './pages/RetreatBase.css'
import './pages/RetreatAnimations.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const RetreatPage: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600, // much faster
      easing: 'ease-out-cubic',
      offset: 60, // triggers earlier
      once: false, // allow repeat
      mirror: false // do NOT animate out on scroll up
    });
  }, []);
  return (
    <div className="retreat-page-container">
      <SEO />
      

      {/* 1. HERO - Strong USP, Clear Value Proposition */}
      <div data-aos="fade-zoom-in" data-aos-duration="400">
        <RetreatHeroLanding />
      </div>

      {/* 1.5. SPARK PRESENTATION - Brand Introduction */}
      <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="50">
        <SparkPresentation />
      </div>

      {/* 2. WHO IS THIS FOR - Clear Positioning */}
      <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="50">
        <RetreatAudience />
      </div>




      {/* 3. MANJIRI PRABHU - Special Section */}
      <div data-aos="flip-left" data-aos-duration="400" data-aos-delay="80">
        <ManjiriPrabhu />
      </div>



      {/* 4. SANGEETHA BAHADUR - Special Section */}
      <div data-aos="flip-right" data-aos-duration="400" data-aos-delay="100">
        <SangeethaBahadur />
      </div>

   

      {/* 4. FACILITATOR - Credibility & Trust (Captain Sahana) */}
      <div data-aos="fade-right" data-aos-duration="400" data-aos-delay="120">
        <RetreatFacilitator />
      </div>


   {/* 5. SUNIL SHELAR - Special Section */}
      <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="140">
        <SunilShelar />
      </div>


    

      {/* 5. OVERVIEW - What You'll Experience */}
      <div data-aos="zoom-in" data-aos-duration="400" data-aos-delay="80">
        <RetreatHeroTwoColumn />
      </div>


      {/* 6. KEY TAKEAWAYS & ITINERARY */}
      <div className="theme-amber" data-aos="fade-up-right" data-aos-duration="400" data-aos-delay="100">
        <RetreatItinerary />
      </div>


      {/* 7. DAILY EXPERIENCE */}
      <div className="theme-lime" data-aos="fade-up-left" data-aos-duration="400" data-aos-delay="120">
        <RetreatDaily />
      </div>


      {/* 8. THE LOCATION - Visual Storytelling of Himalayas */}
      <div className="theme-sand" data-aos="zoom-in-up" data-aos-duration="400" data-aos-delay="100">
        <RetreatVilla />
      </div>


      {/* 9. STAY & RESORT */}
      <div data-aos="fade-down" data-aos-duration="400" data-aos-delay="80">
        <RetreatStay />
      </div>


      {/* 10. ACTIVITIES & SIGHTSEEING */}
      <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
        <RetreatActivities />
      </div>


      {/* 11. CUISINE */}
      <div data-aos="fade-right" data-aos-duration="400" data-aos-delay="120">
        <RetreatCuisine />
      </div>


      {/* 12. TESTIMONIALS - Social Proof */}
      <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="100">
        <RetreatTestimonials />
      </div>


      {/* 13. PRICING & INCLUSIONS - Clear Value */}
      <div id="pricing" data-aos="zoom-in-down" data-aos-duration="400" data-aos-delay="100">
        <RetreatPricing />
      </div>


      {/* 14. WHY THIS RETREAT */}
      <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
        <RetreatWhy />
      </div>


      {/* 15. TRANSPORT & LOGISTICS */}
      <div data-aos="fade-down" data-aos-duration="400" data-aos-delay="80">
        <TransportArrangements />
      </div>


      {/* 16. ESSENTIALS - What to Bring */}
      <div data-aos="fade-right" data-aos-duration="400" data-aos-delay="120">
        <RetreatEssentials />
      </div>


      {/* 17. WRITING PLAN SUPPORT */}
      <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="100">
        <BookWritingPlan />
      </div>


      {/* 18. FAQ - Address All Concerns */}
      <div id="faq" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100">
        <RetreatFAQ />
      </div>


      

 
      <WhatsappFloat />
    </div>
  )
}

export default RetreatPage