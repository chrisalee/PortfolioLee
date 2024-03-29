import React from "react";

const AboutMe2 = () => {
  return (
    <div>
      <section className="myEducation" id="myEducation" name="myEducation">
        <h2 className="section__title section__title--about">My Education</h2>
        <p className="section__subtitle section__subtitle--about">
            Full-Stack Developer located in Chicago, IL.
        </p>
        <div className="myEducation__body">
          <p>
            I studied Software Development at the Coding Dojo in Chicago, IL.
            This program has taught me how to learn with hands-on training, and
            building real world projects.
          </p>
          <p>
            Intensive 18 week coding boot camp where I spent over 1200 hours of
            coding coursework learning Web Fundamentals: HTML, CSS and
            JavaScript and then four full stacks: Python/Django, C# /.NET, MEAN, and
            MERN as well utilizing different frameworks and technologies.
          </p>
        </div>
        <img src={"https://chrisalee.github.io/PortfolioLee/assets/ProfilePic2.jpg"} alt="vert-pic" className="myEducation__image" loading='lazy' />
      </section>
    </div>
  );
};

export default AboutMe2;
