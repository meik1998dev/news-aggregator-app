export interface NewsItem {
  source: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string | null;
  publishedAt: string;
  category ?: string;

}

export interface NewsApiArticle {
  source: { name: string };
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface GuardiansApiArticle {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: {
    thumbnail: string;
    trailText ?: string;
  };
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export interface NYTApiArticle {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section: string;
  print_page: string;
  source: string;
  multimedia: Array<{ url: string }> | null;
  headline: { main: string };
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name: string;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}
