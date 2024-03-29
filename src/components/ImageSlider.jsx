import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const ImageSlider = () => {
  const { id } = useParams();
  const project = data.projects.find((x) => x._id === id);

  const handleClick = (e) => {
    let src = e.target.getAttribute("src");
    document.querySelector(".thumb .big-image img").src = src;
  };

  return (
    <div className="thumb">
      <div className="big-image">
        <img
          src={`https://chrisalee.github.io/PortfolioLee${project.images[0]}?raw=true`}
          alt=""
        />
      </div>
      <div className="small-images">
        {project.images.map((image, index) => (
          <img
            src={`https://chrisalee.github.io/PortfolioLee${image}?raw=true`}
            alt=""
            key={index}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
