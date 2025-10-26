import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">AI × Human Creator</div>
          <h1 className="hero-title">
            AIを<span className="highlight">1000%</span>使い切る
            <br />
            クリエイター
          </h1>
          <p className="hero-subtitle">
            テクノロジーと創造性の融合で、未来を形にする
          </p>
          <p className="hero-description">
            Unity、Python、Web技術を駆使し、AIの力を最大限に活用したプロダクト開発を実践。
            技術×創作×占いの領域で、新しい体験を生み出します。
          </p>
          <div className="hero-buttons">
            <a href="#works" className="btn btn-primary">作品を見る</a>
            <a href="#fortune" className="btn btn-secondary">占いを試す</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-circle circle-1"></div>
          <div className="visual-circle circle-2"></div>
          <div className="visual-circle circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
