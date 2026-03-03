import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { featuredArticles } from "@/lib/articleData";
import { urlFor } from "@/lib/sanity.client";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";

// Don't cache - always render fresh
export const revalidate = 0;

// Generate static paths for all articles
export async function generateStaticParams() {
  return featuredArticles.map((a: any) => ({ slug: a.slug.current }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const articleData = featuredArticles.find((a: any) => a.slug.current === params.slug);
  if (!articleData) return { title: "Not Found" };

  return {
    title: `${articleData.title} — Lou Magazine`,
    description: articleData.excerpt,
    openGraph: {
      title: articleData.title,
      description: articleData.excerpt,
      type: "article",
      publishedTime: articleData.publishedAt,
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
  const articleData = featuredArticles.find((a: any) => a.slug.current === params.slug);
  if (!articleData) notFound();

  const category = articleData.category;
  
  // Handle both heroImage (hardcoded) and mainImage (Sanity)
  let bgStyle: any;
  if (articleData.heroImage) {
    bgStyle = {
      backgroundImage: `url('${articleData.heroImage}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#333",
    };
  } else if ((articleData as any).mainImage) {
    const imageUrl = typeof (articleData as any).mainImage === "string" 
      ? (articleData as any).mainImage 
      : urlFor((articleData as any).mainImage).width(1600).url();
    bgStyle = {
      backgroundImage: `url('${imageUrl}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#333",
    };
  } else {
    bgStyle = { background: (articleData as any).gradient || "linear-gradient(135deg, #1a1a2e, #0f3460)" };
  }

  return (
    <section className="article-page">
      {/* Hero */}
      <div className="relative min-h-[380px] flex items-end overflow-hidden" style={{ background: (articleData as any).gradient || "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}>
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
            {articleData.title}
          </h1>
          <p className="text-base text-white/65 leading-relaxed max-w-xl">
            {articleData.excerpt}
          </p>
          <div className="font-mono text-[10px] text-white/40 tracking-wider uppercase mt-5 flex gap-4 items-center">
            <span>{articleData.author?.name || "Lou Editorial"}</span>
            <span className="w-[3px] h-[3px] bg-white/30 rounded-full" />
            <span>
              {new Date(articleData.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="w-[3px] h-[3px] bg-white/30 rounded-full" />
            <span>{articleData.readTime} min</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="article-body max-w-[680px] mx-auto px-6 py-12">
        {articleData.body && typeof articleData.body === "string" ? (
          <div>
            {articleData.body.split("\n\n").map((paragraph: string, idx: number) => {
              // Check if it's a header (surrounded by **)
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3 key={idx} style={{ fontSize: "1.125rem", fontWeight: "bold", color: "#000", marginBottom: "1rem", marginTop: "1.5rem" }}>
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              
              // Regular paragraph
              return (
                <p key={idx} style={{ fontSize: "1rem", lineHeight: "1.6", color: "#64748b", marginBottom: "1.5rem" }}>
                  {idx === 0 ? (
                    <>
                      <span style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#f97316", float: "left", marginRight: "0.5rem", lineHeight: "1" }}>
                        {paragraph[0]}
                      </span>
                      {paragraph.slice(1)}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              );
            })}
          </div>
        ) : articleData.body && Array.isArray(articleData.body) ? (
          <PortableText
            value={articleData.body}
            components={portableTextComponents}
          />
        ) : null}
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

      <div className="mt-12">
        <Newsletter />
      </div>
    </section>
  );
}
