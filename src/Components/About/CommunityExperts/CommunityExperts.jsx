import React from "react";
import "./CommunityExperts.css";
import profile1 from "./../../../Images/profile1.jpg";
import profile2 from "./../../../Images/profile2.jpg";
import profile3 from "./../../../Images/profile3.jpg";
import profile4 from "./../../../Images/profile4.jpg";

const CommunityExperts = () => {
  return (
    <section className="experts ">
      <h1>Community Experts</h1>
      <div className="experts-items ">
        <div className="experts-card">
          <div className="experts-img">
            <img src={profile1} alt="" />
          </div>
          <h4>Farhan Shiekh</h4>
          <p>Web-instructor (Owner)</p>
        </div>
        <div className="experts-card">
          <div className="experts-img">
            <img src={profile2} alt="" />
          </div>
          <h4>Mimi Thian</h4>
          <p>Web-instructor</p>
        </div>
        <div className="experts-card">
          <div className="experts-img">
            <img src={profile3} alt="" />
          </div>
          <h4>Csaba Balazs</h4>
          <p>Co-Founder</p>
        </div>
        <div className="experts-card">
          <div className="experts-img">
            <img src={profile4} alt="" />
          </div>
          <h4>Kal Visuals</h4>
          <p>Team Leader</p>
        </div>
      </div>
    </section>
  );
};

export default CommunityExperts;
