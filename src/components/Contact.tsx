import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信のロジックをここに実装（実際のアプリではバックエンドAPIへの送信）
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // 3秒後にメッセージをリセット
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">お問い合わせ・ご連絡はこちらから</p>

        <div className="contact-content">
          <div className="contact-links">
            <a href="mailto:sato7564@example.com" className="contact-link">
              <span className="icon">✉️</span>
              <div className="link-info">
                <h3>Email</h3>
                <p>sato7564@example.com</p>
              </div>
            </a>
            <a href="https://github.com/sato7564" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="icon">💻</span>
              <div className="link-info">
                <h3>GitHub</h3>
                <p>@sato7564</p>
              </div>
            </a>
            <a href="https://twitter.com/sato7564" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="icon">🐦</span>
              <div className="link-info">
                <h3>Twitter</h3>
                <p>@sato7564</p>
              </div>
            </a>
          </div>

          <div className="contact-form-container">
            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">お名前</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="山田太郎"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">メールアドレス</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">メッセージ</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="お問い合わせ内容をご記入ください..."
                  />
                </div>
                <button type="submit" className="submit-button">
                  送信する
                </button>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>送信完了！</h3>
                <p>メッセージを受け取りました。ありがとうございます！</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
