import { Container } from "@mui/system";
import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div style={{marginTop:'5%'}}>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="news-container">
          <h1 className="news-content">Never want to miss any <br/><span  className='color-change'>job news?</span> </h1>
          <div className="news-input">
            <input
              className="news-field"
              type="email"
              placeholder="enter email..."
            />
            <button className="email-btn">Send</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
