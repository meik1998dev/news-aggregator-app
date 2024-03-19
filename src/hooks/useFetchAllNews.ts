import { useEffect, useState } from "react";
import { fetchNewsAPI, fetchGuardiansNews, fetchNYT } from "../services/newsService";
import { useFilters } from "@/contexts/filterContext";
import { useNewsItems } from "@/contexts/newsListContext";
import { useSourcesItems } from "@/contexts/sourcesContext";
import { NewsItem } from "@/types";
import { useCategoriesItems } from "@/contexts/categoriesContext";

const useFetchAllNews = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const { filters } = useFilters();
  const { keyword, page } = filters;

  const { sourcesItems, setSourcesItems } = useSourcesItems();
  const { categoriesItems, setCategoriesItems } = useCategoriesItems();
  const { newsItems, setNewsItems } = useNewsItems();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const responses = await Promise.all([
          fetchGuardiansNews({ keyword, page }),
          fetchNewsAPI({ keyword, page }),
          fetchNYT({ keyword, page }),
        ]);

        const result: NewsItem[] = [];
        const sourcesSet = sourcesItems;
        const categoriesSet = categoriesItems;

        responses.flat().forEach((item: NewsItem) => {
          sourcesSet.add(item.source.toLowerCase());
          item.category && categoriesSet.add(item.category.toLowerCase());
          result.push(item);
        });

        setIsLastPage(result.length < 20);
        setNewsItems([...newsItems, ...result]);
        setCategoriesItems(categoriesSet);
        setSourcesItems(sourcesSet);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [keyword, page]);

  return { isLoading, error, isLastPage };
};

export default useFetchAllNews;
