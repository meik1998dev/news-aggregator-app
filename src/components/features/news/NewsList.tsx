import { useFilters } from "@/contexts/filterContext";
import { useNewsItems } from "@/contexts/newsListContext";
import { useMemo } from "react";
import { NewsItem } from "./NewsItem";

export const NewsList = () => {
  const { filters } = useFilters();
  const { newsItems } = useNewsItems();

  const filteredNews = useMemo(() => {
    let arr = [...newsItems];

    if (filters.source) {
      arr = arr.filter((item) => item.source.toLowerCase() === filters.source);
    }

    if (filters.startDate) {
      arr = arr.filter((item) => item.publishedAt.split("T")[0] === filters.startDate);
    }

    if (filters.category) {
      arr = arr.filter((item) => item.category?.toLowerCase() === filters.category.toLowerCase());
    }

    return arr;
  }, [newsItems, filters.source, filters.startDate, filters.category]);

  return (
    <>
      {filteredNews.map((news, index) => (
        <NewsItem key={index} data={news} />
      ))}
    </>
  );
};
