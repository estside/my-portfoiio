// my-portfolio/src/App.js

import React, { useState, useEffect } from 'react';


// Import Portfolio.css from its location inside the components folder
import './components/Portfolio.css'; // <--- THIS IS THE CHANGED PATH

// Import all your section components from the 'components' folder
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skils';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Floating elements JSX
  const floatingElements = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="floating-element"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${4 + Math.random() * 4}s`,
      }}
    />
  ));

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
      const scrollPosition = window.scrollY + navHeight + 10;

      const sections = ["home", "about", "skills", "projects", "resume", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scrollToSection function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App min-h-screen">
      <Navbar/>
      {/* Background Floating Elements */}
      <div className="floating-elements">
        {floatingElements}
      </div>

      {/* Main Portfolio Content Container */}
      <div className="portfolio-container" id="port">
        {/* Render each section component directly, passing necessary props */}
        <Hero scrollToSection={scrollToSection} activeSection={activeSection} />
        <About activeSection={activeSection} />
        <Skills activeSection={activeSection} />
        <Projects activeSection={activeSection} />
        <Resume activeSection={activeSection} />
        <Contact activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;