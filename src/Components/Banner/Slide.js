import React from "react";
import SlideOne from "src/assets/images/slide-0.jpg";
import SlideTwo from "src/assets/images/slide-1.jpg";
import SlideThree from "src/assets/images/slide-2.jpg";
import DecorOne from "src/assets/images/decore-0.jpg";
import DecorTwo from "src/assets/images/decore-1.jpg";
import DecorThree from "src/assets/images/decore-0.jpg";
import Demo from "src/assets/images/play-demo.jpg";

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
            src={Demo}
            alt="play-demo"
          />
        </div>
      </div>
      <div className="slide-container-right">
        {index === 0 && (
          <img src={SlideOne} alt={`slide-${index}`} className="hero" />
        )}
        {index === 1 && (
          <img src={SlideTwo} alt={`slide-${index}`} className="hero" />
        )}
        {index === 2 && (
          <img src={SlideThree} alt={`slide-${index}`} className="hero" />
        )}
        {index === 0 && (
          <img src={DecorOne} alt={`decore-${index}`} className="art" />
        )}
        {index === 1 && (
          <img src={DecorTwo} alt={`decore-${index}`} className="art" />
        )}
        {index === 2 && (
          <img src={DecorThree} alt={`decore-${index}`} className="art" />
        )}
      </div>
    </div>
  );
};

export default Slide;
