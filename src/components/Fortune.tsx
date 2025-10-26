import { useState } from 'react';
import './Fortune.css';

interface TarotCard {
  name: string;
  meaning: string;
  keywords: string[];
}

const Fortune = () => {
  const [drawnCard, setDrawnCard] = useState<TarotCard | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const tarotCards: TarotCard[] = [
    {
      name: '愚者',
      meaning: '新しい始まり、自由、冒険への一歩。恐れずに前へ進む時です。',
      keywords: ['新しい旅', '純粋さ', '可能性']
    },
    {
      name: '魔術師',
      meaning: '創造力、実現の力。あなたには目標を達成する力があります。',
      keywords: ['創造', '意志', '実現']
    },
    {
      name: '女教皇',
      meaning: '直感、内なる知恵。心の声に耳を傾けましょう。',
      keywords: ['直感', '神秘', '静寂']
    },
    {
      name: '女帝',
      meaning: '豊かさ、創造性、母性的な愛。成長の時期です。',
      keywords: ['豊穣', '創造', '愛']
    },
    {
      name: '皇帝',
      meaning: '安定、秩序、リーダーシップ。構造を整える時です。',
      keywords: ['権威', '安定', '秩序']
    },
    {
      name: '恋人',
      meaning: '選択、調和、愛。重要な決断の時が来ています。',
      keywords: ['愛', '選択', '調和']
    },
    {
      name: '戦車',
      meaning: '意志の力、前進、勝利。障害を乗り越える力があります。',
      keywords: ['前進', '意志', '勝利']
    },
    {
      name: '正義',
      meaning: 'バランス、真実、公正。正しい判断が求められています。',
      keywords: ['真実', 'バランス', '公正']
    },
    {
      name: '運命の輪',
      meaning: '変化、サイクル、運命。人生の転機が訪れています。',
      keywords: ['変化', '運命', 'サイクル']
    },
    {
      name: '太陽',
      meaning: '成功、喜び、明るい未来。全てが輝き始めます。',
      keywords: ['成功', '喜び', '光']
    }
  ];

  const drawCard = () => {
    setIsDrawing(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      setDrawnCard(tarotCards[randomIndex]);
      setIsDrawing(false);
    }, 1500);
  };

  return (
    <section id="fortune" className="fortune">
      <div className="container">
        <h2 className="section-title">Fortune Telling</h2>
        <p className="section-subtitle">今日のあなたへのメッセージ</p>

        <div className="fortune-container">
          {!drawnCard && !isDrawing && (
            <div className="fortune-intro">
              <div className="tarot-deck">
                <div className="card-back">🔮</div>
                <div className="card-back">🔮</div>
                <div className="card-back">🔮</div>
              </div>
              <p className="fortune-text">
                心を静めて、カードを引いてください。
                <br />
                今のあなたに必要なメッセージが届きます。
              </p>
              <button className="draw-button" onClick={drawCard}>
                カードを引く
              </button>
            </div>
          )}

          {isDrawing && (
            <div className="fortune-drawing">
              <div className="card-spinning">🔮</div>
              <p className="drawing-text">カードを選んでいます...</p>
            </div>
          )}

          {drawnCard && !isDrawing && (
            <div className="fortune-result">
              <div className="drawn-card">
                <div className="card-title">{drawnCard.name}</div>
                <div className="card-symbol">✨</div>
              </div>
              <div className="card-meaning">
                <p className="meaning-text">{drawnCard.meaning}</p>
                <div className="keywords">
                  {drawnCard.keywords.map((keyword, index) => (
                    <span key={index} className="keyword-tag">{keyword}</span>
                  ))}
                </div>
              </div>
              <button className="draw-button" onClick={drawCard}>
                もう一度引く
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Fortune;
