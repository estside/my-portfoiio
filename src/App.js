import React, { useEffect, useState } from 'react';
import {
  Check,
  Code2,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Send,
  X,
} from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

const projects = [
  {
    title: 'Protein Stability Predictor',
    image: '/paper_preview.png',
    imageClass: 'protein-shot',
    description: 'A 1D–3D latent-fusion system pairing a Siamese GNN with ESM-2 to estimate mutation-driven stability changes, with explicit biological causality modeled through a hybrid Bayesian network.',
    result: 'Pearson correlation 0.7266 · MAE 0.7472 kcal/mol',
    tools: ['Python', 'Siamese GNN', 'ESM-2', 'Bayesian networks'],
    links: [
      { label: 'Demo', href: 'https://huggingface.co/spaces/estside/3D-GNN-Stability-Predictor' },
      { label: 'Paper', href: 'https://drive.google.com/file/d/1bfRVAf3sjTWpc_U5Wah1mxSKgGEZUOPV/view?usp=sharing' },
    ],
  },
  {
    title: 'Vaya',
    image: '/vaya.png',
    description: 'A healthcare platform for doctor discovery, appointments, report handling, and encrypted real-time patient-doctor chat.',
    result: 'Two-step RAG pipeline · 85% answer accuracy',
    tools: ['Django', 'Django Channels', 'RAG', 'Groq API'],
    links: [{ label: 'GitHub', href: 'https://github.com/estside/Vaya' }],
  },
  {
    title: 'AquaSweep',
    image: '/rover.jpeg',
    description: 'An underwater rover combining live vision, algae detection, and Kalman-filtered depth control across an ROS-Arduino stack.',
    result: '20 FPS streaming · ~93% lab detection accuracy · ±3 cm depth error',
    tools: ['OpenCV', 'ROS', 'Arduino', 'Raspberry Pi'],
    links: [{ label: 'GitHub', href: 'https://github.com/estside/-Aquasweep' }],
  },
  {
    title: 'Incline',
    image: '/incline.png',
    imageClass: 'incline-shot',
    description: 'Geospatial interfaces supporting climate adaptation, resilience, and community engagement through interactive data exploration.',
    result: 'Production Django UI · interactive Leaflet mapping',
    tools: ['Django', 'Leaflet.js', 'JavaScript'],
    links: [{ label: 'Live site', href: 'https://incline.iitmandi.ac.in/' }],
  },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saurav-kumar-estside', icon: <Linkedin size={19} /> },
  { label: 'GitHub', href: 'https://github.com/estside', icon: <Github size={19} /> },
  { label: 'LeetCode', href: 'https://leetcode.com/u/wowsaurav/', icon: <SiLeetcode size={18} /> },
  { label: 'Instagram', href: 'https://www.instagram.com/sauravk_singhh?igsh=MTJ4ZGYza2J1M3NsZg==', icon: <Instagram size={18} /> },
  { label: 'Email', href: 'mailto:saurav.iitmandi@gmail.com', icon: <Mail size={19} /> },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const closeOnResize = () => setMenuOpen(false);
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setResumeOpen(false);
    };
    document.body.style.overflow = resumeOpen ? 'hidden' : '';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [resumeOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('saurav.iitmandi@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = 'mailto:saurav.iitmandi@gmail.com';
    }
  };

  return (
    <div className="portfolio-shell">
      <aside className="profile-panel">
        <div className="profile-status"><span /> AVAILABLE FOR INTERESTING PROBLEMS</div>
        <a className="profile-name" href="#top">Saurav Kumar</a>
        <p className="profile-role">Bioengineer exploring <em>AI, biology,</em> and embodied systems.</p>
        <p className="profile-summary">I build useful intelligent systems — from models that reason about proteins to robots that act underwater.</p>

        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={menuOpen ? 'profile-nav profile-nav-open' : 'profile-nav'}>
          <a href="#about" onClick={() => setMenuOpen(false)}><span /> About</a>
          <a href="#education" onClick={() => setMenuOpen(false)}><span /> Education</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}><span /> Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}><span /> Projects</a>
          <a href="#toolkit" onClick={() => setMenuOpen(false)}><span /> Toolkit</a>
          <button onClick={() => { setResumeOpen(true); setMenuOpen(false); }}><span /> Résumé</button>
        </nav>

        <div className="profile-bottom">
          <div className="profile-socials">{socialLinks.map((social) => <a key={social.label} href={social.href} target={social.label === 'Email' ? undefined : '_blank'} rel={social.label === 'Email' ? undefined : 'noreferrer'} aria-label={social.label} title={social.label}>{social.icon}</a>)}</div>
          <button className="copy-contact" onClick={copyEmail}>{copied ? <><Check size={15} /> Email copied</> : <><Mail size={15} /> Copy email</>}</button>
        </div>
      </aside>

      <main className="content-panel" id="top">
        <section className="content-section about-section" id="about">
          <p className="section-kicker">01 / ABOUT</p>
          <div className="about-copy">
            <p>I&apos;m a Bioengineering undergraduate at <a href="https://www.iitmandi.ac.in/" target="_blank" rel="noreferrer">IIT Mandi</a> interested in the messy, exciting border between living systems and computational ones.</p>
            <p>I work across machine learning, full-stack engineering, and robotics. The through-line is simple: start with a real-world signal, make sense of it, then build something people can use.</p>
            <p>My semester exchange in Computer Science at <a href="https://www.tu-darmstadt.de/" target="_blank" rel="noreferrer">TU Darmstadt</a> strengthened the systems perspective I bring to every project.</p>
          </div>
          <div className="micro-map" aria-label="Fields of interest"><span>BIOLOGICAL DATA</span><i /><span>INTELLIGENT MODELS</span><i /><span>PHYSICAL SYSTEMS</span></div>
          <div className="project-mosaic" aria-label="Project snapshots">
            <figure className="mosaic-main"><img src="/rover.jpeg" alt="AquaSweep underwater rover" /><figcaption><span>03</span> AQUASWEEP / ROBOTICS</figcaption></figure>
            <figure className="mosaic-vaya"><img src="/vaya.png" alt="Vaya healthcare platform" /><figcaption>02 / VAYA</figcaption></figure>
            <figure className="mosaic-protein"><img src="/paper_preview.png" alt="Protein stability research paper" /><figcaption>01 / ΔΔG</figcaption></figure>
          </div>
        </section>

        <section className="content-section experience-section" id="education">
          <p className="section-kicker">02 / EDUCATION</p>
          <div className="timeline">
            <article className="timeline-item">
              <p className="timeline-date">OCT 2025 — MAR 2026</p>
              <div><h2>Technische Universität Darmstadt</h2><p className="timeline-role">Computer Science Semester Exchange · Darmstadt, Germany · CGPA 8.46/10</p><p>Expanded my systems foundation through artificial intelligence, computer vision, probabilistic graphical models, LLMs, and scientific computing.</p><ul><li>AI</li><li>Computer vision</li><li>Probabilistic models</li><li>LLMs</li></ul></div>
            </article>
            <article className="timeline-item">
              <p className="timeline-date">AUG 2023 — PRESENT</p>
              <div><h2>Indian Institute of Technology Mandi</h2><p className="timeline-role">B.Tech, Bioengineering · Mandi, India · CGPA 7.97/10</p><p>Building a foundation in data structures and algorithms, machine learning, Python and data science, probability, and statistics.</p><ul><li>Data structures</li><li>Machine learning</li><li>Python & data science</li></ul></div>
            </article>
          </div>
        </section>

        <section className="content-section experience-section" id="experience">
          <p className="section-kicker">03 / EXPERIENCE</p>
          <div className="timeline">
            <article className="timeline-item">
              <p className="timeline-date">JAN — MAR 2026</p>
              <div><h2>Morsesbiz</h2><p className="timeline-role">Web Development Intern · Remote</p><p>Built practical systems across data processing, asynchronous messaging, and billing automation.</p><ul><li>AI-driven verification</li><li>Async messaging APIs</li><li>Invoice automation</li></ul><div className="impact-notes"><p><strong>AI data processing:</strong> Developed high-throughput scraping pipelines with AI-driven content verification for 10,000+ daily entries.</p><p><strong>System integration:</strong> Integrated async messaging APIs for real-time alerts and cross-platform engagement.</p><p><strong>Billing ops:</strong> Built automated invoice generation that reduced manual processing time by 40%.</p></div></div>
            </article>
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <p className="section-kicker">04 / SELECTED PROJECTS</p>
          <div className="project-list">
            {projects.map((project, index) => <article className="project-entry" key={project.title}>
              <div className="project-image-wrap"><img src={project.image} alt={`${project.title} project preview`} className={project.imageClass || ''} /><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="project-text"><h2>{project.title}</h2><p>{project.description}</p><p className="project-result">{project.result}</p><div className="project-tools">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><div className="project-actions">{project.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <MoveUpRight size={14} /></a>)}</div></div>
            </article>)}
          </div>
        </section>

        <section className="content-section toolkit-section" id="toolkit">
          <p className="section-kicker">05 / TOOLKIT</p>
          <div className="toolkit-grid">
            <article><Code2 size={20} /><h2>Languages</h2><p>Python, C++, JavaScript, SQL, HTML/CSS, Perl</p></article>
            <article><span className="toolkit-symbol">λ</span><h2>Frameworks</h2><p>React, Django, ROS, TensorFlow, Streamlit, OpenCV</p></article>
            <article><span className="toolkit-symbol">◎</span><h2>Tools</h2><p>Git, Linux, Docker, SolidWorks, Raspberry Pi, Arduino</p></article>
            <article><span className="toolkit-symbol">∿</span><h2>Concepts</h2><p>Sensor fusion, Kalman filtering, control systems, RAG, GNNs</p></article>
          </div>
        </section>

        <section className="content-section achievements-section">
          <p className="section-kicker">06 / LEADERSHIP + ACHIEVEMENTS</p>
          <div className="achievement-grid"><p><strong>Academic:</strong> Selected for the TU Darmstadt semester exchange on merit from a 450+ student batch; secured a Top 5 Arduino Hackathon rank.</p><p><strong>Leadership:</strong> Hospitality Head for Exodia, managing 1,000+ participants; Robotics Club mentor at IIT Mandi.</p></div>
        </section>

        <section className="resume-callout">
          <div><p className="section-kicker">FULL RÉSUMÉ</p><h2>The details, in one place.</h2></div><button onClick={() => setResumeOpen(true)}>Open résumé <FileText size={17} /></button>
        </section>

        <section className="content-section contact-section" id="contact">
          <p className="section-kicker">07 / CONTACT</p>
          <h2>Let&apos;s make something <em>matter.</em></h2>
          <a className="email-line" href="mailto:saurav.iitmandi@gmail.com">saurav.iitmandi@gmail.com <Send size={18} /></a>
        </section>
        <footer>Designed and built by Saurav Kumar <span>·</span> Bioengineering × AI × Robotics</footer>
      </main>

      {resumeOpen && <div className="resume-dialog-backdrop" role="dialog" aria-modal="true" aria-labelledby="resume-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setResumeOpen(false); }}><div className="resume-dialog"><div className="resume-dialog-header"><span id="resume-title">Saurav Kumar — Résumé · Updated 2026</span><button onClick={() => setResumeOpen(false)} aria-label="Close résumé"><X size={19} /></button></div><iframe title="Saurav Kumar résumé" src="/Saurav_updated-4.pdf#view=FitH&toolbar=0" /></div></div>}
    </div>
  );
}

export default App;
