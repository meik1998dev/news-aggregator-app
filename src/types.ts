export interface NewsItem {
  source: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string | null;
  publishedAt: string;
}

export interface NewsApiArticle {
  source: { name: string };
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface NYTApiArticle {
  title: string;
  abstract: string;
  url: string;
  multimedia: Array<{ url: string }> | null;
  published_date: string;
}

export interface NYTApiArticle {
  webTitle: string;
  webUrl: string;
  multimedia: Array<{ url: string }> | null;
  webPublicationDate: string;
  sectionId: string;
  sectionName: string;
  fields: {
    thumbnail: string;
  };
}
