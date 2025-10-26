import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Project One',
      description: 'A modern web application built with React and TypeScript',
      technologies: ['React', 'TypeScript', 'Node.js'],
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Full-stack e-commerce platform with payment integration',
      technologies: ['Next.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'Real-time collaboration tool for remote teams',
      technologies: ['React', 'WebSocket', 'Express'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
