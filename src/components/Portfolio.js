import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Calendar,
  Code,
  Database,
  Cpu,
  Brain,
  Award,
  Download,
  Menu,
  X,
} from "lucide-react";
import './Portfolio.css';

const handleDownload = async () => {
  try {
    const response = await fetch("/Saurav_resume6.pdf");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Saurav_resume6.pdf";
    document.body.appendChild(a);
a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Resume download failed:", error);
    alert("Failed to download resume. Please try again later.");
  }
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
      const scrollPosition = window.scrollY + navHeight + 10;

      const sections = ["home", "about", "skills", "projects", "resume", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
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

  const projects = [
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
      imageUrl: "/incline.png",
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
      imageUrl: "/rover.jpeg",
    },
    {
      title: "AI Doctor Chatbot – Multimodal Medical Assistant",
      tech: "Python, Django, Whisper, OpenCV, Gradio, GROQ API, LangChain, ChromaDB",
      description: [
        "AI chatbot with image and voice input; Whisper STT + OpenCV-based diagnostic tools.",
        "Integrated GROQ-hosted LLaMA for real-time diagnosis with streaming responses.",
        "RAG-powered knowledge retrieval using LangChain + ChromaDB; export chat as PDF.",
      ],
      github: "https://github.com/estside/med_chat",
      imageUrl: "/ai-doctor.jpeg",
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
      imageUrl: "/maze.png",
    },
  ];

  const skillIcons = {
    Languages: <Code size={20} />,
    "Frameworks & Libraries": <Database size={20} />,
    "Tools & Platforms": <Cpu size={20} />,
    Concepts: <Brain size={20} />,
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="floating-elements">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="portfolio-container" id="port">
        {/* Hero Section */}
        {/* Hero Section */}
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

        {/* About Section */}
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

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
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

        {/* Projects Section */}
        <section id="projects" className="section section-dark">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, idx) => (
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

        {/* Resume Section */}
        <section id="resume" className="section">
          <h2 className="section-title">Resume</h2>
          <div className="resume-card">
            <img
              src="/preview.png"
              alt="Resume Preview"
              className="preview-image"
            />
            {/* The corrected div is below. This will center the button horizontally. */}
            <div style={{ position: "relative", zIndex: 10, display: 'flex', justifyContent: 'center' }}>
              <button onClick={handleDownload} className="download-btn">
                <Download size={18} style={{ marginRight: 8 }} />
                Download Resume
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-form">
              <form action="https://formspree.io/f/mrblbqww" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Let's discuss..."
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your message here..."
                    required
                    className="form-input form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <Mail size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;