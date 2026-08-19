import React from 'react';
import { Mail } from 'lucide-react';
import './Navbar.css'; 

const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-form">
          <form action="https://formspree.io/f/mrblbqww" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" name="name" placeholder="Your Name" required className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" placeholder="your.email@example.com" required className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" name="subject" placeholder="Let's discuss..." className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea name="message" rows="5" placeholder="Your message here..." required className="form-input form-textarea"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <Mail size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
