import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const detail = useLoaderData();
  const { id, name, title, details, img } = detail;
  // console.log(detail);
  return (
    <section>
      <div className="details-head">
        <div className="details-head-text">
          <h1>Our Details</h1>
          <p>Home / Details</p>
        </div>
      </div>
      <div className="d-items container">
        <div className="d-card">
          <div className="d-top">
            <div className="d-img">
              <img src={img} alt="" />
            </div>
            <div>
              <h2 className="fw-bold">#{id}</h2>
              <div className="premium-btn">
                <button className="btn btn-outline-success mx-3">Download</button>
                <Link to={`/premiumRoute/${id}`} className="btn btn-danger ms-3 mt-3">Premium Access</Link>
              </div>
              <h3>{name}</h3>
            </div>
          </div>
          <h4>{title}</h4>
          <p>{details}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
