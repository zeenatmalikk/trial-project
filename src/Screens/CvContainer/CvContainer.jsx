import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import React from "react";
import "./CvContainer.css";
const CvContainer = () => {
  return (
    <div style={{ marginTop: "5%" }}>
      <Container >
        <Grid container className="content-cv">
          <Grid item md={5} xs={12} className='cv-bgimg'>
            {/* <img src="https://freepngimg.com/thumb/man/22654-6-man-thumb.png" className="img-cv" alt="" /> */}
          </Grid>
          <Grid item md={1}/>
          <Grid item md={6} xs={12} className="cv-content-container">
            <div>
              <h2 className="cv-title">
                Get matched the most valuable jobs just drop your cv at chakri
              </h2>
              <p className="cv-desc">
                In the subject line of your email, write your name, description
                in the subject line of your email, write your name,
                descriptionin the subject line of your email, write your name,
                description
              </p>
              <button className="upload-cv">Upload CV</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CvContainer;
