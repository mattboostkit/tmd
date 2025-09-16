import type { PortableTextBlock } from '@portabletext/types';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface BlogCategory {
  _id: string;
  title?: string;
  slug?: string;
}

export interface BlogAuthor {
  _id: string;
  name?: string;
  jobTitle?: string;
  image?: SanityImageSource;
}

export interface BlogPostPreview {
  _id: string;
  title?: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: SanityImageSource;
  categories?: BlogCategory[];
  author?: BlogAuthor | null;
}

export interface BlogPost extends BlogPostPreview {
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
}
