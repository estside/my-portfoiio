import React from 'react';
import { Download } from 'lucide-react'; // Import necessary icons

// Define handleDownload outside the component if it doesn't rely on state/props
const handleDownload = async () => {
  try {
    const response = await fetch("/Saurav-Resume.pdf"); // Ensure this path is correct relative to public/
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Saurav-Resume.pdf"; // Filename for download
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Resume download failed:", error);
    alert("Failed to download resume. Please try again later.");
  }
};

const Resume = ({ activeSection }) => { // activeSection prop if you need it here
  return (
    <section id="resume" className="section">
      <h2 className="section-title">Resume</h2>
      <div className="resume-card">
        <img
          src="/Resume_preview.png" // Ensure this path is correct relative to public/
          alt="Resume Preview"
          className="preview-image"
        />
        <div style={{ position: "relative", zIndex: 10, display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleDownload} className="download-btn">
            <Download size={18} style={{ marginRight: 8 }} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
