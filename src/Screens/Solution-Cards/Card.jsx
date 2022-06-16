import React from "react";
import "./Card.css";
const Card = ({title,desc,icon}) => {
  

  return (
    <div>
     
        <div className="card-container">
          <p className="icon">{icon}</p>
          <div className="job-details">
            <h1 className="card-title">{title}</h1>
            <p className="card-desc"> {desc}</p>
          </div>
        </div>
    </div>
  );
};

export default Card;
