import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <section className="error-head">
      <div className="error container">
        <div className="error-text">
          <h1>Whooops!</h1>
          <h3>Sorry, the page you are looking for doesn't exist</h3>
          <Link className="error-btn" to={"/"}>
            Back To Home
          </Link>
        </div>
        <div className="error-img">
          <img src={require("../../Images/404.png")} alt="pic" />
        </div>
      </div>
    </section>
  );
};

export default Error;
