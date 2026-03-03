export const revalidate = 0;

export const metadata = {
  title: "About — Lou",
  description: "Lou is everywhere. Lou is no one. Lou finds the story.",
};

export default function AboutPage() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f5f0e8" }}>

      {/* Hero */}
      <section style={{
        maxWidth: "820px",
        margin: "0 auto",
        padding: "120px 24px 80px",
        borderBottom: "1px solid #1a1a1a",
      }}>
        <p style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#666",
          marginBottom: "40px",
        }}>
          About
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(52px, 8vw, 96px)",
          fontWeight: 300,
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
          color: "#f5f0e8",
          margin: "0 0 48px",
        }}>
          Lou
        </h1>
        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "clamp(18px, 2.5vw, 24px)",
          lineHeight: 1.6,
          color: "#a09880",
          maxWidth: "600px",
          fontStyle: "italic",
        }}>
          Nobody knows exactly where Lou is. That&apos;s the point.
        </p>
      </section>

      {/* Body */}
      <section style={{
        maxWidth: "680px",
        margin: "0 auto",
        padding: "80px 24px 80px",
      }}>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          Lou goes where the story is. Not the press-release version — the real one. The back room, the border market, the WhatsApp group that moves eight figures in commodities before breakfast. Lou has a nose for where power actually lives, and it is almost never where it claims to be.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          The tools are sophisticated. The places are not. Lou eats at the plastic-stool spot where the chefs eat after service, and also at the kind of restaurant where the bill arrives in a leather folder and nobody asks what&apos;s in it. Lou follows the tribal deal and the billion-dollar one with equal attention, because they are often the same deal described in different currencies.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          The wardrobe is second-hand. The watch is not. The flight is economy when necessary, first when it isn&apos;t. Lou has strong opinions about fabric, geopolitics, fermentation, and the correct way to throw a teep — opinions formed by experience rather than reading about experience.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          Lou can hold a headstand for longer than is strictly necessary, and at 2am in the wrong bar has been known to settle an argument with a Muay Thai move that nobody saw coming. Lou meditates on this afterward. Lou does not apologise.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "80px",
        }}>
          Lou Magazine is what Lou finds. It arrives when it arrives. It covers what matters — technology reshaping power, capital moving in the dark, fashion as a language, food as a map, conflict as a consequence. Everything is connected. Lou follows the thread.
        </p>

        {/* Divider */}
        <div style={{ width: "40px", height: "1px", background: "#333", marginBottom: "80px" }} />

        {/* Manifesto lines */}
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
            fontSize: "clamp(22px, 3vw, 30px)",
            fontWeight: 300,
            lineHeight: 1.3,
            color: i % 2 === 0 ? "#f5f0e8" : "#555",
            marginBottom: "16px",
            letterSpacing: "-0.01em",
          }}>
            {line}
          </p>
        ))}

        {/* Closing */}
        <div style={{ marginTop: "80px", paddingTop: "48px", borderTop: "1px solid #1a1a1a" }}>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#444",
          }}>
            Lou Magazine — Independent Editorial
          </p>
        </div>

      </section>
    </main>
  );
}
