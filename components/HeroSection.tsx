import Link from "next/link";
import { urlFor } from "@/lib/sanity.client";

interface HeroSectionProps {
  featured: any[];
}

export default function HeroSection({ featured }: HeroSectionProps) {
  if (!featured || featured.length === 0) return null;

  const main = featured[0];
  const sidebar = featured.slice(1, 4);
  const mainCat = main.category;

  const mainBgStyle = main.mainImage
    ? {
        backgroundImage: `url(${urlFor(main.mainImage).width(1600).url()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        background:
          main.gradient ||
          "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
      };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] border-b border-ink/10 animate-fade-in animate-fade-in-d3">
      {/* Main Feature */}
      <Link
        href={`/article/${main.slug.current}`}
        className="relative overflow-hidden min-h-[480px] group"
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
          style={mainBgStyle}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent z-[1]" />
        <div className="relative z-[2] p-10 flex flex-col justify-end h-full">
          <div
            className="font-mono text-[9px] tracking-[0.2em] uppercase flex items-center gap-2 mb-3.5"
            style={{ color: mainCat?.color || "#e8654f" }}
          >
            <span
              className="inline-block w-[18px] h-px"
              style={{ background: mainCat?.color || "#e8654f" }}
            />
            {mainCat?.name}
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight mb-3">
            {main.title}
          </h2>
          <p className="text-sm text-white/60 leading-relaxed max-w-[460px]">
            {main.excerpt}
          </p>
          <div className="font-mono text-[9px] text-white/40 tracking-wider uppercase mt-4">
            {main.readTime} ·{" "}
            {new Date(main.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </Link>

      {/* Sidebar */}
      <div className="flex flex-col lg:flex-col sm:flex-row">
        {sidebar.map((article: any) => {
          const cat = article.category;
          return (
            <Link
              key={article._id}
              href={`/article/${article.slug.current}`}
              className="flex-1 px-8 py-7 border-l border-ink/10 border-b border-b-ink/10 last:border-b-0 hover:bg-cream transition-colors group"
            >
              <div
                className="font-mono text-[9px] tracking-[0.18em] uppercase mb-2"
                style={{ color: cat?.color }}
              >
                {cat?.name}
              </div>
              <h3 className="font-display text-lg font-bold leading-snug mb-1.5 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-[13px] text-slate leading-relaxed">
                {article.excerpt?.slice(0, 80)}...
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
