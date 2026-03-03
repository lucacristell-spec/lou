"use client";

import { useState } from "react";

interface WeeklyGlossaryProps {
  glossary: {
    weekStart: string;
    weekEnd: string;
    terms: Array<{
      term: string;
      definition: string;
      category: { name: string; slug: { current: string }; color: string };
    }>;
  };
}

export default function WeeklyGlossary({ glossary }: WeeklyGlossaryProps) {
  const [filter, setFilter] = useState("all");

  if (!glossary?.terms) return null;

  const filtered =
    filter === "all"
      ? glossary.terms
      : glossary.terms.filter((t) => t.category?.slug?.current === filter);

  // Get unique categories from terms
  const termCategories = Array.from(
    new Map(
      glossary.terms
        .filter((t) => t.category)
        .map((t) => [t.category.slug.current, t.category])
    ).values()
  );

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <div className="px-10 py-12 border-t border-ink/10 border-b border-b-ink/10 bg-cream animate-fade-in">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-7 flex-wrap gap-3">
        <h2 className="font-display text-2xl font-bold">Weekly Glossary</h2>
        <span className="font-mono text-[10px] tracking-wider uppercase text-slate">
          {formatDate(glossary.weekStart)} – {formatDate(glossary.weekEnd)}
        </span>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-5 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className="font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded border cursor-pointer transition-all"
          style={{
            background: filter === "all" ? "#0a0a0a" : "transparent",
            color: filter === "all" ? "#f5f0e8" : "#0a0a0a",
            borderColor: "#0a0a0a",
          }}
        >
          All
        </button>
        {termCategories.map((cat: any) => (
          <button
            key={cat.slug.current}
            onClick={() => setFilter(cat.slug.current)}
            className="font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded border cursor-pointer transition-all"
            style={{
              background: filter === cat.slug.current ? cat.color : "transparent",
              color: filter === cat.slug.current ? "white" : cat.color,
              borderColor: cat.color,
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="bg-paper p-5 rounded border border-ink/10 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-display text-lg font-bold">{item.term}</span>
              {item.category && (
                <span
                  className="font-mono text-[8px] tracking-widest uppercase px-2 py-0.5 rounded"
                  style={{
                    background: item.category.color + "15",
                    color: item.category.color,
                  }}
                >
                  {item.category.name}
                </span>
              )}
            </div>
            <p className="text-[13.5px] leading-relaxed text-[#3a3a3a]">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
