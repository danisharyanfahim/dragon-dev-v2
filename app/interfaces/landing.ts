export interface TechCardProps {
  title: string;
  icon: any;
  description: string;
  features: string[];
  category: string;
  understanding: Understanding;
  url: string;
  id: string;
}

export interface TechProps {
  title: string;
  icon: any;
  description: string;
  features: string[];
  category: string;
  url: string | { current: string; _type: "slug" };
  id: string;
  understanding: Understanding;
}

export interface TransformedTechProps extends TechProps {
  url: {
    current: string;
    _type: "slug";
  };
}

export interface LangProps {
  title: string;
  icon: any;
  description: string;
  usedFor: string[];
  yearCreated: number;
  id: string;
  understanding: Understanding;
}

export type Understanding = "solid" | "familiar";

export interface SlideData {
  title: string;
  description: string;
  points: string[]; // or any type depending on your structure
}
