import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon, data }) => {
  const [read, setRead] = useState(true);
  const [text, setText] = useState("");
  const { name, title, img, details, price } = data;
// console.log(data.id);
  useEffect(() => {
    if (details.length > 100) {
      setText(details.slice(0, 100)+"...");
    }
  }, []);

  return (
    <div className="featured-card">
      <div className="featured-img">
        <img src={img} alt="" />
      </div>

      <div className="featured-details">
        <h4>
          {icon} {name}
        </h4>
        <h5>{title} </h5>
        <p>{read ?  text : details+" "}<small><Link onClick={()=>setRead(!read)}>{read ? 'Read More' : "Less More"}</Link></small> </p>
        <div className="d-flex align-items-center justify-content-between py-2">
          <span className="price">Course Fee: {price}</span>
        </div>
        <Link id="enroll-btn" className=" btn btn-outline-success" to={`/featureCard/details/${data.id}`}>Details here</Link>
      </div>
    </div>
  );
};

export default FeatureCard;
