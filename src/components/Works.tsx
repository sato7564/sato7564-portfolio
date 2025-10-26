import React from 'react';
import './Works.css';

interface Work {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

const Works: React.FC = () => {
  const works: Work[] = [
    {
      title: 'AI占いアプリ',
      description: 'GPT-4を活用したタロット占いアプリ。ユーザーの質問に対してAIが深い洞察を提供します。',
      technologies: ['Python', 'OpenAI API', 'React', 'Cloud Run'],
      image: '🔮',
      link: '#'
    },
    {
      title: 'Unity VRゲーム',
      description: 'VR空間での没入型パズルゲーム。物理演算を活用した直感的な操作体験を実現。',
      technologies: ['Unity', 'C#', 'VR SDK', 'Blender'],
      image: '🎮',
      link: '#'
    },
    {
      title: 'クリエイティブポートフォリオ',
      description: 'モダンなデザインとアニメーションを組み合わせたポートフォリオサイト。',
      technologies: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'],
      image: '🌐',
      link: '#',
      github: '#'
    },
    {
      title: 'データビジュアライゼーションツール',
      description: 'リアルタイムデータを美しく可視化するWebアプリケーション。',
      technologies: ['Python', 'D3.js', 'FastAPI', 'PostgreSQL'],
      image: '📊',
      link: '#'
    }
  ];

  return (
    <section id="works" className="works">
      <div className="container">
        <h2 className="section-title">Works & Projects</h2>
        <p className="section-subtitle">技術と創造性を融合させたプロジェクト実績</p>
        <div className="works-grid">
          {works.map((work, index) => (
            <div key={index} className="work-card">
              <div className="work-image">
                <div className="image-placeholder">{work.image}</div>
              </div>
              <div className="work-content">
                <h3 className="work-title">{work.title}</h3>
                <p className="work-description">{work.description}</p>
                <div className="work-technologies">
                  {work.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="work-links">
                  {work.link && (
                    <a href={work.link} className="work-link">
                      View Project →
                    </a>
                  )}
                  {work.github && (
                    <a href={work.github} className="work-link">
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
