import React from 'react';
import { Code, Database, Cpu, Brain } from 'lucide-react'; // Import necessary icons

const Skills = ({ activeSection }) => { // activeSection prop if you need it here
  const skillsData = { // Renamed to avoid conflict with prop
    Languages: ["Python", "C++", "JavaScript", "Perl"],
    "Frameworks & Libraries": [
      "React",
      "Django",
      "ROS",
      "TensorFlow",
      "Streamlit",
      "Flask",
      "OpenCV",
      "Gradio",
    ],
    "Tools & Platforms": [
      "Git",
      "Docker",
      "Linux",
      "Raspberry Pi",
      "Arduino",
      "SolidWorks",
    ],
    Concepts: [
      "Sensor Fusion",
      "Kalman Filtering",
      "Data Preprocessing",
      "Control Systems",
      "Reinforcement Learning",
      "LLMs",
      "RAG (Retrieval-Augmented Generation)",
    ],
  };

  const skillIcons = {
    Languages: <Code size={20} />,
    "Frameworks & Libraries": <Database size={20} />,
    "Tools & Platforms": <Cpu size={20} />,
    Concepts: <Brain size={20} />,
  };

  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h5>
                {skillIcons[category]}
                {category}
              </h5>
              <div className="skill-tags">
                {items.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;