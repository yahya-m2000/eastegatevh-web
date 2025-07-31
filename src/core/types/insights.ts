export interface InsightArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: number; // in minutes
  category: 'market' | 'tech' | 'strategy' | 'regulatory' | 'trends';
  tags: string[];
  featured: boolean;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  image?: {
    url: string;
    alt: string;
  };
}