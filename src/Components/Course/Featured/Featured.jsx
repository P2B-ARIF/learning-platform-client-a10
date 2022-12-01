import React from "react";
import "./Featured.css";
import { useState } from "react";
import { useEffect } from "react";
import FeatureCard from "./FeatureCard";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub } from "react-icons/fa";

const Featured = () => {
  const [enrollData, SetEnrollData] = useState([]);

  useEffect(() => {
    fetch(" https://zerone-school-server.vercel.app/enrollDetails")
      .then((res) => res.json())
      .then((data) => SetEnrollData(data));
  }, []);

  const icons = [
    <FaHtml5 />,
    <FaCss3 />,
    <FaJs />,
    <FaReact />,
    <FaNodeJs />,
    <FaBootstrap />,
    <FaGithub />,
  ];

  // console.log(enrollData);

  return (
    <div className="featured container">
      <h1>Our featured courses</h1>
      <div className="featured-items">
        {enrollData.map((data) => (
          <FeatureCard key={data.id} icon={icons[data.id.slice(1, 2) - 1]} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
