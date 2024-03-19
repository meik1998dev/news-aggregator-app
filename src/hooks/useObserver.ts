import { useEffect } from "react";
import { useFilters } from "@/contexts/filterContext";

export const useObserver = (
  loader: React.MutableRefObject<HTMLDivElement | null>,
  isLastPage: boolean,
  isLoading: boolean
) => {
  const { filters, setFilters } = useFilters();
  const shouldLoadMore = !isLastPage && !isLoading && !filters.source && !filters.startDate;

  useEffect(() => {
    const handleObserver = (entities: IntersectionObserverEntry[]): void => {
      const target = entities[0];
      if (target.isIntersecting) {
        setFilters({ ...filters, page: filters.page + 1 });
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadMore, filters, setFilters, loader]);

  return shouldLoadMore;
};
