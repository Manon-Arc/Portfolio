import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/components/Header.css';
import '../style/style_gen.css';
import portfolioLogo from '../assets/PortFolio.png';

const Header = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { name: 'Accueil', link: '/' },
    { name: 'A propos', link: '/a_propos' },
    { name: 'Réalisations', link: '/realisations' },
    { name: 'Experiences', link: '/experience' },
    { name: 'Contact', link: '/contact' },
  ];

  useEffect(() => {
    const category = categories.find((cat) => cat.link === location.pathname);
    if (category) {
      setSelectedCategory(category.name);
    } else {
      setSelectedCategory('');
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header-left">
        <a href="/">
          <img src={portfolioLogo} alt="Portfolio Logo" />
        </a>
      </div>
      <div className="header-right">
        {categories.map((category) => (
          <a href={category.link} key={category.name}>
            <p
              className={`txt-category ${selectedCategory === category.name ? 'selected' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </p>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
