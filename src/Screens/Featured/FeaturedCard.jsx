import React from "react";
import "./Featured.css";
const FeaturedCard = ({
  image,
  coName,
  jobTitle,
  jobType,
  jobDesc,
  salary,
  coLocation,
  id
}) => {
  return (
    <div>
      <div className="featured-card-container" key={id}>
        <div className="company-name">
          <img src={image} alt="" className="co-icon" />
         <div>
         <p className="co-name">{coName}</p>
          <p className="location">{coLocation}</p>
         </div>
        </div>
        <div className="f-job-dets">
          <h4 className="job-title">{jobTitle}</h4>
          <p className="job-type">{jobType}</p>
          <p className="job-desc">{jobDesc}</p>
        </div>
        <div className="salary-flex">
          <p className="salary-amnt">${salary}</p>
          <button className="apply-btn">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
