import React from 'react';

const About = ({ activeSection }) => {
  return (
    <section id="about" className="section section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="about-content text-lg text-gray-300 space-y-6">
          <p>
            I'm Saurav, a Bioengineering undergraduate at IIT Mandi deeply focused on the intersection of biological sciences, artificial intelligence, and software development. My academic journey—which includes a semester exchange studying Computer Science at TU Darmstadt in Germany—has shaped my passion for building cross-disciplinary technology.
          </p>
          <p>
            I specialize in architecting scalable systems and developing advanced machine learning models. Whether I'm building full-stack web applications with Node.js and Django, applying Graph Neural Networks to computational biology, or experimenting with ROS for robotic control, I focus on writing robust, efficient code to solve complex problems.
          </p>
          <p>
            Beyond standard coursework, I am consistently sharpening my problem-solving foundations through rigorous Data Structures and Algorithms (DSA) practice. I thrive on the challenge of tackling complex edge cases, optimizing systems, and connecting hardware with intelligent software.
          </p>
          <p>
            Outside of development, I still rely on a highly curated, dramatic playlist to power through complex builds and late-night debugging sessions. I am driven by the challenge of building intelligent solutions that create real-world impact—if it involves APIs, machine learning pipelines, or intricate problem-solving, count me in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;