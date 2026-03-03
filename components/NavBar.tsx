"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "AI & Tech", slug: "ai-tech" },
  { name: "Business", slug: "business" },
  { name: "Fashion", slug: "fashion" },
  { name: "Food", slug: "food" },
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Wars", slug: "wars" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-8 px-10 py-4 border-t border-ink/10 border-b-2 border-b-ink font-mono text-[10px] tracking-[0.14em] uppercase flex-wrap">
      <Link
        href="/"
        className={`nav-underline hover:text-accent transition-colors ${
          pathname === "/" ? "active text-accent" : ""
        }`}
      >
        All
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/category/${cat.slug}`}
          className={`nav-underline hover:text-accent transition-colors ${
            pathname === `/category/${cat.slug}` ? "active text-accent" : ""
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </nav>
  );
}
