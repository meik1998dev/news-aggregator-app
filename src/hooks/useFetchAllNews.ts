import { useEffect, useState } from "react";
import { fetchNewsAPI, fetchGuardiansNews, fetchNYT } from "../services/newsService";
import { useFilters } from "@/contexts/filterContext";
import { useNewsItems } from "@/contexts/newsListContext";

const useFetchAllNews = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const { filters } = useFilters();
  const { newsItems, setNewsItems } = useNewsItems();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const responses = await Promise.all([
          fetchGuardiansNews(filters),
          fetchNewsAPI(filters),
          fetchNYT(filters),
        ]);

        const result = responses.flat();

        setNewsItems([...newsItems, ...result]);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return { isLoading, error };
};

export default useFetchAllNews;
