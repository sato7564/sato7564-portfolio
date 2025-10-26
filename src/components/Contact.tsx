import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="contact-links">
            <a href="mailto:sato7564@example.com" className="contact-link">
              <span className="icon">✉️</span>
              Email
            </a>
            <a href="https://github.com/sato7564" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="icon">🔗</span>
              GitHub
            </a>
            <a href="https://linkedin.com/in/sato7564" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="icon">💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
