import { useRef } from "react";
import { NewsItemSkeleton } from "./NewsItemSkeleton";
import useFetchAllNews from "@/hooks/useFetchAllNews";
import { useObserver } from "@/hooks/useObserver";
import { NewsList } from "./NewsList";

export const NewsListWrapper = () => {
  const { isLoading, isLastPage } = useFetchAllNews();

  const loader = useRef(null);
  const shouldLoadMore = useObserver(loader, isLastPage, isLoading);

  return (
    <>
      <NewsList isLoading={isLoading} />

      <div className="grid py-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
        {isLoading && [...Array(12)].map((_, index) => <NewsItemSkeleton key={index} />)}
      </div>

      {shouldLoadMore && <div id="loader" ref={loader} />}
    </>
  );
};
