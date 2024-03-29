import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const MyProjects = () => {
  return (
    <section className="myWork" id="myWork" name="myWork">
      <h2 className="section__title section__title--myWork">
        Featured Projects
      </h2>
      <p className="section__subtitle section__subtitle--myWork">
        A selection of my range of work
      </p>

      <div className="portfolio">
        {data.projects.map((project) => (
          <div className="project__img" key={project._id}>
            <Link
              key={project._id}
              to={`/PortfolioLee/portfolio/${project._id}`}
              className="portfolio__item"
            >
              <img
                src={`https://chrisalee.github.io/PortfolioLee${project.images[0]}`}
                alt={project.name}
                className="portfolio__image"
                loading="lazy"
              />
              <div className="img--overlay">
                <p>{project.name}</p>
                <span>(click to see more)</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
