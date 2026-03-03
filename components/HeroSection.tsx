import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

interface HeroSectionProps {
  featured: any[];
}

export default function HeroSection({ featured }: HeroSectionProps) {
  if (!featured || featured.length === 0) return null;

  const main = featured[0];
  const sidebar = featured.slice(1, 3); // Only 2 sidebar items for faster load
  const mainCat = main.category;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] border-b border-ink/10">
      {/* Main Feature */}
      <Link
        href={`/article/${main.slug.current}`}
        className="relative overflow-hidden min-h-[400px] group"
      >
        {main.mainImage ? (
          <Image
            src={urlFor(main.mainImage).width(800).url()}
            alt={main.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : main.heroImage ? (
          <img
            src={main.heroImage}
            alt={main.title}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div className="absolute inset-0" style={{ background: main.gradient || "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="relative z-10 p-8 flex flex-col justify-end h-full">
          <div className="font-mono text-[9px] tracking-widest uppercase mb-3" style={{ color: mainCat?.color }}>
            {mainCat?.name}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            {main.title}
          </h2>
          <p className="text-sm text-white/70 line-clamp-2">{main.excerpt}</p>
        </div>
      </Link>

      {/* Sidebar */}
      <div className="flex flex-col">
        {sidebar.map((article: any) => (
          <Link
            key={article._id}
            href={`/article/${article.slug.current}`}
            className="flex-1 p-6 border-l border-ink/10 border-b border-ink/10 last:border-b-0 hover:bg-cream transition-colors"
          >
            <div className="font-mono text-[9px] tracking-widest uppercase mb-2 text-accent">
              {article.category?.name}
            </div>
            <h3 className="font-display text-lg font-bold mb-2 line-clamp-2 hover:text-accent">
              {article.title}
            </h3>
            <p className="text-sm text-slate line-clamp-2">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
