import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import Step from './components/Step';
import Play from './components/Play';
import Promo from './components/Promo';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Fair from './components/Pages/Fair';
import Legal from './components/Pages/Legal';
import Privacy from './components/Pages/Privacy';
import Responsible from './components/Pages/Responsible';
import Faq from './components/Pages/Faq';
import Addiction from './components/Pages/Addiction';
import Terms from './components/Pages/Terms';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={
            <>
              <Welcome />
              <Step />
              <Play />
              <Promo />
              <Testimonial />
            </>
          } />

          {/* Route for Fair Play Violation page */}
          <Route path="/Fair" element={<Fair />} />

          {/* Route for Legalities page */}
          <Route path="/Legal" element={<Legal />} />

          {/* Route for Privacy Policy page */}
          <Route path="/Privacy" element={<Privacy />} />

          {/* Route for Responsible Gaming page */}
          <Route path="/Responsible" element={<Responsible />} />

          {/* Route for FAQ page */}
          <Route path="/Faq" element={<Faq />} />

          {/* Route for Game Addiction page */}
          <Route path="/Addiction" element={<Addiction />} />

          {/* Route for Terms and Conditions page */}
          <Route path="/Terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
