import React from "react";
import Subjects from "../Course/Subjects/Subjects";
import CoursesHighlight from "../Shared/CoursesHighlight/CoursesHighlight";
import "./About.css";
import CommunityExperts from "./CommunityExperts/CommunityExperts";
import Learner from "./Learner/Learner";
import Footer from "./../Shared/Footer/Footer";

const About = () => {
  return (
    <section>
      <div className="course-head">
        <div className="course-head-text">
          <h1>About us</h1>
          <p>Home / About</p>
        </div>
      </div>
      <div className="about-highlight">
        <CoursesHighlight />
      </div>

      <div className="learner">
        <Learner />
      </div>
      <div>
        <Subjects />
      </div>
      <div>
        <CommunityExperts />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default About;
