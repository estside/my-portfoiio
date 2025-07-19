// my-portfolio/src/components/Portfolio.js

import React, { useState, useEffect } from "react";
import './Portfolio.css'; // Import the shared CSS file for all sections

// Import your section components from the same directory
import Hero from './Hero';
import About from './About';
import Skills from './Skils';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Floating elements are defined here as they are a background overlay for the entire portfolio
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

  // Pass scrollToSection down to children that need to trigger scroll (like Hero)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background Floating Elements */}
      <div className="floating-elements">
        {floatingElements}
      </div>

      {/* Main Portfolio Container */}
      <div className="portfolio-container" id="port">
        {/* Render each section component, passing necessary props */}
        <Hero scrollToSection={scrollToSection} activeSection={activeSection} />
        <About activeSection={activeSection} />
        <Skills activeSection={activeSection} />
        <Projects activeSection={activeSection} />
        <Resume activeSection={activeSection} />
        <Contact activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Portfolio;