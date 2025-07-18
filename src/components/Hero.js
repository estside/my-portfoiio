import React from 'react';
import './Navbar.css'; 

const Hero = () => {
  return (
    <section id="home" className="section section-dark flex items-center justify-center min-h-screen text-center">
      <div className="max-w-3xl px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I’m Saurav Kumar 👋
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300">
          I build AI tools, solve real-world problems, and sometimes even remember to commit my code.
        </p>
      </div>
    </section>
  );
};

export default Hero;
