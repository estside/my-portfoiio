import React from 'react';
import { Award, Mail } from 'lucide-react'; // Import necessary icons

const Hero = ({ scrollToSection, activeSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="hero-title">Hello, I'm Saurav Kumar</h1>
        <p className="hero-subtitle">
          Tech Enthusiast | AI & Software Developer | Problem Solver
        </p>
        <p className="hero-description">
          A passionate <strong>AI and software developer</strong> with a strong foundation in <strong>Data Structures and Algorithms (DSA)</strong>, I thrive on building innovative solutions at the intersection of AI, robotics, and cutting-edge technology. Currently pursuing Bioengineering at IIT Mandi, I'm dedicated to crafting intelligent systems that solve real-world challenges, one line of code at a time.
        </p>
        <div className="cta-buttons">
          <button
            onClick={() => scrollToSection("projects")}
            className="cta-button cta-primary"
          >
            <Award size={20} />
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cta-button cta-secondary"
          >
            <Mail size={20} />
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;