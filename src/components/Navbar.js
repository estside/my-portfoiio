import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaMoon, FaSun } from 'react-icons/fa';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navbarBg, setNavbarBg] = useState('#2b2d42');

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'skills', 'contact', 'resume'];
      for (let id of sections) {
        const sec = document.getElementById(id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
          if (rect.top <= navHeight && rect.bottom >= navHeight) {
            setActiveSection(id);
            const color = sec.getAttribute('data-color');
            if (color) setNavbarBg(color);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [darkMode, setDarkMode] = useState(true);

const toggleTheme = () => {
  setDarkMode(!darkMode);
  if (!darkMode) {
    document.documentElement.classList.add('dark');

    document.getElementById("port").style.backgroundColor = '#0f172a'; // Dark background
  } else {
    document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = '#ffffff'; // Light background
  }
};


  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`} style={{ oundColor: navbarBg }}>
      <style>{`backgr
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Rubik", sans-serif;
        }
        .navbar {
          position: sticky !important;
          top: 0;
          width: 100%;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 30px;
          transition: background-color 0.4s ease-in-out;
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
        }

        .nav-left,
        .nav-right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .nav-left a {
          font-size: 18px;
          color: #edf2f4;
          text-decoration: none;
          transition: color 0.3s linear, border 0.3s ease;
        }

        .nav-left a.active {
          color: #00ff88;
          font-weight: bold;
          border-bottom: 2px solid #00ff88;
        }

        .nav-left a:hover {
          color: #92e5a1;
        }

        .nav-center {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-center h2 {
          color: #edf2f4;
          font-size: 28px;
          font-weight: 750;
        }

        .nav-right a {
          color: white;
          transition: transform 0.3s;
        }
        .nav-center a {
  text-decoration: none;
}

        .nav-right a:hover {
          transform: scale(1.2);
        }
      `}</style>

      <div className="navbar-inner">
        {/* Left - Navigation Links */}
        <div className="nav-left">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#resume" className={activeSection === 'resume' ? 'active' : ''}>Resume</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>

        {/* Center - Name */}
        

        {/* Right - Social Icons */}
        <div className="nav-right">
          {/* <button onClick={toggleTheme} title="Toggle Theme" className="theme-toggle">
  {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
</button> */}

          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;