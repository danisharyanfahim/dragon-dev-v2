export interface ArticleCardProps {
  title: string;
  titleImage: any;
  overview: string;
  currentSlug: string;
  dateCreated: string;
  categories: Category[];
  id: string;
}

export interface ArticlePageProps {
  title: string;
  titleImage: any; // Consider defining a more specific type for titleImage (e.g., string | Image)
  currentSlug: string;
  dateCreated: string;
  lastUpdated: string;
  categories: Category[];
  content: (TextBlock | CodeContainerProps)[]; // Array of either TextBlock or CodeContainer
}

export interface TextBlock {
  type: "text";
  text: string;
  style: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "normal";
  listItem: "bullet" | "number" | null;
  marks: Marks[];
  link: string | null;
}

export interface CodeContainerProps {
  type: "code";
  fileName: string;
  language: string;
  code: string;
}

export interface SearchParamProps {
  title?: string;
  category?: string;
  writtenAt?: string;
}

export interface Category {
  text: string;
  relevance: number;
  format: "capitalize" | "camelCase";
}

export type Marks =
  | "underline"
  | "strike-through"
  | "em"
  | "strong"
  | "code"
  | "highlight"
  | null;
