import { useFilters } from "@/contexts/filterContext";
import { useNewsItems } from "@/contexts/newsListContext";
import React, { useMemo } from "react";
import { NewsItem } from "./NewsItem";

export const NewsList = () => {
  const { filters } = useFilters();
  const { newsItems } = useNewsItems();

  const filteredNews = useMemo(() => {
    if (!filters.source) return newsItems;
    return newsItems.filter((item) => item.source.toLowerCase() === filters.source);
  }, [newsItems, filters.source]);

  return (
    <>
      {filteredNews.map((news, index) => (
        <NewsItem key={index} data={news} />
      ))}
    </>
  );
};
