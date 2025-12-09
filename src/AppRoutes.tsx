import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RetreatHeroLanding from './pages/RetreatHeroLanding';
import RetreatHeroTwoColumn from './pages/RetreatHeroTwoColumn';
import RetreatItinerary from './pages/RetreatItinerary';
import RetreatDaily from './pages/RetreatDaily';
import RetreatMentors from './pages/RetreatMentors';
import RetreatVilla from './pages/RetreatVilla';
import RetreatWhy from './pages/RetreatWhy';
import RetreatSeats from './pages/RetreatSeats';
import RetreatActivities from './pages/RetreatActivities';
import RetreatCTA from './pages/RetreatCTA';
import TransportArrangements from './pages/TransportArrangements';
import RetreatCuisine from './pages/RetreatCuisine';
import RetreatEssentials from './pages/RetreatEssentials';
import RetreatStay from './pages/RetreatStay';
import BookWritingPlan from './pages/BookWritingPlan';
import Contact from './pages/Contact';
import RetreatPage from './App';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RetreatPage />} />
      <Route path="/welcome" element={<RetreatHeroLanding />} />
      <Route path="/overview" element={<RetreatHeroTwoColumn />} />
      <Route path="/itinerary" element={<RetreatItinerary />} />
      <Route path="/daily" element={<RetreatDaily />} />
      <Route path="/mentors" element={<RetreatMentors />} />
      <Route path="/villa" element={<RetreatVilla />} />
      <Route path="/why" element={<RetreatWhy />} />
      <Route path="/seats" element={<RetreatSeats />} />
      <Route path="/activities" element={<RetreatActivities />} />
      <Route path="/cta" element={<RetreatCTA />} />
      <Route path="/transport" element={<TransportArrangements />} />
      <Route path="/cuisine" element={<RetreatCuisine />} />
      <Route path="/essentials" element={<RetreatEssentials />} />
      <Route path="/stay" element={<RetreatStay />} />
      <Route path="/writing-plan" element={<BookWritingPlan />} />
      <Route path="/contact" element={<Contact />} />
      {/* Catch-all route for any unknown path */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
