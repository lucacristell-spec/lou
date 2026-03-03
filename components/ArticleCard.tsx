import Link from "next/link";
import { urlFor } from "@/lib/sanity.client";

interface ArticleCardProps {
  article: any;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  const cat = article.category;

  const bgStyle = article.mainImage
    ? {
        backgroundImage: `url(${urlFor(article.mainImage).width(600).height(800).url()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        background:
          article.gradient ||
          "linear-gradient(135deg, #2c1810, #6b4f3a)",
      };

  return (
    <Link
      href={`/article/${article.slug.current}`}
      className="group block"
    >
      <div className="w-full aspect-[3/4] rounded-sm overflow-hidden mb-3.5 relative">
        <div
          className="w-full h-full transition-transform duration-500 group-hover:scale-[1.06]"
          style={bgStyle}
        />
        <div className="absolute bottom-2.5 right-3 font-display text-6xl font-black text-white/10 leading-none">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      <div
        className="font-mono text-[9px] tracking-[0.18em] uppercase mb-1.5"
        style={{ color: cat?.color || "#c2402a" }}
      >
        {cat?.name}
      </div>
      <h3 className="font-display text-[17px] font-bold leading-snug mb-1.5 group-hover:text-accent transition-colors">
        {article.title}
      </h3>
      <p className="text-[13px] text-slate leading-relaxed">{article.excerpt}</p>
      <div className="font-mono text-[9px] text-light-slate tracking-wider uppercase mt-2.5">
        {article.readTime} ·{" "}
        {article.publishedAt &&
          new Date(article.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
      </div>
    </Link>
  );
}
