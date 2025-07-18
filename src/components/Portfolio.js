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
 import { Linkedin, Instagram, Spotify } from 'lucide-react';
 
// import { Download } from 'lucide-react';
import Resume from "./Resume";

const handleDownload = async () => {
  try {
    const response = await fetch("/resume_final.pdf");
    


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "resume_final.pdf";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll handler for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

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
      title: "Incline – Real-time Geo-Mapping Web App",
      tech: "React, Django, Leaflet.js, JavaScript, HTML/CSS",
      description: [
        "Designed and developed the first production-ready UI using Django templates and vanilla JS.",
        "Integrated Leaflet.js to display real-time maps with server-side data rendering and interaction.",
        "Enabled live responses to location clicks and dynamic plot generation based on geospatial data.",
        "Responsive design optimized for both desktop and mobile devices.",
      ],
      github: null,
      demo: "https://incline.iitmandi.ac.in/",
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
    },
    {
      title: "AI Doctor Chatbot – Multimodal Medical Assistant",
      tech: "React, Python, Django, Whisper, OpenCV, Gradio, GROQ API, LangChain, ChromaDB",
      description: [
        "AI chatbot with image and voice input; Whisper STT + OpenCV-based diagnostic tools.",
        "Integrated GROQ-hosted LLaMA for real-time diagnosis with streaming responses.",
        "RAG-powered knowledge retrieval using LangChain + ChromaDB; export chat as PDF.",
        "Frontend built with React for fast and responsive UI.",
      ],
      github: "https://github.com/estside/med_chat",
    },
    {
      title: "MazeSolver – AI Pathfinding Visualizer with RL + GNN",
      tech: "React, Python, Django, Docker, BFS/DFS/A*/Dijkstra, Q-Learning, DQN, GNN",
      description: [
        "Interactive maze visualizer with BFS, DFS, A*, Dijkstra, IDDFS; animated path cost & heatmaps.",
        "Q-Learning & DQN agents for maze solving with reward visualization.",
        "GNN-based solver with PyTorch Geometric (80%+ success rate on dynamic maps).",
        "React used for front-end UI and visualization animations.",
      ],
      github: "https://github.com/estside/mazesolver",
      demo: "https://mazesolver-5b66.onrender.com/",
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
    setMobileMenuOpen(false);
  };
  const styles = {
    section: {
      padding: "50px 50px",
      textAlign: "center",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "30px",
    },
    resumeCard: {
      maxWidth: "360px",
      margin: "0 auto",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "#fff",

      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    },
    previewImage: {
      width: "100%",
      height: "auto",
      marginBottom: "16px",
      borderRadius: "6px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    },
    downloadBtn: {
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 18px",
      backgroundColor: "#2563eb",
      color: "#fff",
      textDecoration: "none",
      fontWeight: 500,
      borderRadius: "8px",
      transition: "background 0.3s",
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #333;
          background: #0a0a0a;
        }
        sectiom{
            min-height: 70vh !important;
        }
        
        .portfolio-container {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          min-height: 70vh;
          position: relative;
          overflow-x: hidden;
        }
        
        .portfolio-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 255, 198, 0.1) 0%, transparent 50%);
          animation: gradientShift 8s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .floating-element {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(100, 255, 218, 0.3);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        
        
        .hero-section {
          
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          z-index: 1;
          padding: 10vh;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          animation: fadeInUp 1s ease-out;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
          animation: fadeInUp 1s ease-out 0.2s both;
        }
        
        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 3rem;
          line-height: 1.8;
          max-width: 600px;
          animation: fadeInUp 1s ease-out 0.4s both;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease-out 0.6s both;
        }
        
        .cta-button {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          border: none;
        }
        
        .cta-primary {
          background: linear-gradient(45deg, #64ffda, #4fc3f7);
          color: #000;
        }
        
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.3);
          color: #000;
        }
        
        .cta-secondary {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
          color: #fff;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .section {
          padding: 6rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .section-dark {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          margin: 1.5rem;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(45deg, #64ffda, #4fc3f7);
          border-radius: 2px;
        }
        
        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(100, 255, 218, 0.3);
        }
        
        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .project-tech {
          color: #64ffda;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .project-description {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          flex-grow: 1;
        }
        
        .project-description ul {
          list-style: none;
          padding-left: 0;
        }
        
        .project-description li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }
        
        .project-description li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #64ffda;
        }
        
        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }
        
        .project-link {
          padding: 0.5rem 1rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          cursor: pointer;
          border: none;
        }
        
        .project-link.github {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .project-link.github:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
        }
        
        .project-link.demo {
          background: linear-gradient(45deg, #64ffda, #4fc3f7);
          color: #000;
        }
        
        .project-link.demo:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
          color: #000;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .skill-category {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        
        .skill-category:hover {
          transform: translateY(-5px);
          border-color: rgba(100, 255, 218, 0.3);
        }
        
        .skill-category h5 {
          color: #64ffda;
          font-weight: 600;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .skill-tag {
          background: rgba(100, 255, 218, 0.1);
          color: #64ffda;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          border: 1px solid rgba(100, 255, 218, 0.2);
          transition: all 0.3s ease;
        }
        
        .skill-tag:hover {
          background: rgba(100, 255, 218, 0.2);
          transform: translateY(-2px);
        }
        
        .about-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem;
          margin-top: 2rem;
         
          margin: 2rem auto 0;
        }
        .about-content:hover {
          border-color: rgba(100, 255, 218, 0.3);
          transform: translateY(-2px);
        }
        
        .about-content p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        
        .contact-form {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem;
          margin-top: 2rem;
          max-width: 600px;
          margin: 2rem auto 0;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #fff;
        }
        
        .form-input {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.15);
          border-color: #64ffda;
          box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
        }
        
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          background: linear-gradient(45deg, #64ffda, #4fc3f7);
          color: #000;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          width: 100%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.3);
          color: #000;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          

          

          
          
        }
      `}</style>

      {/* Floating Elements */}
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
        <section
          id="home"
          className="hero-section"
          ˇstyle={{ minHeight: "70vh" }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="hero-title">Hello, I'm Saurav Kumar</h1>
            <p className="hero-subtitle">
              Developer | Engineer | Tech Enthusiast
            </p>
            <p className="hero-description">
              A passionate developer and roboticist crafting innovative
              solutions at the intersection of biology, AI, and cutting-edge
              technology. Currently pursuing Bioengineering at IIT Mandi while
              building the future, one commit at a time.
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
        <section
          id="about"
          className="section section-dark"
          style={{ minHeight: "70vh" }}
        >
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
        <section id="skills" className="section" style={{ minHeight: "70vh" }}>
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
        <section
          id="projects"
          className="section section-dark"
          style={{ minHeight: "70vh" }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 projects-grid">
              {projects.map((project, idx) => (
                <div key={idx} className="project-card">
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
         

        <section id="resume" data-color="#0b0c10" style={styles.section}>
          <h2 className="section-title">Resume</h2>

          <div style={styles.resumeCard}>
            <img
              src="/preview.png" // optional image preview (you can replace this)
              alt="Resume Preview"
              style={styles.previewImage}
            />

            <div style={{ position: "relative", zIndex: 10 }}>
              <button onClick={handleDownload} style={styles.downloadBtn}>
                <Download size={18} style={{ marginRight: 8 }} />
                Download Resume
              </button>
            </div>
          </div>
        </section>
     



    
  




        {/* Contact Section */}
        <section id="contact" className="section" style={{ minHeight: "70vh" }}>
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
