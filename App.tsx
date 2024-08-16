import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/Pages/Home';
import ExperienceDetail from './src/Pages/ExperienceDetail';
import Contact from './src/Pages/Contact';
import Realisations from './src/Pages/Realisations';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Experiences from './src/Pages/Experience';
import NotFound from './src/components/NoFound';
import A_propos from './src/Pages/A_Propos';
import Blog from './src/Pages/Blog';
import BlogDetail from './src/Pages/BlogDetail'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a_propos" element={<A_propos />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} /> {/* Route 404 */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
