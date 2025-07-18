// src/components/Resume.js
import React from 'react';
import { Download } from 'lucide-react'; // optional icon

const Resume = () => {
  return (
    <section id="resume" data-color="#0b0c10" style={styles.section}>
      <h2 style={styles.heading}>Resume</h2>

      <div style={styles.resumeCard}>
        <img
          src="/preview.png" // optional image preview (you can replace this)
          alt="Resume Preview"
          style={styles.previewImage}
        />

        <a
          href="/resume.pdf"
          download="Saurav_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.downloadBtn}
        >
          <Download size={18} style={{ marginRight: 8 }} />
          Download Resume
        </a>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f7fafc',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
  resumeCard: {
    maxWidth: '360px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
  previewImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '16px',
    borderRadius: '6px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  downloadBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 18px',
    backgroundColor: '#2563eb',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
    borderRadius: '8px',
    transition: 'background 0.3s',
  },
};

export default Resume;
