import React from "react";
import { Outlet } from "react-router-dom";
import './CourseRoute.css'
import Course from "../Components/Course/Course";
import SubjectsList from "../Components/Course/SubjectsList/SubjectsList";
import Featured from "../Components/Course/Featured/Featured";
import Subjects from "../Components/Course/Subjects/Subjects";
import CoursesHighlight from "../Components/Shared/CoursesHighlight/CoursesHighlight";
import Footer from "../Components/Shared/Footer/Footer";

const CourseRoute = () => {
  return (
    <div>
      <Course />
      <section className="subjects">
        <div className="sub-list">
          <SubjectsList />
        </div>
        <div className="sub-details">
          <Outlet />
        </div>
      </section>
      <Featured />
      <Subjects />
      <div className="py-5 mb-5">
        <CoursesHighlight />
      </div>
      <Footer />
    </div>
  );
};

export default CourseRoute;
