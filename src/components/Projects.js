import React from 'react';
import { Github, ExternalLink } from 'lucide-react'; // Import necessary icons

const Projects = ({ activeSection }) => { // activeSection prop if you need it here
  const projectsData = [ // Renamed to avoid conflict with prop
    {
      title: "Incline – Essential data and tools for climate adaptation, resiliency building, and community engagement.",
      tech: "Django, Leaflet.js, JavaScript, HTML/CSS",
      description: [
        "Designed and developed the first production-ready UI using Django templates and vanilla JS.",
        "Integrated Leaflet.js to display real-time maps with server-side data rendering and interaction.",
        "Enabled live responses to location clicks and dynamic plot generation based on geospatial data.",
        "Responsive design optimized for both desktop and mobile devices.",
      ],
      github: null,
      demo: "https://incline.iitmandi.ac.in/",
      imageUrl: "/incline.png", // Ensure this path is correct relative to public/
    },
    {
      title: "Vaya – Your Local Healthcare Connection",
      tech: "Python, Django, Django Channels, Groq API (Llama3), HTML/CSS, JavaScript",
      description: [
        "End-to-end full-stack healthcare platform for appointment booking and doctor management.",
        "Built a real-time, persistent chat system using Django Channels for secure patient-doctor communication.",
        "Engineered an AI-powered symptom checker with Retrieval Augmented Generation (RAG).",
        "The RAG system dynamically pulls verified doctor data from the database to provide accurate, non-hallucinating recommendations with clickable links.",
      ],
      github: "https://github.com/estside/Vaya", // Replace with your actual GitHub URL
      demo: null, // Removed the demo URL
      imageUrl: "/vaya.png", // Ensure you have a 'vaya.png' or similar image in your public/ folder
    },
    {
      title: "AquaSweep – Underwater Rover with Edge AI & Depth Control",
      tech: "Python, OpenCV, Flask, ROS, Arduino, Raspberry Pi",
      description: [
        "Real-time MJPEG camera streaming system (20 FPS, <200ms latency) using Flask sockets.",
        "Modular OpenCV pipeline for algae detection (93% accuracy) with dynamic mode switching.",
        "ROS–Arduino layer controlling 8 thrusters; Kalman-filtered depth holding with Bar30 & IMU (±3cm error).",
      ],
      github: "https://github.com/estside/-Aquasweep",
      imageUrl: "/rover.jpeg", // Ensure this path is correct
    },
    {
      title: "MazeSolver – AI Pathfinding Visualizer with RL + GNN",
      tech: "Python, Django, Docker, BFS/DFS/A*/Dijkstra, Q-Learning, DQN, GNN",
      description: [
        "Interactive maze visualizer with BFS, DFS, A*, Dijkstra, IDDFS; animated path cost & heatmaps.",
        "Q-Learning & DQN agents for maze solving with reward visualization.",
        "GNN-based solver with PyTorch Geometric (80%+ success rate on dynamic maps).",
      ],
      github: "https://github.com/estside/mazesolver",
      demo: "https://mazesolver-5b66.onrender.com/",
      imageUrl: "/maze.png", // Ensure this path is correct
    },
  ];

  return (
    <section id="projects" className="section section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
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
              <p className="project-tech">{project.tech}</p>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
