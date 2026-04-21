export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  publishedAt: string;
  category: string;
  body?: string; // Markdown / portable text (will be replaced by Sanity PortableText later)
};
