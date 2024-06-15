import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/Pages/Home';
import Experience from './src/Pages/Experience';
import Contact from './src/Pages/Contact';
import Realisations from './src/Pages/Realisations';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import PostList from './src/components/posts/PostList';
import PostDetail from './src/components/posts/PostDetail';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/experience" element={<PostList />} />
          <Route path="/experience/:id" element={<PostDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
