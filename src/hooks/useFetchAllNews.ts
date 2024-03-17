import { useEffect, useState } from "react";
import { fetchNewsAPI, fetchGuardiansNews, fetchNYT } from "../services/newsService";
import { NewsItem } from "@/types";

const useFetchAllNews = () => {
  const [data, setData] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([fetchGuardiansNews(), fetchNewsAPI(), fetchNYT()]);

        setData(responses.flat());
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetchAllNews;
