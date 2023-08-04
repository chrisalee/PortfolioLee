import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Link to='/PortfolioLee/'>
          <img src={"https://chrisalee.github.io/PortfolioLee/assets/c.png"} alt="" className="logo__image" loading='lazy' />
        </Link>
      </div>
      <a href="mailto:chrisalee222@gmail.com" className="footer__link">
        chrisalee222@gmail.com
      </a>
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
      <div className="resume-footer">
        <a
          href={
            "https://chrisalee.github.io/PortfolioLee/assets/ChristopherLeeResume.pdf"
          }
          target="_blank"
          rel="noreferrer"
          download="ChristopherLeeResume"
          className="resume-link"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Footer;
