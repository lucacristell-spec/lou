import { client } from "./sanity.client";
import {
  allArticlesQuery,
  featuredArticlesQuery,
  articleBySlugQuery,
  articlesByCategoryQuery,
  allCategoriesQuery,
  categoryBySlugQuery,
  mustReadsByCategoryQuery,
  currentGlossaryQuery,
} from "./sanity.queries";

// ─── ARTICLES ───

export async function getAllArticles() {
  return client.fetch(allArticlesQuery, {}, { next: { revalidate: 60 } });
}

export async function getFeaturedArticles() {
  return client.fetch(featuredArticlesQuery, {}, { next: { revalidate: 60 } });
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    articleBySlugQuery,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getArticlesByCategory(categorySlug: string) {
  return client.fetch(
    articlesByCategoryQuery,
    { categorySlug },
    { next: { revalidate: 60 } }
  );
}

// ─── CATEGORIES ───

export async function getAllCategories() {
  return client.fetch(allCategoriesQuery, {}, { next: { revalidate: 300 } });
}

export async function getCategoryBySlug(slug: string) {
  return client.fetch(
    categoryBySlugQuery,
    { slug },
    { next: { revalidate: 300 } }
  );
}

// ─── MUST READS ───

export async function getMustReadsByCategory(categorySlug: string) {
  return client.fetch(
    mustReadsByCategoryQuery,
    { categorySlug },
    { next: { revalidate: 300 } }
  );
}

// ─── GLOSSARY ───

export async function getCurrentGlossary() {
  return client.fetch(currentGlossaryQuery, {}, { next: { revalidate: 60 } });
}
