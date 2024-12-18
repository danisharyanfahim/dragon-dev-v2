export interface ArticleCardProps {
  title: string;
  titleImage: any;
  overview: string;
  currentSlug: string;
  dateCreated: string;
  categories: [{ text: string; relevance: number }];
}
