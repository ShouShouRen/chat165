import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="logo">
          <img src="/static/photos/robot.png" alt="Logo" />
        </div>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/chat">Chat165 機器人</Link>
        </li>
        <li>
          <Link to="/dashboard">防詐儀表板</Link>
        </li>
        <li className="md:hidden">
          <a
            href="https://line.me/R/ti/p/@950pwvlr"
            target="_blank"
            rel="noopener noreferrer"
            className="linebot-btn"
          >
            Linebot連結
          </a>
        </li>
      </ul>

      <div className="nav-buttons">
        <a
          href="https://line.me/R/ti/p/@950pwvlr"
          target="_blank"
          rel="noopener noreferrer"
          className="linebot-btn"
        >
          Linebot連結
        </a>
      </div>
    </nav>
  );
}
