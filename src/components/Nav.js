import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const handleClickOpen = (event) => {
    document.body.classList.toggle("nav-open");
  };
  const handleClickClose = (event) => {
    document.body.classList.remove("nav-open");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to='/PortfolioLee/'>
          <img src={"https://chrisalee.github.io/PortfolioLee/assets/logo.png"} alt="" className="logo__image" loading='lazy' />
        </Link>
      </div>
      <div className="resume">
        <a
          href={"https://chrisalee.github.io/PortfolioLee/assets/ChristopherLeeResume.pdf"}
          target="_blank"
          rel="noreferrer"
          download="ChristopherLeeResume"
          className="resume-link"
        >
          View Resume
        </a>
      </div>
      <div>
        <button
          className="nav-toggle"
          aria-label="toggle navigation"
          onClick={handleClickOpen}
        >
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item" onClick={handleClickClose}>
              <Link to="/PortfolioLee/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item" onClick={handleClickClose}>
              <a href="/PortfolioLee/#aboutme" className="nav__link">
                About Me
              </a>
            </li>
            <li className="nav__item" onClick={handleClickClose}>
              <a href="/PortfolioLee/#technologies" className="nav__link">
                Technologies
              </a>
            </li>
            <li className="nav__item" onClick={handleClickClose}>
              <a href="/PortfolioLee/#myEducation" className="nav__link">
                My Education
              </a>
            </li>
            <li className="nav__item" onClick={handleClickClose}>
              <a href="/PortfolioLee/#myWork" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item" onClick={handleClickClose}>
              <a href="/PortfolioLee/#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
