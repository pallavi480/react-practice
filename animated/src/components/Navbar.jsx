import React from 'react';

function Navbar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <h2>Rudra</h2>
      <ul>
        <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Home</a></li>
        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
