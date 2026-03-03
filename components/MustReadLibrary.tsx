"use client";

import { useState } from "react";

interface MustReadLibraryProps {
  items: any[];
  category: any;
}

const badgeStyles: Record<string, string> = {
  Paper: "bg-[#2d3a8c]/10 text-[#2d3a8c]",
  Report: "bg-[#b8964e]/15 text-[#8a6d2e]",
  Book: "bg-[#4a7c59]/12 text-[#3a6648]",
};

export default function MustReadLibrary({ items, category }: MustReadLibraryProps) {
  const [openSummary, setOpenSummary] = useState<string | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <div className="px-10 py-10 border-t border-ink/10 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-9 h-9 rounded flex items-center justify-center text-base flex-shrink-0"
          style={{
            background: (category.color || "#c2402a") + "18",
            color: category.color,
          }}
        >
          📚
        </div>
        <h3 className="font-display text-xl font-bold">Must Read</h3>
        <p className="text-[13px] text-slate italic ml-auto">
          {items.length} essential reads
        </p>
      </div>

      {/* List */}
      <div className="flex flex-col">
        {items.map((item: any) => (
          <div key={item._id} className="py-4 border-b border-ink/10 last:border-b-0">
            <div className="flex items-start gap-4">
              {/* Type Badge */}
              <span
                className={`font-mono text-[8px] tracking-wider uppercase px-2 py-1 rounded flex-shrink-0 mt-0.5 ${
                  badgeStyles[item.type] || badgeStyles.Book
                }`}
              >
                {item.type}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="font-display text-base font-semibold leading-snug mb-0.5">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </div>
                <div className="text-xs text-slate">{item.source}</div>

                {/* Summary Panel */}
                {item.complex && openSummary === item._id && (
                  <div className="mt-3 p-4 bg-cream border-l-[3px] border-accent rounded-r animate-expand">
                    <div className="font-mono text-[9px] tracking-widest uppercase text-accent mb-2 flex items-center gap-1.5">
                      <span>✦</span> Summary
                    </div>
                    <p className="text-sm leading-relaxed text-[#3a3a3a]">
                      {item.summary}
                    </p>
                  </div>
                )}
              </div>

              {/* Summary Button */}
              {item.complex && (
                <button
                  onClick={() =>
                    setOpenSummary(openSummary === item._id ? null : item._id)
                  }
                  className={`font-mono text-[9px] tracking-wider uppercase px-3 py-1.5 border-[1.5px] rounded flex-shrink-0 mt-0.5 transition-all cursor-pointer ${
                    openSummary === item._id
                      ? "bg-accent text-white border-accent"
                      : "bg-transparent text-accent border-accent hover:bg-accent hover:text-white"
                  }`}
                >
                  {openSummary === item._id ? "Close" : "Summary"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
