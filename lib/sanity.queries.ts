import { groq } from "next-sanity";

// ─── ARTICLES ───

export const allArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    "category": category->{_id, name, slug, color},
    "author": author->{name, image},
    mainImage,
    gradient
  }
`;

export const featuredArticlesQuery = groq`
  *[_type == "article" && featured == true] | order(publishedAt desc)[0...4] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    "category": category->{_id, name, slug, color},
    "author": author->{name, image},
    mainImage,
    gradient
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    readTime,
    featured,
    "category": category->{_id, name, slug, color},
    "author": author->{name, image, bio},
    mainImage,
    gradient,
    "related": *[_type == "article" && category._ref == ^.category._ref && _id != ^._id] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      readTime,
      "category": category->{_id, name, slug, color},
      mainImage,
      gradient
    }
  }
`;

export const articlesByCategoryQuery = groq`
  *[_type == "article" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "category": category->{_id, name, slug, color},
    "author": author->{name, image},
    mainImage,
    gradient
  }
`;

// ─── CATEGORIES ───

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(order asc) {
    _id,
    name,
    slug,
    color,
    description
  }
`;

export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    color,
    description
  }
`;

// ─── MUST READS ───

export const mustReadsByCategoryQuery = groq`
  *[_type == "mustRead" && category->slug.current == $categorySlug] | order(order asc) {
    _id,
    title,
    source,
    type,
    complex,
    summary,
    url,
    "category": category->{_id, name, slug, color}
  }
`;

// ─── GLOSSARY ───

export const currentGlossaryQuery = groq`
  *[_type == "glossary"] | order(weekStart desc)[0] {
    _id,
    weekStart,
    weekEnd,
    "terms": terms[] {
      term,
      definition,
      "category": category->{_id, name, slug, color}
    }
  }
`;
