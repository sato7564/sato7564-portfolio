import React from 'react';
import './Skills.css';

interface Skill {
  category: string;
  icon: string;
  description: string;
  items: string[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Unity',
      icon: '🎮',
      description: 'ゲーム開発・インタラクティブコンテンツ',
      items: ['3Dゲーム開発', 'AR/VR体験', 'Physics Simulation', 'Shader Programming']
    },
    {
      category: 'Python',
      icon: '🐍',
      description: 'AI・データ処理・自動化',
      items: ['機械学習', 'データ分析', 'スクレイピング', 'API開発']
    },
    {
      category: 'Cloud Run',
      icon: '☁️',
      description: 'サーバーレス・スケーラブルなデプロイ',
      items: ['コンテナ化', 'CI/CD', 'Auto Scaling', 'Cloud Functions']
    },
    {
      category: 'Web',
      icon: '🌐',
      description: 'モダンなWeb開発',
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Creative',
      icon: '✨',
      description: 'デザイン・創作・表現',
      items: ['UI/UX Design', 'タロット占い', 'コンテンツ企画', 'ストーリーテリング']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">技術と創造性を融合させた多様なスキルセット</p>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">{skillGroup.icon}</div>
              <h3 className="category-title">{skillGroup.category}</h3>
              <p className="category-description">{skillGroup.description}</p>
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
