import useFetchAllNews from "@/hooks/useFetchAllNews";
import { NewsItem } from "./NewsItem";
import { useFilters } from "@/contexts/filterContext";
import { useEffect, useMemo, useRef } from "react";
import { useNewsItems } from "@/contexts/newsListContext";
import { NewsItemSkeleton } from "./NewsItemSkeleton";

export const NewsList = () => {
  const { isLoading, isLastPage } = useFetchAllNews();
  const { filters, setFilters } = useFilters();
  const loader = useRef(null);
  const { newsItems } = useNewsItems();

  const handleObserver = (entities: IntersectionObserverEntry[]): void => {
    const target = entities[0];
    if (target.isIntersecting) {
      setFilters({ ...filters, page: filters.page + 1 });
    }
  };

  const filteredNews = useMemo(() => {
    if (!filters.source) return newsItems;
    return newsItems.filter((item) => item.source.toLowerCase() === filters.source);
  }, [newsItems, filters.source]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [isLastPage, isLoading]);

  return (
    <>
      <div className="grid py-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
        {filteredNews.map((news, index) => (
          <NewsItem key={index} data={news} />
        ))}

        {isLoading && (
          <>
            {[...Array(10)].map((_, index) => (
              <NewsItemSkeleton key={index} />
            ))}
          </>
        )}
      </div>

      {!filters.source && !isLastPage && !isLoading && <div id="loader" ref={loader} />}
    </>
  );
};
