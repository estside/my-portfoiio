import React, { useState, useEffect } from 'react';

const Another = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll effect
      if (window.scrollY > 50) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }

      // Highlight active section
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state

    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });

    // Make header text visible with animation
    const headerText = document.querySelector('.text-6xl');
    if (headerText) {
      setTimeout(() => {
        headerText.style.opacity = 1;
        headerText.style.transform = 'translateY(0)';
      }, 300);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      // Highlight the section briefly
      targetSection.classList.add('section-highlight');
      setTimeout(() => {
        targetSection.classList.remove('section-highlight');
      }, 1000);

      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <div className="bg-black text-white font-['Space_Grotesk'] overflow-x-hidden">
      {/* Global Styles */}
      <style>{`
        /* Base styles & Custom properties */
        :root {
          --primary: #6366f1; /* Indigo */
          --primary-dark: #4f46e5;
          --secondary: #06b6d4; /* Cyan */
          --accent: #a855f7; /* Purple */
          --dark-bg: #111827;
          --darker-bg: #030712;
          --text-primary: #f3f4f6;
          --text-secondary: #9ca3af;
          --navbar-bg: rgba(17, 24, 39, 0.7); /* Semi-transparent navbar background */
          --glass-effect: blur(12px);
          --transition-normal: all 0.3s ease;
          --border-glow: rgba(99, 102, 241, 0.3);
          --neon-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
          --glow-cyan: 0 0 15px rgba(6, 182, 212, 0.5);
          --glow-indigo: 0 0 15px rgba(99, 102, 241, 0.5);
          --glow-purple: 0 0 15px rgba(168, 85, 247, 0.5);
          --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth; /* Enable smooth scrolling */
          scroll-padding-top: 80px; /* Account for fixed navbar */
        }

        body {
          font-family: "Space Grotesk", sans-serif;
          background-color: var(--darker-bg);
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
          min-height: 100vh;
          transition: background-color 0.5s ease;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: var(--dark-bg);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, var(--primary), var(--accent));
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, var(--primary-dark), var(--accent));
        }

        /* Navigation Bar Styles */
        #navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: var(--navbar-bg);
          backdrop-filter: var(--glass-effect);
          -webkit-backdrop-filter: var(--glass-effect); /* For Safari */
          border-bottom: 1px solid var(--border-glow);
          z-index: 1000;
          transition: var(--transition-normal);
          height: 70px;
        }

        #navbar.scrolled {
          padding: 0.5rem 0;
          background-color: rgba(17, 24, 39, 0.9); /* More opaque when scrolled */
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        /* Navbar Logo */
        .logo {
          display: flex;
          align-items: center;
        }

        /* Navigation Links */
        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, rgb(6, 182, 212), rgb(99, 102, 241));
          transition: width 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 80%;
        }

        .nav-link:hover {
          color: var(--secondary);
          text-shadow: 0 0 8px rgba(6, 182, 212, 0.3);
        }

        /* Mobile Navigation */
        #mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease;
          transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        #mobile-menu.open {
          max-height: 300px; /* Adjust based on your menu height */
        }

        #mobile-menu-button {
          background: transparent;
          border: none;
          cursor: pointer;
        }

        /* For the hamburger animation */
        #mobile-menu-button.active #line1 {
          transform: translate(-50%, -50%) rotate(45deg);
          transform-origin: center;
        }

        #mobile-menu-button.active #line2 {
          opacity: 0;
        }

        #mobile-menu-button.active #line3 {
          transform: translate(-50%, -50%) rotate(-45deg);
          transform-origin: center;
        }

        #line1,
        #line2,
        #line3 {
          transition: transform 0.3s ease, opacity 0.2s ease, background-color 0.3s ease;
          transform-origin: center;
        }

        /* Section Styles */
        section {
          padding: 6rem 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        section:first-of-type {
          padding-top: 8rem;
        }

        /* Gradient Text */
        .gradient-text {
          background: linear-gradient(
            to right,
            var(--primary),
            var(--secondary),
            var(--accent)
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Glow Effects */
        .glow-effect {
          position: relative;
        }

        .glow-effect:before {
          content: "";
          position: absolute;
          inset: -5px;
          background: linear-gradient(to right, var(--primary), var(--accent));
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          filter: blur(8px);
        }

        .glow-effect:hover:before {
          opacity: 1;
        }

        /* Button Styles */
        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: var(--transition-normal);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: linear-gradient(to right, var(--primary), var(--accent));
          color: white;
          border: none;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: var(--neon-shadow);
        }

        .btn-outline {
          background: transparent;
          border: 1px solid var(--secondary);
          color: var(--secondary);
        }

        .btn-outline:hover {
          background-color: rgba(6, 182, 212, 0.1);
          transform: translateY(-3px);
        }

        .contact-btn {
          position: relative;
          overflow: hidden;
        }

        .contact-btn::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 40%,
            rgba(6, 182, 212, 0.2) 45%,
            rgba(6, 182, 212, 0.4) 50%,
            rgba(6, 182, 212, 0.2) 55%,
            transparent 60%
          );
          transition: transform 0.5s ease;
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
        }

        .contact-btn:hover::before {
          transform: translateX(100%) translateY(100%) rotate(45deg);
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }

        @keyframes pulse {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        /* Card Styles */
        .card {
          background-color: rgba(17, 24, 39, 0.7);
          backdrop-filter: var(--glass-effect);
          border: 1px solid var(--border-glow);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: var(--transition-normal);
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: var(--neon-shadow);
          border-color: rgba(99, 102, 241, 0.5);
        }

        .card-hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-hover-effect:hover {
          transform: translateY(-5px);
          box-shadow: var(--glow-cyan);
        }

        /* Form Styles */
        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: rgba(31, 41, 55, 0.5);
          border: 1px solid rgba(75, 85, 99, 0.5);
          border-radius: 0.5rem;
          color: var(--text-primary);
          transition: var(--transition-normal);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--secondary);
          box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
        }

        /* Grid System */
        .grid {
          display: grid;
          gap: 1.5rem;
        }

        .grid-cols-1 {
          grid-template-columns: repeat(1, 1fr);
        }

        /* Responsive Layout */
        @media (min-width: 640px) {
          .sm\\:grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }

          /* Show desktop nav, hide mobile nav */
          .mobile-only {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .desktop-only {
            display: none;
          }

          section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          #navbar {
            height: auto;
          }

          .nav-link::after {
            display: none;
          }
        }

        /* Dark Overlay for Modals */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .overlay.active {
          opacity: 1;
          pointer-events: auto;
        }

        /* Background Decorations */
        .bg-grid {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: 50px 50px;
          background-image: linear-gradient(
                to right,
                rgba(6, 182, 212, 0.05) 1px,
                transparent 1px
              ),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
          z-index: -1;
          pointer-events: none;
        }

        .bg-glow {
          position: fixed;
          width: 60vw;
          height: 60vw;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.15) 0%,
            rgba(6, 182, 212, 0.05) 50%,
            transparent 70%
          );
          filter: blur(60px);
          z-index: -1;
          pointer-events: none;
        }

        .bg-glow.top-right {
          top: -20%;
          right: -20%;
        }

        .bg-glow.bottom-left {
          bottom: -20%;
          left: -20%;
        }

        /* Footer Styles */
        footer {
          background-color: rgba(17, 24, 39, 0.8);
          backdrop-filter: var(--glass-effect);
          border-top: 1px solid var(--border-glow);
          padding: 3rem 0;
        }

        .footer-link {
          color: var(--text-secondary);
          transition: var(--transition-normal);
        }

        .footer-link:hover {
          color: var(--secondary);
        }

        /* Section transitions and animations */
        .section-hidden {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .section-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-highlight {
          position: relative;
        }

        .section-highlight::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(6, 182, 212, 0.1),
            transparent 70%
          );
          opacity: 0;
          animation: pulse 1s ease;
          pointer-events: none;
          z-index: -1;
        }

        /* Enhanced accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* Header animation */
        .text-6xl {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease, transform 1s ease;
        }

        /* Enhance focus styles for accessibility */
        a:focus,
        button:focus {
          outline: 2px solid rgba(6, 182, 212, 0.5);
          outline-offset: 2px;
        }

        /* Style the scrollbar for a futuristic look */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0f172a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #0891b2, #4f46e5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #06b6d4, #6366f1);
        }
      `}</style>

      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-5 pointer-events-none">
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
        </div>
        <div className="absolute inset-0 grid grid-rows-12 opacity-5 pointer-events-none">
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav id="navbar" className={`fixed top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-lg border-b border-cyan-500/30 z-50 transition-all duration-300 ${isNavbarScrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative mr-2">
                <div className="absolute inset-0 bg-cyan-400/30 rounded-md blur-sm"></div>
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-400/30 flex items-center justify-center relative shadow-lg shadow-indigo-800/20">
                  <div className="absolute inset-[3px] bg-gray-900 rounded-[4px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                    <div className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">FN</div>
                  </div>
                </div>
              </div>
              <div className="text-xl font-medium bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center">
                FutureNav
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className={`nav-link text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-md transition-colors duration-200 ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
              <a href="#about" onClick={(e) => handleNavLinkClick(e, '#about')} className={`nav-link text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-md transition-colors duration-200 ${activeSection === 'about' ? 'active' : ''}`}>About</a>
              <a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')} className={`nav-link text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-md transition-colors duration-200 ${activeSection === 'services' ? 'active' : ''}`}>Services</a>
              <a href="#portfolio" onClick={(e) => handleNavLinkClick(e, '#portfolio')} className={`nav-link text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-md transition-colors duration-200 ${activeSection === 'portfolio' ? 'active' : ''}`}>Portfolio</a>
              <a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')} className={`nav-link text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-md transition-colors duration-200 ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
              <div className="relative ml-4 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <button className="contact-btn px-4 py-2 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-sm font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300">
                  <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Connect</span>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex md:hidden">
              <button id="mobile-menu-button" className={`relative w-10 h-10 focus:outline-none group ${isMobileMenuOpen ? 'active' : ''}`} onClick={handleMobileMenuToggle} aria-label="Toggle menu">
                <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <span className="block h-0.5 w-5 bg-cyan-400 mb-1 transform transition duration-300 ease-in-out" id="line1"></span>
                  <span className="block h-0.5 w-5 bg-cyan-400 mb-1 transform transition duration-300 ease-in-out" id="line2"></span>
                  <span className="block h-0.5 w-5 bg-cyan-400 transform transition duration-300 ease-in-out" id="line3"></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'open' : ''}`} style={{ maxHeight: isMobileMenuOpen ? '300px' : '0px' }}>
            <div className="pt-2 pb-4 space-y-1">
              <a href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className={`mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200 ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
              <a href="#about" onClick={(e) => handleNavLinkClick(e, '#about')} className={`mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200 ${activeSection === 'about' ? 'active' : ''}`}>About</a>
              <a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')} className={`mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200 ${activeSection === 'services' ? 'active' : ''}`}>Services</a>
              <a href="#portfolio" onClick={(e) => handleNavLinkClick(e, '#portfolio')} className={`mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200 ${activeSection === 'portfolio' ? 'active' : ''}`}>Portfolio</a>
              <a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')} className={`mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200 ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
              <div className="px-4 pt-2">
                <button className="contact-btn w-full px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                  <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Connect</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main>
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2 relative">
                  Future of Navigation
                </div>
              </div>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-8">
                Cutting-edge UI components designed for the next generation web interfaces
              </p>
              <div className="flex gap-4 flex-wrap justify-center">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-base font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300 transform group-hover:scale-105 group-active:scale-95">
                    <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Get Started</span>
                  </button>
                </div>
                <button className="px-6 py-3 bg-transparent border border-cyan-500/30 rounded-lg text-cyan-400 text-base font-medium flex items-center justify-center gap-2 hover:bg-cyan-900/10 hover:border-cyan-500/50 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
            </div>
          </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center relative py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">About Our Technology</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Next Generation UI</div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300">
                    <div className="flex flex-col">
                      <div className="font-medium text-xl text-white mb-3">Futuristic Design Approach</div>
                      <p className="text-gray-400">Our design system uses cutting-edge techniques like glassmorphism, subtle gradients, and neon accents to create interfaces that feel like they're from the future.</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-sm group-hover:bg-purple-500/30 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/70 backdrop-blur-lg border border-purple-500/20 p-6 rounded-xl shadow-xl group-hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex flex-col">
                      <div className="font-medium text-xl text-white mb-3">Advanced User Experience</div>
                      <p className="text-gray-400">Every interaction is carefully crafted to provide fluid transitions, intuitive feedback, and a seamless Browse experience across all devices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center relative py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">What We Offer</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Our Services</div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Service Card 1 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-indigo-500/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-indigo-500/20 rounded-lg p-6 relative z-10 h-full group-hover:border-indigo-500/40 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded bg-indigo-900/60 flex items-center justify-center mr-3 group-hover:bg-indigo-800/70 transition-colors">
                          <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                          </svg>
                        </div>
                        <div className="font-medium text-lg text-indigo-300 group-hover:text-indigo-200 transition-colors">UI Design</div>
                      </div>
                      <p className="text-gray-400 mb-4">Create stunning user interfaces with our futuristic design components and templates.</p>
                      <a href="#" className="mt-auto text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Card 2 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-purple-500/20 rounded-lg p-6 relative z-10 h-full group-hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded bg-purple-900/60 flex items-center justify-center mr-3 group-hover:bg-purple-800/70 transition-colors">
                          <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                          </svg>
                        </div>
                        <div className="font-medium text-lg text-purple-300 group-hover:text-purple-200 transition-colors">Development</div>
                      </div>
                      <p className="text-gray-400 mb-4">Turn designs into functional websites with our clean, optimized code implementation.</p>
                      <a href="#" className="mt-auto text-purple-400 hover:text-purple-300 inline-flex items-center">
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Card 3 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-500/20 rounded-lg p-6 relative z-10 h-full group-hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded bg-cyan-900/60 flex items-center justify-center mr-3 group-hover:bg-cyan-800/70 transition-colors">
                          <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div className="font-medium text-lg text-cyan-300 group-hover:text-cyan-200 transition-colors">UX Research</div>
                      </div>
                      <p className="text-gray-400 mb-4">Improve user experience through data-driven insights and comprehensive user testing.</p>
                      <a href="#" className="mt-auto text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="min-h-screen flex items-center relative py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">Our Work</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Portfolio Item 1 */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-600/80 opacity-0 group-hover:opacity-90 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xl font-medium text-white mb-2">AI Dashboard</div>
                      <p className="text-gray-200 mb-4">Futuristic analytics interface with real-time data visualization</p>
                      <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded text-white hover:bg-white/30 transition-colors duration-300">View Details</button>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <div className="text-cyan-400/30 font-medium">Project Image 1</div>
                  </div>
                </div>

                {/* Portfolio Item 2 */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 to-indigo-600/80 opacity-0 group-hover:opacity-90 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xl font-medium text-white mb-2">Crypto Platform</div>
                      <p className="text-gray-200 mb-4">Modern cryptocurrency trading platform with advanced charting</p>
                      <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded text-white hover:bg-white/30 transition-colors duration-300">View Details</button>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <div className="text-cyan-400/30 font-medium">Project Image 2</div>
                  </div>
                </div>

                {/* Portfolio Item 3 */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 opacity-0 group-hover:opacity-90 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xl font-medium text-white mb-2">Smart Home UI</div>
                      <p className="text-gray-200 mb-4">IoT control interface for next generation smart homes</p>
                      <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded text-white hover:bg-white/30 transition-colors duration-300">View Details</button>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <div className="text-cyan-400/30 font-medium">Project Image 3</div>
                  </div>
                </div>

                {/* Portfolio Item 4 */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 to-blue-600/80 opacity-0 group-hover:opacity-90 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xl font-medium text-white mb-2">AR Navigation</div>
                      <p className="text-gray-200 mb-4">Augmented reality navigation system for urban environments</p>
                      <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded text-white hover:bg-white/30 transition-colors duration-300">View Details</button>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <div className="text-cyan-400/30 font-medium">Project Image 4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center relative py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">Get In Touch</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Contact Us</div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2">
                  <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-xl shadow-xl">
                    <div className="text-xl font-medium text-white mb-4">Contact Information</div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <div>
                          <div className="text-sm text-gray-400">Address</div>
                          <div className="text-white">100 Tech Plaza, Innovation District</div>
                          <div className="text-white">San Francisco, CA 94103</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <div>
                          <div className="text-sm text-gray-400">Email</div>
                          <a href="mailto:info@futurenav.com" className="text-white hover:text-cyan-400 transition-colors">info@futurenav.com</a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <div>
                          <div className="text-sm text-gray-400">Phone</div>
                          <a href="tel:+14155552671" className="text-white hover:text-cyan-400 transition-colors">+1 (415) 555-2671</a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="text-white mb-2">Follow Us</div>
                      <div className="flex space-x-3">
                        <a href="#" className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                          </svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                          </svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-xl shadow-xl">
                    <div className="text-xl font-medium text-white mb-4">Send us a message</div>
                    <form>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                          <input type="text" id="name" className="w-full bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                          <input type="email" id="email" className="w-full bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors" />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">Subject</label>
                        <input type="text" id="subject" className="w-full bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors" />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                        <textarea id="message" rows="4" className="w-full bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"></textarea>
                      </div>
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                        <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-base font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300">
                          <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Send Message</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative mr-2">
                <div className="absolute inset-0 bg-cyan-400/30 rounded-md blur-sm"></div>
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-400/30 flex items-center justify-center relative shadow-lg shadow-indigo-800/20">
                  <div className="absolute inset-[2px] bg-gray-900 rounded-[3px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                    <div className="font-bold text-xs bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">FN</div>
                  </div>
                </div>
              </div>
              <div className="text-lg font-medium bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center">
                FutureNav
              </div>
            </div>

            <div className="flex justify-center mb-4 md:mb-0">
              <a href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">Home</a>
              <a href="#about" onClick={(e) => handleNavLinkClick(e, '#about')} className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">About</a>
              <a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')} className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">Services</a>
              <a href="#portfolio" onClick={(e) => handleNavLinkClick(e, '#portfolio')} className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">Portfolio</a>
              <a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')} className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">Contact</a>
            </div>

            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2025 FutureNav. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Another;