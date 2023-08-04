import React from "react";

const Introduction = () => {
  return (
    <div>
      <section className="intro" id="intro" name="intro">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Christopher Lee</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Software Developer</p>
        <img src={"https://chrisalee.github.io/PortfolioLee/assets/SelfPortrait.PNG"} alt="self-portrait" className="intro__img" loading='lazy' />
      </section>
    </div>
  );
};

export default Introduction;
