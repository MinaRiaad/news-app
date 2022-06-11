import { LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { fetchBannersAPI } from "src/Api";
import NavBar from "../NavBar";
import Slide from "./Slide";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  const fetchFilters = useCallback(async () => {
    const { data } = await fetchBannersAPI();
    setBanners(data.slides);
  }, []);

  useEffect(() => {
    fetchFilters();
  }, [fetchFilters]);

  if (banners.length === 0)
    return (
      <Box width="100%">
        <LinearProgress />
      </Box>
    );

  return (
    <div className="banner-container">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-slide responsive-carousel"
        data-ride="carousel"
      >
        <NavBar />
        <div className="carousel-inner">
          {banners.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <Slide slide={slide} index={index} />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
