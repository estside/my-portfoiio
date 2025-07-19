// Navbar.js (This code is exactly the same as the one provided in the last response)

import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaGithub, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);

      const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
      const sections = ['home', 'about', 'projects', 'skills', 'contact', 'resume'];
      for (let id of sections) {
        const sec = document.getElementById(id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= navHeight && rect.bottom >= navHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(prev => !prev);
  };

  const handleNavLinkClick = () => {
    if (showNavLinks) {
      setShowNavLinks(false);
    }
  };

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`} style={{ backgroundColor: 'var(--navbar-bg)' },{position:'sticky'}}>
      <div className="navbar-inner">
        {/* Mobile Toggle Button (Hamburger/Close Icon) */}
        <button className="nav-toggle" onClick={toggleNavLinks} aria-label="Toggle navigation">
          {showNavLinks ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Left - Navigation Links */}
        <div className={`nav-left ${showNavLinks ? 'show-mobile' : ''}`}>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={handleNavLinkClick}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={handleNavLinkClick}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={handleNavLinkClick}>Skills</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={handleNavLinkClick}>Projects</a>
          <a href="#resume" className={activeSection === 'resume' ? 'active' : ''} onClick={handleNavLinkClick}>Resume</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={handleNavLinkClick}>Contact</a>
        </div>

        {/* Center - Name */}
        <div className="nav-center">
          <a href="#home" onClick={handleNavLinkClick}>
            <h2>SAURAV KUMAR</h2>
          </a>
        </div>

        {/* Right - Social Icons and Theme Toggle */}
        <div className="nav-right">
          <button onClick={toggleTheme} title="Toggle Theme" className="theme-toggle">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <a href="mailto:sksingh95700@gmail.com" title="Mail">
            <FaEnvelope size={20} />
          </a>
          <a href="https://www.instagram.com/sauravk_singhh?igsh=MTJ4ZGYza2J1M3NsZg==" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/saurav-kumar-estside" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://github.com/sauravkumarrr" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;