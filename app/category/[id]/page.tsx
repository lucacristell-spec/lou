import { notFound } from "next/navigation";
import { featuredArticles } from "@/lib/articleData";
import {
  getCategoryBySlug,
  getArticlesByCategory,
  getMustReadsByCategory,
  getAllCategories,
} from "@/lib/sanity.fetch";
import ArticleCard from "@/components/ArticleCard";
import MustReadLibrary from "@/components/MustReadLibrary";
import Newsletter from "@/components/Newsletter";

// Don't cache - always render fresh
export const revalidate = 0;

// Generate static paths
export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((c: any) => ({ id: c.slug.current }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  try {
    const category = await getCategoryBySlug(params.id);
    if (!category) return { title: "Category Not Found" };

    return {
      title: `${category.name} — Lou Magazine`,
      description: category.description || `All ${category.name} stories on Lou Magazine.`,
    };
  } catch (error) {
    return { title: "Category Not Found" };
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  // Use hardcoded articles by category
  const categoryMap: Record<string, string> = {
    "ai-tech": "cat-ai",
    "business": "cat-business",
    "fashion": "cat-fashion",
    "food": "cat-food",
  };
  let articles;
  if (categoryMap[params.id]) {
    const catId = categoryMap[params.id];
    articles = featuredArticles.filter((a: any) => a.category?._id === catId);
  } else {
    articles = await getArticlesByCategory(params.id);
  }

  const hardcodedCategories: Record<string, any> = {
    "ai-tech":   { name: "AI & Tech",  color: "#2563eb", description: "Stories in ai & tech" },
    "business":  { name: "Business",   color: "#b45309", description: "Stories in business" },
    "fashion":   { name: "Fashion",    color: "#be185d", description: "Stories in fashion" },
    "food":      { name: "Food",       color: "#16a34a", description: "Stories in food" },
    "lifestyle": { name: "Lifestyle",  color: "#7c3aed", description: "Stories in lifestyle" },
    "news":      { name: "News",       color: "#dc2626", description: "Stories in news" },
  };

  const [sanityCategory, mustReads] = await Promise.all([
    getCategoryBySlug(params.id),
    getMustReadsByCategory(params.id),
  ]);

  const category = sanityCategory || hardcodedCategories[params.id];
  if (!category) notFound();

  return (
    <div className="animate-fade-in">
      {/* Category Hero */}
      <div className="py-12 px-10 text-center border-b border-ink/10">
        <h1
          className="font-display text-4xl md:text-6xl font-black leading-none mb-2.5"
          style={{ color: category.color }}
        >
          {category.name}
        </h1>
        {category.description && (
          <p className="text-sm text-slate font-display italic">
            {category.description}
          </p>
        )}
        {!category.description && (
          <p className="text-sm text-slate font-display italic">
            Stories in {category.name.toLowerCase()}
          </p>
        )}
      </div>

      {/* Articles Grid */}
      {articles.length === 0 ? (
        <div className="text-center py-16 text-slate italic">
          More stories coming soon.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 p-10">
          {articles.map((article: any, i: number) => (
            <ArticleCard key={article._id} article={article} index={i} />
          ))}
        </div>
      )}

      {/* Must Read Library */}
      {mustReads?.length > 0 && (
        <MustReadLibrary items={mustReads} category={category} />
      )}

      <Newsletter />
    </div>
  );
}
