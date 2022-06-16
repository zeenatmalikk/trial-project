import React from "react";
import { Grid } from "@mui/material";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <Grid container className="footer-container">
        <Grid item md={2} xs={6} className="footer-links">
        <img
            height="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png"
            alt=""
          />
        </Grid>
        <Grid item md={2} xs={6} className="footer-links">
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
        </Grid>
        <Grid item md={2} xs={6} className="footer-links">
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
        </Grid>
        <Grid item md={2} xs={6} className="footer-links">
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
        </Grid>
        <Grid item md={2} xs={6} className="footer-links">
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
          <div className="link-container">
            <a href="/">About</a>
          </div>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Footer;
