import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {currentYear} sato7564. Built with React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
