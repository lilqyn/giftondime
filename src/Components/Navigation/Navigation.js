import React, { useState } from 'react';
import './Navigation.css'; // Make sure to have your CSS


import Gift from './Gift.png';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar center">
      {/* Replace text logo with image */}
      <div className="logo">
        <img src={Gift} alt="Logo" className="logo-image" />
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navigation;
