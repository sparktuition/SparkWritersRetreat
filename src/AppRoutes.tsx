import ManjiriPrabhu from './pages/ManjiriPrabhu';
import SangeethaBahadur from './pages/SangeethaBahadur';
import SunilShelar from './pages/SunilShelar';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RetreatHeroLanding from './pages/RetreatHeroLanding';
import SparkPresentation from './pages/SparkPresentation';
import RetreatHeroTwoColumn from './pages/RetreatHeroTwoColumn';
import RetreatItinerary from './pages/RetreatItinerary';
import RetreatDaily from './pages/RetreatDaily';
import RetreatVilla from './pages/RetreatVilla';
import RetreatWhy from './pages/RetreatWhy';
import RetreatSeats from './pages/RetreatSeats';
import RetreatActivities from './pages/RetreatActivities';
import TransportArrangements from './pages/TransportArrangements';
import RetreatCuisine from './pages/RetreatCuisine';
import RetreatEssentials from './pages/RetreatEssentials';
import RetreatStay from './pages/RetreatStay';
import BookWritingPlan from './pages/BookWritingPlan';
import RetreatFacilitator from './pages/RetreatFacilitator';
import RetreatTestimonials from './pages/RetreatTestimonials';
import RetreatFAQ from './pages/RetreatFAQ';
import RetreatAudience from './pages/RetreatAudience';
import RetreatPricing from './pages/RetreatPricing';
import RetreatPage from './App';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/manjiri-prabhu" element={<ManjiriPrabhu />} />
      <Route path="/sangeetha-bahadur" element={<SangeethaBahadur />} />
      <Route path="/sunil-shelar" element={<SunilShelar />} />
      <Route path="/" element={<RetreatPage />} />
      <Route path="/welcome" element={<RetreatHeroLanding />} />
      <Route path="/spark-presentation" element={<SparkPresentation />} />
      <Route path="/overview" element={<RetreatHeroTwoColumn />} />
      <Route path="/itinerary" element={<RetreatItinerary />} />
      <Route path="/daily" element={<RetreatDaily />} />
      {/* <Route path="/mentors" element={<RetreatMentors />} /> */}
      <Route path="/villa" element={<RetreatVilla />} />
      <Route path="/why" element={<RetreatWhy />} />
      <Route path="/seats" element={<RetreatSeats />} />
      <Route path="/activities" element={<RetreatActivities />} />
      <Route path="/transport" element={<TransportArrangements />} />
      <Route path="/cuisine" element={<RetreatCuisine />} />
      <Route path="/essentials" element={<RetreatEssentials />} />
      <Route path="/stay" element={<RetreatStay />} />
      <Route path="/writing-plan" element={<BookWritingPlan />} />
      <Route path="/facilitator" element={<RetreatFacilitator />} />
      <Route path="/testimonials" element={<RetreatTestimonials />} />
      <Route path="/faq" element={<RetreatFAQ />} />
      <Route path="/audience" element={<RetreatAudience />} />
      <Route path="/pricing" element={<RetreatPricing />} />
      {/* Catch-all route for any unknown path */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
