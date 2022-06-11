import React from "react";
import Transformation from "src/assets/images/transformation.jpg";
import Crafty from "src/assets/images/crafty-mind.jpg";
import Dynamics from "src/assets/images/dynamics.jpg";
import Envision from "src/assets/images/envision.jpg";
import Services from "src/assets/images/services.jpg";

const Highlight = () => {
  return (
    <div className="highlight-container">
      <div className="container-one">
        <div className="paragraph-one-container">
          <p>Transformation</p>
        </div>
        <img src={Transformation} alt=""></img>
      </div>
      <div className="container-two">
        <div className="paragraph-one-container">
          <p className="paragraph-one">Envision</p>
          <div>
            <p className="read-more">Read more</p>
          </div>
        </div>
        <div className="paragraph-two-container">
          <p className="paragraph-two">Dynamics 365</p>
        </div>
        <img src={Envision} className="image-one" alt="" />
        <img src={Dynamics} className="image-two" alt="" />
      </div>
      <div className="container-three">
        <div className="paragraph-one-container">Crafty Mind</div>
        <div className="paragraph-two-container">Services</div>
        <img src={Crafty} className="image-one" alt="" />
        <img src={Services} className="image-two" alt="" />
        <div className="complete" />
      </div>
      <div className="content-container">
        <div className="main-paragraph-container">
          <p className="main-paragraph">We Deliver Digital Productivity</p>
        </div>
        <div className="sub-paragraph-container">
          <p className="sub-paragraph">
            We craft technology solutions that digitally bond and transform the
            productivity of our customers and their citizens, workers, consumers
            and partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
