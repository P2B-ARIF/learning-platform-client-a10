import React, { useEffect } from "react";
import { useState } from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SubjectsList.css";

const SubjectsList = () => {
  const [subLists, setSubLists] = useState([]);

  useEffect(() => {
    fetch(" https://zerone-school-server.vercel.app/subjectLists")
      .then((res) => res.json())
      .then((data) => setSubLists(data));
  }, []);

  // console.log(subLists[0].id);

  const icon = [
    <FaBootstrap />,
    <FaCss3 />,
    <FaHtml5 />,
    <FaJs />,
    <FaGithub />,
    <FaNodeJs />,
    <FaReact />,
  ];

  return (
    <div className="sub-lists">
      <h3>Subjects List </h3>
      {subLists.map((subName) => (
        <Link key={subName.id} className="btn btn-outline-primary" to={`/course/${subName.id}`}>
          {icon[subName.id.slice(1, 2) - 1]} {subName.name}
        </Link>
      ))}
    </div>
  );
};

export default SubjectsList;
