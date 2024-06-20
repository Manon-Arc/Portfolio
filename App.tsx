import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/Pages/Home';
import ExperienceDetail from './src/Pages/ExperienceDetail';
import Contact from './src/Pages/Contact';
import Realisations from './src/Pages/Realisations';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Experiences from './src/Pages/Experience';
import NotFound from './src/components/NoFound';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="*" element={<NotFound />} /> {/* Route 404 */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
