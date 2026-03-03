import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-10 py-9 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] tracking-wider uppercase text-slate mt-auto">
      <span>© 2026 The Lucid. All rights reserved.</span>
      <div className="flex gap-5">
        <a href="#" className="hover:text-accent transition-colors">Instagram</a>
        <a href="#" className="hover:text-accent transition-colors">X / Twitter</a>
        <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-accent transition-colors">RSS</a>
      </div>
    </footer>
  );
}
