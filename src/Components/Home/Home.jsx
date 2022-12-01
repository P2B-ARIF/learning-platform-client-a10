import React from "react";
import Learner from "../About/Learner/Learner";
import Featured from "../Course/Featured/Featured";
import Subjects from "../Course/Subjects/Subjects";
import CoursesHighlight from "../Shared/CoursesHighlight/CoursesHighlight";
import Footer from "../Shared/Footer/Footer";
import Hero from "./Hero/Hero";
import "./Home.css";
import LearnNewSkills from "./LearnNewSkills/LearnNewSkills";
import CommunityExperts from "./../About/CommunityExperts/CommunityExperts";
import NextStep from "./NextStep/NextStep";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <div className="course-items">
        <CoursesHighlight />
      </div>
      <br />

      <div>
        <Featured />
      </div>
      <div>
        <LearnNewSkills />
      </div>
      <div>
        <Subjects />
      </div>
      <div>
        <Learner />
      </div>
      <div>
        <CommunityExperts />
      </div>
      <div>
        <NextStep />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
