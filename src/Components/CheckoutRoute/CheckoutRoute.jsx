import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CheckoutRoute.css";

const CheckoutRoute = () => {
  const detail = useLoaderData();
  const { id, name, title, details, img } = detail;
  console.log(details);
  return (
    <section>
      <div className="check-head">
        <div className="check-head-text">
          <h2>Our Premium Route</h2>
          <p>Home / Details</p>
        </div>
      </div>
      <div className="d-items container">
        <div className="d-card">
          <div className="d-img">
            <img src={img} alt="" />
          </div>
          <br/>
          <div>
            <h5 className="fw-bold">ID: {id}</h5>
            <h4>{name}</h4>
          </div>
          <h4>{title}</h4>
          <p>{details}</p>
        </div>
      </div>
    </section>
  );
};

export default CheckoutRoute;
