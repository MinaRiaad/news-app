import { Grid } from "@mui/material";
import React from "react";

const Filters = ({ filters, activeFilter, handleChangeActiveFilter }) => {
  return (
    <Grid container justifyContent="center" spacing={5}>
      {filters.map((filter) => (
        <Grid item xs={4} lg={1} key={filter.id}>
          <button
            key={filter.id}
            className={
              activeFilter.id === filter.id
                ? "btn btn-primary active-filter-button"
                : "btn btn-primary filter-button"
            }
            onClick={() => handleChangeActiveFilter(filter)}
          >
            {filter.name}
          </button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Filters;
