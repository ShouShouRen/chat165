import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-card">
        <h1 className="intro-title">開始與 Chat165 機器人對話！</h1>
        <p className="intro-desc">立即開聊天，保護你的財產安全！</p>

        <div className="intro-buttons">
          <Link to={"/chat"} className="chat-now-btn">
            Chat Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
