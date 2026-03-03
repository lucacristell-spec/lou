import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getArticleBySlug, getAllArticles } from "@/lib/sanity.fetch";
import { urlFor } from "@/lib/sanity.client";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";

// Generate static paths for all articles
export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((a: any) => ({ slug: a.slug.current }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: "Not Found" };

  return {
    title: `${article.title} — The Lucid`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

// Portable Text custom components for article body
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            className="w-full rounded"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-slate mt-3 font-mono">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const category = article.category;
  const bgStyle = article.mainImage
    ? {
        backgroundImage: `url(${urlFor(article.mainImage).width(1600).url()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { background: article.gradient || "linear-gradient(135deg, #1a1a2e, #0f3460)" };

  return (
    <article>
      {/* Hero */}
      <div className="relative min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={bgStyle} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
        <div className="relative z-[2] p-10 pb-12 max-w-3xl">
          <div
            className="font-mono text-[9px] tracking-[0.2em] uppercase flex items-center gap-2 mb-4"
            style={{ color: category?.color || "#e8654f" }}
          >
            <span
              className="inline-block w-[18px] h-px"
              style={{ background: category?.color || "#e8654f" }}
            />
            {category?.name}
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-base text-white/65 leading-relaxed max-w-xl">
            {article.excerpt}
          </p>
          <div className="font-mono text-[10px] text-white/40 tracking-wider uppercase mt-5 flex gap-4 items-center">
            <span>{article.author?.name || "The Lucid Editorial"}</span>
            <span className="w-[3px] h-[3px] bg-white/30 rounded-full" />
            <span>
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="w-[3px] h-[3px] bg-white/30 rounded-full" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="article-body max-w-[680px] mx-auto px-6 py-12">
        {article.body && (
          <PortableText
            value={article.body}
            components={portableTextComponents}
          />
        )}
      </div>

      {/* Divider */}
      <div className="w-10 h-0.5 bg-accent mx-auto my-10" />

      {/* Navigation */}
      <div className="max-w-[680px] mx-auto px-6 flex flex-wrap justify-between gap-4 border-t border-ink/10 pt-8">
        <Link
          href="/"
          className="font-mono text-[10px] tracking-widest uppercase border-2 border-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-all"
        >
          ← Back to Home
        </Link>
        {category && (
          <Link
            href={`/category/${category.slug.current}`}
            className="font-mono text-[10px] tracking-widest uppercase border-2 border-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-all"
          >
            More in {category.name} →
          </Link>
        )}
      </div>

      {/* Related Articles */}
      {article.related?.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 mt-12">
          <div className="flex items-center gap-5 pb-5">
            <h2 className="font-display text-sm font-bold tracking-widest uppercase whitespace-nowrap">
              Keep Reading
            </h2>
            <div className="flex-1 h-px bg-ink/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {article.related.map((rel: any, i: number) => (
              <ArticleCard key={rel._id} article={rel} index={i} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <Newsletter />
      </div>
    </article>
  );
}
