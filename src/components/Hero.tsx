import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">sato7564</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="hero-description">
            I build modern web applications with passion for clean code and great user experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
