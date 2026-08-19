import React from 'react';
import { Github, ExternalLink, FileText, X, Filter } from 'lucide-react';

const Projects = ({ selectedSkill, onSelectSkill }) => {
  const projectsData = [
    {
      title: "Incline – Essential data and tools for climate adaptation, resiliency building, and community engagement.",
      techList: ["Django", "Leaflet.js", "JavaScript", "HTML/CSS","Git"],
      techDisplay: "Django, Leaflet.js, JavaScript, HTML/CSS",
      description: [
        "Designed and developed the first production-ready UI using Django templates and vanilla JS.",
        "Integrated Leaflet.js to display real-time maps with server-side data rendering and interaction.",
        "Enabled live responses to location clicks and dynamic plot generation based on geospatial data.",
        "Responsive design optimized for both desktop and mobile devices.",
      ],
      github: null,
      demo: "https://incline.iitmandi.ac.in/",
      imageUrl: "/incline.png",
    },
    {
      title: "Predicting Protein Stability Changes (ΔΔG)",
      techList: ["Machine Learning", "Siamese GNN", "ESM-2", "Bayesian Networks", "Python", "Hugging Face","Git"],
      techDisplay: "Machine Learning, Siamese GNN, ESM-2, Bayesian Networks, Python",
      description: [
        "Engineered a 1D-3D latent fusion architecture combining a Siamese Graph Neural Network (GNN) with a 150-million parameter Protein Language Model (ESM-2).",
        "Achieved a Pearson Correlation of 0.7266 and Mean Absolute Error of 0.7472 kcal/mol, significantly surpassing traditional biophysical force fields.",
        "Constructed a Hybrid Bayesian Network to map explicit biological causality, mathematically quantifying the vulnerability of protein surfaces to polarity shifts."
      ],
      github: null,
      demo: "https://huggingface.co/spaces/estside/3D-GNN-Stability-Predictor",
      paperUrl: "https://drive.google.com/file/d/1bfRVAf3sjTWpc_U5Wah1mxSKgGEZUOPV/view?usp=sharing",
      imageUrl: "/paper_preview.png",
    },
    {
      title: "Vaya – Your Local Healthcare Connection",
      techList: ["Python", "Django", "Django Channels", "Groq API", "LLMs", "RAG", "HTML/CSS", "JavaScript","Git"],
      techDisplay: "Python, Django, Django Channels, Groq API (Llama3), HTML/CSS, JavaScript",
      description: [
        "End-to-end full-stack healthcare platform for appointment booking and doctor management.",
        "Built a real-time, persistent chat system using Django Channels for secure patient-doctor communication.",
        "Engineered an AI-powered symptom checker with Retrieval Augmented Generation (RAG).",
        "The RAG system dynamically pulls verified doctor data from the database to provide accurate, non-hallucinating recommendations with clickable links.",
      ],
      github: "https://github.com/estside/Vaya",
      demo: null,
      imageUrl: "/vaya.png",
    },
    {
      title: "AquaSweep – Underwater Rover with Edge AI & Depth Control",
      techList: ["Python", "OpenCV", "Flask", "ROS", "Arduino", "Raspberry Pi", "Kalman Filtering", "Control Systems","Git","Linux"],
      techDisplay: "Python, OpenCV, Flask, ROS, Arduino, Raspberry Pi",
      description: [
        "Real-time MJPEG camera streaming system (20 FPS, <200ms latency) using Flask sockets.",
        "Modular OpenCV pipeline for algae detection (93% accuracy) with dynamic mode switching.",
        "ROS–Arduino layer controlling 8 thrusters; Kalman-filtered depth holding with Bar30 & IMU (±3cm error).",
      ],
      github: "https://github.com/estside/-Aquasweep",
      imageUrl: "/rover.jpeg",
    },
  ];

  const filteredProjects = selectedSkill
    ? projectsData.filter((project) =>
        project.techList.some(
          (t) => t.toLowerCase() === selectedSkill.toLowerCase()
        )
      )
    : projectsData;

  return (
    <section id="projects" className="section section-dark py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Section */}
        <div className="text-center mb-6">
          <h2 className="section-title text-3xl font-bold inline-block relative pb-2">
            Featured Projects
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-teal-400 rounded-full"></span>
          </h2>
        </div>

        {/* Sleek Active Skill Filter Banner */}
        {/* Sleek Active Skill Filter Banner (Inline Styled for Compatibility) */}
        {selectedSkill && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', width: '100%', border: 'none' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '8px 20px', 
              backgroundColor: '#1e293b', 
              border: '1px solid #14b8a6', 
              borderRadius: '50px',
              color: '#e2e8f0', 
              fontSize: '14px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <Filter size={16} color="#14b8a6" style={{ marginRight: '8px' }} />
              
              <span style={{ marginRight: '16px' }}>
                Showing projects using: <strong style={{ color: '#5eead4', marginLeft: '4px' }}>{selectedSkill}</strong>
              </span>

              <button
                onClick={() => onSelectSkill(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(244, 63, 94, 0.1)', 
                  color: '#fb7185', 
                  border: '1px solid rgba(244, 63, 94, 0.3)',
                  borderRadius: '20px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(244, 63, 94, 0.2)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(244, 63, 94, 0.1)'}
              >
                <X size={14} style={{ marginRight: '4px' }} /> 
                Clear Filter
              </button>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <div key={idx} className="project-card">
                {(project.imageUrl || project.videoUrl) && (
                  <div className="project-media-container">
                    {project.imageUrl && (
                      <img src={project.imageUrl} alt={`${project.title} Preview`} />
                    )}
                    {project.videoUrl && (
                      <iframe
                        src={project.videoUrl}
                        title={`${project.title} Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                )}

                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">{project.techDisplay}</p>
                <div className="project-description">
                  <ul>
                    {project.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link paper"
                    >
                      <FileText size={16} />
                      Paper
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-400 text-sm">No projects found for "{selectedSkill}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;