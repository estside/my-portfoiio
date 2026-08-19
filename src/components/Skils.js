import React from 'react';
import { Code, Database, Cpu, Brain } from 'lucide-react';

const Skills = ({ selectedSkill, onSelectSkill }) => {
  const skillsData = {
    Languages: ["Python", "C++", "JavaScript", "HTML/CSS"],
    "Frameworks & Libraries": [
      "Django",
      "React",
      "OpenCV",
      "Flask",
      "ROS",
      "Django Channels",
      "Leaflet.js",
    ],
    "Tools & Platforms": [
      "Git",
      "Docker",
      "Linux",
      "Raspberry Pi",
      "Arduino",
      "Groq API",
      "Hugging Face",
    ],
    Concepts: [
      "Machine Learning",
      "Siamese GNN",
      "ESM-2",
      "Bayesian Networks",
      "RAG",
      "LLMs",
      "Kalman Filtering",
      "Control Systems",
    ],
  };

  const skillIcons = {
    Languages: <Code size={20} />,
    "Frameworks & Libraries": <Database size={20} />,
    "Tools & Platforms": <Cpu size={20} />,
    Concepts: <Brain size={20} />,
  };

  const handleSkillClick = (skill) => {
    // Toggle skill selection on click
    const newSkill = selectedSkill === skill ? null : skill;
    onSelectSkill(newSkill);

    // Smooth scroll down to the projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title flex items-center gap-2">
                {skillIcons[category]}
                {category}
              </h3>
              <div className="skill-tags flex flex-wrap gap-2 mt-3">
                {items.map((skill, i) => {
                  const isActive = selectedSkill === skill;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSkillClick(skill)}
                      className={`skill-tag cursor-pointer text-sm px-3 py-1.5 rounded-md transition-all duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white font-bold scale-105 shadow-md"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;