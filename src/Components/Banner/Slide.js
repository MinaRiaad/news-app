import React from "react";

const Slide = ({ slide, index }) => {
  return (
    <div className="slide-container">
      <div className="slide-container-left">
        <div className="title-container">
          <p className="title" style={{ color: `#${slide.colorCode}` }}>
            {slide.category}
          </p>
        </div>
        <div className="main-paragraph-container">
          <p className="main-paragraph">{slide.title}</p>
        </div>
        <div className="sub-paragraph-container">
          <p className="sub-paragraph">{slide.brief}</p>
        </div>
        <div className="find-container">
          <button className="find-more-button">Find out more</button>
          <img
            className="play-demo-button"
            src="/images/play-demo.jpg"
            alt="play-demo"
          />
        </div>
      </div>
      <div className="slide-container-right">
        <img
          src={`/images/slide-${index}.jpg`}
          alt={`slide-${index}`}
          className="hero"
        />
        <img
          src={`/images/decore-${index}.jpg`}
          alt={`decore-${index}`}
          className="art"
        />
      </div>
    </div>
  );
};

export default Slide;
