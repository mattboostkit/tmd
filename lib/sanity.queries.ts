import { groq } from 'next-sanity';

export const BLOG_POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    coverImage,
    categories[]->{
      _id,
      title,
      "slug": slug.current
    },
    author->{
      _id,
      name,
      jobTitle,
      image
    }
  }
`;

export const BLOG_POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    coverImage,
    body,
    categories[]->{
      _id,
      title,
      "slug": slug.current
    },
    author->{
      _id,
      name,
      jobTitle,
      image
    },
    seoTitle,
    seoDescription
  }
`;

export const BLOG_POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)]{ "slug": slug.current }
`;
