import React from 'react';
import { Eye } from 'lucide-react'; 

const handleViewPDF = () => {
  window.open("/Saurav_updated.pdf", "_blank", "noopener,noreferrer");
};

const Resume = ({ activeSection }) => { 
  return (
    <section id="resume" className="section">
      <h2 className="section-title">Resume</h2>
      
      {/* Outer Card with flex alignment resets */}
      <div 
        className="resume-card" 
        style={{ 
          maxWidth: "520px", 
          width: "90%", 
          margin: "0 auto", 
          padding: "20px", 
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Image Frame Wrapper */}
        <div style={{ width: "100%", overflow: "hidden", borderRadius: "8px" }}>
          <img
            src="/image.png" 
            alt="Resume Preview"
            style={{ 
              width: "100%", 
              maxWidth: "100%",
              height: "auto", 
              display: "block",
              margin: "0 auto",
              borderRadius: "8px" 
            }} 
          />
        </div>
        
        {/* Button Wrapper */}
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", width: "100%" }}>
          <button onClick={handleViewPDF} className="download-btn">
            <Eye size={18} style={{ marginRight: 8 }} />
            View PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;