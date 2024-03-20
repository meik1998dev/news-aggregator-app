import { NewsItem } from "./NewsItem";
import { useFilteredItems } from "@/hooks/useFilteredItems";
import { NoResults } from "./NoResults";

export const NewsList = ({ isLoading }: { isLoading: boolean }) => {
  const { filteredNews } = useFilteredItems();

  if (filteredNews.length === 0 && !isLoading) {
    return <NoResults />;
  }

  return (
    <div className="grid py-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
      {filteredNews.map((news, index) => (
        <NewsItem key={index} data={news} />
      ))}
    </div>
  );
};
