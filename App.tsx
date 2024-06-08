import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/Pages/Home';
import Experience from './src/Pages/Experience';
import Contact from './src/Pages/Contact';
import Realisation from './src/Pages/Realisation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/realisation" element={<Realisation />} />
      </Routes>
    </Router>
  );
}

export default App;
