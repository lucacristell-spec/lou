import Link from "next/link";
import {
  getAllArticles,
  getFeaturedArticles,
  getAllCategories,
  getCurrentGlossary,
} from "@/lib/sanity.fetch";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import QuoteBanner from "@/components/QuoteBanner";
import WeeklyGlossary from "@/components/WeeklyGlossary";
import Newsletter from "@/components/Newsletter";

export default async function HomePage() {
  const [featured, articles, categories, glossary] = await Promise.all([
    getFeaturedArticles(),
    getAllArticles(),
    getAllCategories(),
    getCurrentGlossary(),
  ]);

  // Articles not in the featured set, for the grid
  const featuredIds = new Set(featured.map((a: any) => a._id));
  const gridArticles = articles.filter((a: any) => !featuredIds.has(a._id));

  return (
    <>
      {/* Hero */}
      <HeroSection featured={featured} />

      {/* Latest Features */}
      <div className="flex items-center gap-5 px-10 pt-11 pb-5 animate-fade-in">
        <h2 className="font-display text-sm font-bold tracking-widest uppercase whitespace-nowrap">
          Latest Features
        </h2>
        <div className="flex-1 h-px bg-ink/10" />
        <span className="font-mono text-[9px] text-slate tracking-wider whitespace-nowrap">
          March 2026
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 px-10 pb-12 animate-fade-in animate-fade-in-d2">
        {gridArticles.slice(0, 8).map((article: any, i: number) => (
          <ArticleCard key={article._id} article={article} index={i} />
        ))}
      </div>

      {/* Quote */}
      <QuoteBanner />

      {/* Weekly Glossary */}
      {glossary && <WeeklyGlossary glossary={glossary} />}

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
