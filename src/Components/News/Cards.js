import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const Cards = ({
  news,
  filters,
  showMore,
  activeFilter,
  handleChangeShowMore,
}) => {
  return (
    <div className="cards-container">
      <Grid container justifyContent="center" spacing={2}>
        {news.map((item) => (
          <Fragment key={item.id}>
            {(`${activeFilter.id}` === item.categoryID ||
              activeFilter.id === 0) &&
              (item.showOnHomepage === "yes" || showMore) && (
                <Grid item xs={12} md={6} lg={4}>
                  <div className="card-container">
                    <div className="card">
                      <img src={item.urlToImage} alt={item.title} />
                      <div className="card-footer">
                        <div className="title-container">
                          <Typography className="title">
                            {item.title}
                          </Typography>
                        </div>
                        <div className="date-container">
                          <CalendarTodayIcon color="primary" />
                          <Typography className="date">
                            {item.publishedDate}
                          </Typography>
                        </div>
                        <div className="badge-container">
                          <div className="badge">
                            {
                              filters.filter(
                                (e) => `${e.id}` === item.categoryID
                              )[0].name
                            }
                          </div>
                          <div>
                            <FavoriteBorderIcon color="primary" />
                            <ShareIcon color="primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              )}
          </Fragment>
        ))}
      </Grid>
      <button className="show-more-button" onClick={handleChangeShowMore}>
        {`${!showMore ? "Show more" : "Show less"}`}
      </button>
    </div>
  );
};

export default Cards;
