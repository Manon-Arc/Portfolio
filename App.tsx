import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/Pages/Home';
import Experience from './src/Pages/Experience';
import Contact from './src/Pages/Contact';
import Realisations from './src/Pages/Realisations';
import Header from './src/components/Header';
import Footer from './src/components/Footer'

function App() {
  return (
    <div>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/realisations" element={<Realisations />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
