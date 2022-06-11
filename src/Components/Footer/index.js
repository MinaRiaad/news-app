import { Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inner-container">
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4}>
            <div className="left-container">
              <img src="/images/link-logo.jpg" className="logo" alt="logo" />
              <div className="sub-text-container">
                <p>
                  We make technology produce productive, adaptable and
                  sustainable business experiences.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="center-container">
              <div className="container-one">
                <p className="title">Company</p>
                <p className="sub-title">About</p>
                <p className="sub-title">Careers</p>
                <p className="sub-title">Mobile</p>
              </div>
              <div className="container-one">
                <p className="title">Contact</p>
                <p className="sub-title">Help/FAQ</p>
                <p className="sub-title">Press</p>
                <p className="sub-title">Affilates</p>
              </div>
              <div className="container-one">
                <p>
                  <p className="title">Media</p>
                  <p className="sub-title">News</p>
                  <p className="sub-title">Photos</p>
                  <p className="sub-title">Video</p>
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <img src="/images/social.png" className="logo" alt="logo" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
