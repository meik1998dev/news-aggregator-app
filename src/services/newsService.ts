import { NewsItem, NewsApiArticle, NYTApiArticle } from "@/types";
import axios from "axios";

const API_KEYS = {
  NEWS_API: import.meta.env.VITE_NEWSAPI_KEY,
  NYT_API: import.meta.env.VITE_NYT_KEY,
  GUARD_KEY: import.meta.env.VITE_GUARD_KEY,
};

const fetchNewsAPI = async (): Promise<NewsItem[]> => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEYS.NEWS_API}`
    );

    return response.data.articles.map((article: NewsApiArticle) => ({
      source: article.source.name,
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

const fetchGuardiansNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/search?show-fields=thumbnail&api-key=${API_KEYS.GUARD_KEY}`
    );

    return response.data.response.results.map((article: NYTApiArticle) => ({
      source: article.sectionName,
      title: article.title,
      url: article.url,
      imageUrl: article.fields?.thumbnail || null,
      publishedAt: article.webPublicationDate,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

const fetchNYT = async (): Promise<NewsItem[]> => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${API_KEYS.NYT_API}`
    );

    return response.data.response.docs.map((article: NYTApiArticle) => ({
      source: "The New York Times",
      title: article.title,
      description: article.abstract,
      url: article.url,
      imageUrl: article.multimedia?.[0]?.url || null,
      publishedAt: article.published_date,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { fetchNewsAPI, fetchGuardiansNews, fetchNYT };
