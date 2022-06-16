import { Grid } from "@mui/material";
import React from "react";
import { data } from "../../data/Data";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";
const FeaturedJobs = () => {
  return (
    <div>
<h3 className="featured-title">
  <span className="color-change">Featured </span>Job Circulars
</h3>
      <Grid container>
      {data.map((feature) => (
        <Grid item md={3} xs={12}>
          <div style={{margin:'20px'}}>
            <FeaturedCard
            id={feature.id}
            jobType={feature.jobType}
            coLocation={feature.location}
              jobTitle={feature.jobTitle}
              image={feature.coIcon}
              coName={feature.coName}
              jobDesc={feature.jobDesc}
              salary={feature.salaray}
            />
          </div>
        </Grid>
      ))}
      </Grid>
    </div>
  );
};

export default FeaturedJobs;
