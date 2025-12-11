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
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const RetreatPage: React.FC = () => {
  React.useEffect(() => {
    // Temporarily disabled AOS
    // AOS.init({
    //   duration: 600, // much faster
    //   easing: 'ease-out-cubic',
    //   offset: 60, // triggers earlier
    //   once: false, // allow repeat
    //   mirror: false // do NOT animate out on scroll up
    // });
  }, []);
  return (
    <div className="retreat-page-container">
      <SEO />
      

      {/* 1. HERO - Strong USP, Clear Value Proposition */}
      <RetreatHeroLanding />

      {/* 1.5. SPARK PRESENTATION - Brand Introduction */}
      <SparkPresentation />

      {/* 2. WHO IS THIS FOR - Clear Positioning */}
      <RetreatAudience />

      {/* 3. MANJIRI PRABHU - Special Section */}
      <ManjiriPrabhu />

      {/* 4. SANGEETHA BAHADUR - Special Section */}
      <SangeethaBahadur />

      {/* 4. FACILITATOR - Credibility & Trust (Captain Sahana) */}
      <RetreatFacilitator />

      {/* 5. SUNIL SHELAR - Special Section */}
      <SunilShelar />

      {/* 5. OVERVIEW - What You'll Experience */}
      <RetreatHeroTwoColumn />

      {/* 6. KEY TAKEAWAYS & ITINERARY */}
      <div className="theme-amber">
        <RetreatItinerary />
      </div>

      {/* 7. DAILY EXPERIENCE */}
      <div className="theme-lime">
        <RetreatDaily />
      </div>

      {/* 8. THE LOCATION - Visual Storytelling of Himalayas */}
      <div className="theme-sand">
        <RetreatVilla />
      </div>

      {/* 9. STAY & RESORT */}
      <RetreatStay />

      {/* 10. ACTIVITIES & SIGHTSEEING */}
      <RetreatActivities />

      {/* 11. CUISINE */}
      <RetreatCuisine />

      {/* 12. TESTIMONIALS - Social Proof */}
      <RetreatTestimonials />

      {/* 13. PRICING & INCLUSIONS - Clear Value */}
      <div id="pricing">
        <RetreatPricing />
      </div>

      {/* 14. WHY THIS RETREAT */}
      <RetreatWhy />

      {/* 15. TRANSPORT & LOGISTICS */}
      <TransportArrangements />

      {/* 16. ESSENTIALS - What to Bring */}
      <RetreatEssentials />

      {/* 17. WRITING PLAN SUPPORT */}
      <BookWritingPlan />

      {/* 18. FAQ - Address All Concerns */}
      <div id="faq">
        <RetreatFAQ />
      </div>

      <WhatsappFloat />
    </div>
  )
}

export default RetreatPage