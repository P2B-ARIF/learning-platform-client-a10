import React from "react";
import "./LearnNewSkills.css";
import skills from "./../../../Images/skills.jpg";
import increase from "./../../../Images/increase.png";
import arrow from "./../../../Images/right-arrow.png";

const LearnNewSkills = () => {
  return (
    <div className="learn-skills container">
      <div className="learn-text">
        <div className="learn-img">
          <img src={increase} alt="" />
        </div>
        <h1>Learn new skills only with top educators</h1>
        <p>
          The automated process all your website tasks. Discover tools and techniques to engate
          effectively with vulnerable children and young people.
        </p>
        <div className="quotes">
          <div className="quote">
            <img src={arrow} alt="" />
            <p>Techniques to engage effectively with vulnerable children and young people.</p>
          </div>
          <div className="quote">
            <img src={arrow} alt="" />
            <p>Join millions of people from around the world learning together.</p>
          </div>
          <div className="quote">
            <img src={arrow} alt="" />
            <p>
              Join millions of people from around the world learning together. Online learning is as
              easy and natural.
            </p>
          </div>
        </div>
      </div>
      <div className="skill-img">
        <img src={skills} alt="" />
      </div>
    </div>
  );
};

export default LearnNewSkills;
