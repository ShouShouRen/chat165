import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="flex items-center justify-between w-full md:hidden">
        <div className="logo">
          <img src="/robot.png" alt="Logo" />
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

      <ul
        className={`nav-links ${isOpen ? "active" : ""} ${
          isOpen ? "" : "md:flex"
        }`}
      >
        <div className="logo hidden md:block">
          <img src="/robot.png" alt="Logo" />
        </div>

        <li>
          <Link
            to="/"
            onClick={handleLinkClick}
            className={isActive("/") ? "active" : ""}
          >
            首頁
          </Link>
        </li>
        <li>
          <Link
            to="/chat"
            onClick={handleLinkClick}
            className={isActive("/chat") ? "active" : ""}
          >
            Chat165 機器人
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            onClick={handleLinkClick}
            className={isActive("/dashboard") ? "active" : ""}
          >
            防詐儀表板
          </Link>
        </li>
        <li className="md:hidden">
          <a
            href="https://line.me/R/ti/p/@950pwvlr"
            target="_blank"
            rel="noopener noreferrer"
            className="linebot-btn"
            onClick={handleLinkClick}
          >
            LineBot連結
          </a>
        </li>
      </ul>

      <div className="nav-buttons md:flex hidden">
        <a
          href="https://line.me/R/ti/p/@950pwvlr"
          target="_blank"
          rel="noopener noreferrer"
          className="linebot-btn"
        >
          LineBot連結
        </a>
      </div>
    </nav>
  );
}
