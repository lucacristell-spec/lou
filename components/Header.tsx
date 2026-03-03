"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="flex justify-between items-center px-10 py-2.5 border-b border-ink/10 font-mono text-[10px] tracking-wider uppercase text-slate">
        <span>Issue No. 01 — March 2026</span>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-accent transition-colors">
            Subscribe
          </Link>
          <button
            onClick={() => setShowAbout(!showAbout)}
            className="hover:text-accent transition-colors cursor-pointer bg-none border-none p-0"
          >
            About
          </button>
          <Link href="/" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
      </div>

      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto" onClick={() => setShowAbout(false)}>
          <div className="max-w-2xl mx-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div style={{ background: "#0a0a0a", color: "#f5f0e8", padding: "60px 40px", borderRadius: "8px" }}>
              {/* Close button */}
              <button
                onClick={() => setShowAbout(false)}
                className="float-right text-slate hover:text-accent text-2xl border-none bg-none cursor-pointer"
              >
                ✕
              </button>

              {/* Content */}
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "56px",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "#f5f0e8",
                marginBottom: "40px",
                marginTop: 0,
              }}>
                Lou
              </h2>

              <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "18px",
                lineHeight: 1.85,
                color: "#c8bfaa",
                marginBottom: "24px",
              }}>
                Lou goes where the story is. Not the press-release version — the real one. The back room, the border market, the WhatsApp group that moves eight figures in commodities before breakfast. Lou has a nose for where power actually lives, and it is almost never where it claims to be.
              </p>

              <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "18px",
                lineHeight: 1.85,
                color: "#c8bfaa",
                marginBottom: "24px",
              }}>
                The tools are sophisticated. The places are not. Lou eats at the plastic-stool spot where the chefs eat after service, and also at the kind of restaurant where the bill arrives in a leather folder and nobody asks what&apos;s in it. Lou follows the tribal deal and the billion-dollar one with equal attention, because they are often the same deal described in different currencies.
              </p>

              <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "18px",
                lineHeight: 1.85,
                color: "#c8bfaa",
                marginBottom: "24px",
              }}>
                The wardrobe is second-hand. The watch is not. The flight is economy when necessary, first when it isn&apos;t. Lou has strong opinions about fabric, geopolitics, fermentation, and the correct way to throw a teep — opinions formed by experience rather than reading about experience.
              </p>

              <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "18px",
                lineHeight: 1.85,
                color: "#c8bfaa",
                marginBottom: "24px",
              }}>
                Lou can hold a headstand for longer than is strictly necessary, and at 2am in the wrong bar has been known to settle an argument with a Muay Thai move that nobody saw coming. Lou meditates on this afterward. Lou does not apologise.
              </p>

              <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "18px",
                lineHeight: 1.85,
                color: "#c8bfaa",
                marginBottom: "40px",
              }}>
                Lou Magazine is what Lou finds. It arrives when it arrives. It covers what matters — technology reshaping power, capital moving in the dark, fashion as a language, food as a map, conflict as a consequence. Everything is connected. Lou follows the thread.
              </p>

              {/* Manifesto */}
              <div style={{ marginBottom: "40px" }}>
                {[
                  "Research in the dirtiest corners.",
                  "Eat everywhere.",
                  "Dress as you like.",
                  "Stay curious.",
                  "Know when to be still.",
                  "Know when to move.",
                ].map((line, i) => (
                  <p key={i} style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: 1.3,
                    color: i % 2 === 0 ? "#f5f0e8" : "#555",
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}>
                    {line}
                  </p>
                ))}
              </div>

              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#444",
              }}>
                Lou Magazine — Independent Editorial
              </p>
            </div>
          </div>
        </div>
      )}

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
