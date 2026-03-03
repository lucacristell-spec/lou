import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="flex justify-between items-center px-10 py-2.5 border-b border-ink/10 font-mono text-[10px] tracking-wider uppercase text-slate">
        <span>Issue No. 01 — March 2026</span>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-accent transition-colors">
            Subscribe
          </Link>
          <Link href="/" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
      </div>

      {/* Masthead */}
      <Link href="/" className="block text-center py-10 px-10 group">
        <div className="font-mono text-[9px] tracking-[0.35em] uppercase text-slate mb-3">
          A Digital Magazine
        </div>
        <h1 className="font-display font-black text-masthead text-ink group-hover:tracking-wide transition-all duration-400">
          LOU<span className="text-accent">.</span>
        </h1>
        <div className="font-display italic text-[15px] text-slate mt-3.5">
          AI, Fashion, Food & Lifestyle
        </div>
      </Link>

      {/* Nav */}
      <NavBar />
    </header>
  );
}
