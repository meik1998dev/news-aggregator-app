import { NewsApiArticle, NYTApiArticle, GuardiansApiArticle } from "@/types";
import axios from "axios";

const API_KEYS = {
  NEWS_API: import.meta.env.VITE_NEWSAPI_KEY,
  NYT_API: import.meta.env.VITE_NYT_KEY,
  GUARD_KEY: import.meta.env.VITE_GUARD_KEY,
};

const fetchNewsAPI = async ({ keyword = "", category = "", page = 1 }) => {
  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.set("country", "us");
  url.searchParams.set("q", keyword);
  url.searchParams.set("apiKey", API_KEYS.NEWS_API);
  url.searchParams.set("page", page.toString());

  try {
    const response = await axios.get(url.toString());

    return response.data.articles.map((article: NewsApiArticle) => ({
      source: article.source.name,
      category,
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

const fetchGuardiansNews = async ({ keyword = "", page = 1 }) => {
  const url = new URL("https://content.guardianapis.com/search");
  url.searchParams.set("show-fields", "thumbnail,trailText");
  keyword && url.searchParams.set("q", keyword);
  url.searchParams.set("api-key", API_KEYS.GUARD_KEY);
  url.searchParams.set("page", page.toString());

  try {
    const response = await axios.get(url.toString());

    return response.data.response.results.map((article: GuardiansApiArticle) => ({
      source: "Guardian",
      category: article.sectionName,
      title: article.webTitle,
      url: article.webUrl,
      imageUrl: article.fields?.thumbnail || null,
      publishedAt: article.webPublicationDate,
      description: article.fields?.trailText,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

const fetchNYT = async ({ keyword = "", page = 1 }) => {
  const url = new URL("https://api.nytimes.com/svc/search/v2/articlesearch.json");
  keyword && url.searchParams.set("q", keyword);
  url.searchParams.set("api-key", API_KEYS.NYT_API);
  url.searchParams.set("page", page.toString());

  try {
    const response = await axios.get(url.toString());

    return response.data.response.docs.map((article: NYTApiArticle) => ({
      source: "the new york times",
      category: article.news_desk,
      title: article.headline.main,
      description: article.abstract,
      url: article.web_url,
      imageUrl: `https://www.nytimes.com/${article.multimedia?.[0]?.url}`,
      publishedAt: article.pub_date,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { fetchNewsAPI, fetchGuardiansNews, fetchNYT };
