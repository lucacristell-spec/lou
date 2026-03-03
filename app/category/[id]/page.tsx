import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getArticlesByCategory,
  getMustReadsByCategory,
  getAllCategories,
} from "@/lib/sanity.fetch";
import ArticleCard from "@/components/ArticleCard";
import MustReadLibrary from "@/components/MustReadLibrary";
import Newsletter from "@/components/Newsletter";

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
  const [category, articles, mustReads] = await Promise.all([
    getCategoryBySlug(params.id),
    getArticlesByCategory(params.id),
    getMustReadsByCategory(params.id),
  ]);

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
