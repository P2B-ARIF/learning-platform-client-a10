import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import "./Topics.css";

const Topics = ({ img, detail }) => {
  const { title, details } = detail;
const [open , setOpen] = useState(true)


  return (
    <div className="topic">
      <div>
        <div className="topic-img">
          <img src={img} alt="" />
          <button onClick={()=>setOpen(!open)} className="btn btn-outline-success btn-topic ">
            <FaEye />
          </button>
        </div>
       {
        open ?  <h4 className="text-center">{title}</h4> : ''
       }
      </div>
      {
        !open ? <div className="topic-text">
        <h4 className="text-left">#{title}</h4>
        {details}
      </div> : ''
      }
    </div>
  );
};

export default Topics;
