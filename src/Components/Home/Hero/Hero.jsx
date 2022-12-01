import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import hero3 from "./../../../Images/hero1.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import clock from "./../../../Images/alarm-clock.png";
// import teacher from "./../../../Images/online-lesson.png";
// import books from "./../../../Images/bookshelf.png";

const Hero = () => {
  const { open } = useContext(AuthContext);
  return (
    <section className="hero-sec">
      <div className={open ? "hero" : "hero heroBottom"}>
        <div className="platform">
          <h1>Online Learning platform</h1>
          <p>
            Build skills with courses, certificates, and degrees online from world-class
            universities and companies
          </p>
          <Link className="join-btn" to="register">
            Join For Free
          </Link>
        </div>
        <div className="platform-img">
          <img src={hero3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
