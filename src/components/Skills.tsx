import React from 'react';
import './Skills.css';

interface Skill {
  category: string;
  items: string[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'PostgreSQL']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'CI/CD']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
