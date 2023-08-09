import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <Link to="/PortfolioLee/" onClick={handleClick}>
          <img
            src={"https://chrisalee.github.io/PortfolioLee/assets/c.png"}
            alt=""
            className="logo__image"
            loading="lazy"
          />
        </Link>
      </div>
      <a href="mailto:chrisalee222@gmail.com" className="footer__link">
        chrisalee222@gmail.com
      </a>
      <div className="resume-footer">
        <a
          href={
            "https://chrisalee.github.io/PortfolioLee/assets/ChristopherLeeResume.pdf"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="btn footer-btn"
        >
          View Resume
        </a>
        <div>
          <a
            href={
              "https://chrisalee.github.io/PortfolioLee/assets/ChristopherLeeResume.pdf"
            }
            target="_blank"
            rel="noreferrer"
            download="ChristopherLeeResume"
            className="btn footer-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
      <ul className="social--list">
        <li className="social--list__item">
          <a
            href="https://www.linkedin.com/in/christopheralee22/"
            className="social--list__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social--list__item">
          <a
            href="https://github.com/chrisalee"
            className="social--list__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
