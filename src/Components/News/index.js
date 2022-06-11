import React, { useCallback, useEffect, useState } from "react";
import { fetchFiltersAPI, fetchNewsAPI } from "src/Api";
import Filters from "./Filters";
import Cards from "./Cards";
import { Container } from "@mui/material";

const News = () => {
  const [filters, setFilters] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [news, setNews] = useState([]);
  const [activeFilter, setActiveFilter] = useState({ id: 0, name: "All news" });

  const fetchFilters = useCallback(async () => {
    const { data } = await fetchFiltersAPI();
    const { data: news } = await fetchNewsAPI();
    setFilters([{ id: 0, name: "All news" }, ...data.newsCategory]);
    setNews(news.News);
  }, []);

  useEffect(() => {
    fetchFilters();
  }, [fetchFilters]);

  const handleChangeActiveFilter = (filter) => {
    setActiveFilter(filter);
  };

  const handleChangeShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Container maxWidth={false}>
      <p className="top-news">Top News</p>
      <Filters
        filters={filters}
        activeFilter={activeFilter}
        handleChangeActiveFilter={handleChangeActiveFilter}
      />
      <Cards
        news={news}
        filters={filters}
        showMore={showMore}
        activeFilter={activeFilter}
        handleChangeShowMore={handleChangeShowMore}
      />
    </Container>
  );
};

export default News;
