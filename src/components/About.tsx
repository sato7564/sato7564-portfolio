import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">経歴・プロフィール</h3>
            <p className="about-paragraph">
              テクノロジーと創造性の境界線で活動するクリエイター。
              UnityやPythonを使ったアプリケーション開発から、Web技術を活用したインタラクティブな体験設計まで、
              幅広い領域で活動しています。
            </p>
            <p className="about-paragraph">
              AIを単なるツールとしてではなく、創造のパートナーとして捉え、
              人間の感性とAIの能力を融合させた新しい表現方法を探求しています。
            </p>

            <h3 className="about-subtitle">活動領域</h3>
            <div className="activity-areas">
              <div className="activity-item">
                <div className="activity-icon">💻</div>
                <div className="activity-info">
                  <h4>ソフトウェア開発</h4>
                  <p>Unity、Python、Web技術を使った実用的なアプリケーション開発</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🤖</div>
                <div className="activity-info">
                  <h4>AI活用研究</h4>
                  <p>GPT-4やその他のAIツールを最大限に活用した創作活動</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🔮</div>
                <div className="activity-info">
                  <h4>占い・スピリチュアル</h4>
                  <p>タロット占いとテクノロジーの融合による新しい体験の提供</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
