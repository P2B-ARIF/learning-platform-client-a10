import React, { useEffect, useState } from "react";
import "./Subjects.css";

const Subjects = () => {
  const [enrollData, SetEnrollData] = useState([]);

  useEffect(() => {
    fetch(" https://zerone-school-server.vercel.app/enrollDetails")
      .then((res) => res.json())
      .then((data) => SetEnrollData(data));
  }, []);

  return (
    <div className="sub-title container">
      <h1>Explore top subjects</h1>
      <div className="sub-items">
        {enrollData.map((data) => (
          <div key={enrollData.id} className="sub-card">
            <img src={data.img} alt="" />
            <h3>{data.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
