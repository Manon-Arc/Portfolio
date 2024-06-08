import React, { useState } from 'react';
import '../style/components/Header.css';
import '../style/style_gen.css';
import portfolioLogo from '../assets/PortFolio.png';

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState('Accueil');

  const handleSelected = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    { name: 'Accueil', link: '/#0' },
    { name: 'A propos', link: '/#1' },
    { name: 'Compétences', link: '/#2' },
    { name: 'Réalisations', link: '/realisation' },
    { name: 'Experiences', link: '/experience' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header-left">
        <a href="index.html">
          <img src={portfolioLogo} alt="Portfolio Logo" />
        </a>
      </div>
      <div className="header-right">
        {categories.map((category) => (
          <a href={category.link} key={category.name}>
            <p
              className={`txt-category ${selectedCategory === category.name ? 'selected' : ''}`}
              onClick={() => handleSelected(category.name)}
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