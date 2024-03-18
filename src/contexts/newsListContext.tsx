import { NewsItem } from "@/types";
import { createContext, useContext, useState } from "react";

type NewsContextType = {
  newsItems: NewsItem[];
  setNewsItems: React.Dispatch<React.SetStateAction<NewsItem[]>>;
};

const NewsContext = createContext<NewsContextType>({
  newsItems: [],
  setNewsItems: () => {},
});

export function NewsProvider({ children }: { children: React.ReactNode }) {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  const value = {
    newsItems,
    setNewsItems,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export function useNewsItems() {
  return useContext(NewsContext);
}
