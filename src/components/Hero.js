import React from 'react';
import { Award, Mail } from 'lucide-react';

const Hero = ({ scrollToSection, activeSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="hero-title">Saurav Kumar</h1>
        <h2 className="hero-subtitle">
          AI/ML Engineer | Full-Stack Developer | Bioengineer
        </h2>
        <p className="hero-description">
          Bioengineering undergraduate at IIT Mandi bridging the gap between biological sciences and scalable technology. I build intelligent systems across multiple domains—from applying computational biology, Graph Neural Networks, and transformer models to analyze protein structures, to developing robust full-stack web applications and exploring robotic control systems.
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