import React from "react";

const Highlight = () => {
  return (
    <div className="highlight-container">
      <div className="container-one">
        <div className="paragraph-one-container">
          <p>Transformation</p>
        </div>
        <img src="/images/transformation.jpg" alt=""></img>
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
        <img src="/images/envision.jpg" className="image-one" alt="" />
        <img src="/images/dynamics.jpg" className="image-two" alt="" />
      </div>
      <div className="container-three">
        <div className="paragraph-one-container">Crafty Mind</div>
        <div className="paragraph-two-container">Services</div>
        <img src="/images/crafty-mind.jpg" className="image-one" alt="" />
        <img src="/images/services.jpg" className="image-two" alt="" />
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
