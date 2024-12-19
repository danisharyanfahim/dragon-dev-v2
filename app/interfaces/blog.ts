export interface ArticleCardProps {
  title: string;
  titleImage: any;
  overview: string;
  currentSlug: string;
  dateCreated: string;
  categories: [Category];
}

export interface ArticlePageProps {
  title: string;
  titleImage: any;
  currentSlug: string;
  dateCreated: string;
  lastUpdated: string;
  categories: [Category];
  content: any;
}

export interface Category {
  text: string;
  relevance: number;
}

export interface CodeContainerProps {
  fileName: string;
  language: string;
  code: string;
}
