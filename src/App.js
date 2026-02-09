import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import DemocraticEducation from './Pages/DemocraticEducation';
import SkillDevelopment from './Pages/SkillDevelopment';
import HealthWellness from './Pages/Health&Wellness';
import Testimonial from './Pages/Testimonial';
import EventActivities from './Pages/EventActivities';
import Contact from './Pages/Contact';
import Donation from './Pages/Donation';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsConditions';

function App() {
  return (
   <>
   <BrowserRouter>
     <ScrollToTop />
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/democratic-education" element={<DemocraticEducation/>} />
        <Route path="/skill-development" element={<SkillDevelopment/>} />
        <Route path="/health-wellness" element={<HealthWellness/>} />
        <Route path="/testimonials" element={<Testimonial/>} />
        <Route path="/event-activities" element={<EventActivities/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/donation" element={<Donation/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-conditions" element={<TermsConditions/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
   </>
  );
}

export default App;