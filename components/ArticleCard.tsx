import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

interface ArticleCardProps {
  article: any;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const cat = article.category;

  return (
    <Link
      href={`/article/${article.slug.current}`}
      className="group flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden bg-cream mb-4">
        {article.mainImage ? (
          <Image
            src={urlFor(article.mainImage).width(400).url()}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : article.heroImage ? (
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                article.gradient || "linear-gradient(135deg, #ddd 0%, #ccc 100%)",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="font-mono text-[9px] tracking-widest uppercase mb-2" style={{ color: cat?.color }}>
          {cat?.name}
        </div>

        <h3 className="font-display text-lg font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {article.title}
        </h3>

        <p className="text-sm text-slate mb-3 line-clamp-2 flex-grow">{article.excerpt}</p>

        <div className="font-mono text-[9px] text-slate/60 tracking-wider">
          {article.readTime} min read
        </div>
      </div>
    </Link>
  );
}
