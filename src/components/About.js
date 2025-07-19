import React from 'react';

const About = ({ activeSection }) => { // activeSection prop if you need it here
  return (
    <section id="about" className="section section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm Saurav — a developer by day, roboticist by night, and
            full-time overthinker. Currently at IIT Mandi, pursuing
            Bioengineering while actively ignoring the boundaries between
            biology, AI, and caffeine dependency.
          </p>
          <p>
            I specialize in writing code that works on the first try
            (after 37 commits), and I've somehow convinced microcontrollers,
            medical LLMs, and maze solvers to behave properly. My stack
            includes Python, C++, JavaScript, React, Django, ROS, and
            occasionally, sheer willpower.
          </p>
          <p>
            Outside of development, I possess two elite-tier skills:
            drinking water at light speed and listening to music like
            it's a life-or-death mission. I've found that debugging is at
            least 60% more bearable with a solid playlist — preferably
            something dramatic when `npm install` fails.
          </p>
          <p>
            I build things that solve problems, tell stories, or just look
            really cool. If it has wires, APIs, or weird edge cases, count
            me in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;