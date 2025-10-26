import React from 'react';
import './Philosophy.css';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <h2 className="section-title">Philosophy</h2>
        <div className="philosophy-content">
          <div className="philosophy-main">
            <h3 className="philosophy-heading">AIと創作への考え方</h3>
            <p className="philosophy-text">
              AIは道具ではなく、創造のパートナーです。
            </p>
            <p className="philosophy-text">
              多くの人がAIを単なる効率化ツールとして見ていますが、私はその先にある可能性を追求しています。
              人間の直感、感性、経験とAIの処理能力、パターン認識、膨大な知識を組み合わせることで、
              どちらか一方では到達できない新しい創造の地平が開けると信じています。
            </p>
            <p className="philosophy-text">
              <strong>「AIを1000%使い切る」</strong>とは、AIの能力を最大限引き出すだけでなく、
              人間とAIの相乗効果によって、1+1が10にも100にもなる創造を実現することです。
            </p>
          </div>

          <div className="philosophy-cards">
            <div className="philosophy-card">
              <div className="card-icon">🧠</div>
              <h4>人間の役割</h4>
              <p>直感、感性、目的意識、倫理観、創造的なビジョン</p>
            </div>
            <div className="philosophy-divider">×</div>
            <div className="philosophy-card">
              <div className="card-icon">🤖</div>
              <h4>AIの役割</h4>
              <p>高速処理、パターン認識、膨大な知識、多角的な視点</p>
            </div>
            <div className="philosophy-divider">=</div>
            <div className="philosophy-card highlight">
              <div className="card-icon">✨</div>
              <h4>新しい創造</h4>
              <p>人間とAIの融合による、これまでにない価値の創出</p>
            </div>
          </div>

          <div className="philosophy-quote">
            <blockquote>
              「技術は魔法ではない。でも、正しく使えば魔法のような体験を生み出せる。」
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
