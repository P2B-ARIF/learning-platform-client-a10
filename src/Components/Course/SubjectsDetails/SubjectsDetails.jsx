import React from "react";
import { useLoaderData } from "react-router-dom";
import Topics from "../Topics/Topics";
import "./SubjectsDetails.css";

const SubjectsDetails = () => {
  const subjectDetails = useLoaderData();
  // console.log(subjectDetails);
  const {  name, img, details } = subjectDetails;
// console.log(details);
  return (
    <div className="subs-details">
      <h2>{name} Tutorial</h2>
      <div className="topic-head">
        {details.map((detail) => (
          <Topics key={detail.id} img={img} detail={detail} />
        ))}
      </div>
    </div>
  );
};

export default SubjectsDetails;
