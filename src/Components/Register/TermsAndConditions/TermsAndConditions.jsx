import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <div className=" pt-5"></div>
      <div className=" pt-5"></div>
      <div className=" pt-5"></div>
      <div className="container pt-5">
        <h3>Here is our Terms And Conditions</h3>
        <p>
          Go back to Registration: <Link to="/register">Go Back</Link>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
