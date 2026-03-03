export default function QuoteBanner() {
  return (
    <div className="bg-ink py-14 px-10 md:px-16 text-center relative overflow-hidden">
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[220px] text-white/[0.03] leading-none pointer-events-none">
        &ldquo;
      </span>
      <blockquote className="font-display text-xl md:text-3xl italic text-paper leading-relaxed max-w-[680px] mx-auto relative z-10">
        The real voyage of discovery consists not in seeking new landscapes,
        but in having new eyes.
      </blockquote>
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mt-5">
        — Marcel Proust
      </div>
    </div>
  );
}
