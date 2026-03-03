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
          Lou goes where the story is. Not the press-release version — the real one. The back room, the border market, the WhatsApp group that moves eight figures in commodities before breakfast. Lou has a nose for where power actually lives, and it is almost never where it claims to be. It lives in informal agreements between men who do not use email. It lives in the restaurant booking that happens three days before the policy announcement. It lives in the pattern, not the headline.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          The tools are sophisticated. The places are not. Lou has sat in rooms with sovereign wealth fund managers in the afternoon and eaten grilled pork on a plastic stool at midnight with the person who delivered it to them. Both conversations were more honest than anything that appeared in the financial press. Lou considers this a method.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          Lou eats at the plastic-stool spot where the chefs eat after service, and also at the kind of restaurant where the bill arrives in a leather folder and the sommelier does not introduce himself. Lou has eaten things that required translation, things that required a motorbike, and things that required a signed liability waiver. Lou considers all of them research. Lou does not distinguish between a Michelin star and a hand-painted sign. The criterion is the same: is there something true happening here?
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          The wardrobe is second-hand because Lou understands that the history of a garment is part of its meaning. The watch is new and shiny because Lou also understands desire, and does not pretend otherwise. The flight is economy when the journey is the point and business when the arrival is. Lou does not perform austerity. Lou does not perform luxury. Lou wears what fits the moment and has opinions about both the vintage market in Osaka and the runway in Paris, and these opinions are not contradictory.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          Lou follows the tribal deal and the billion-dollar one with equal attention, because they are often the same deal described in different currencies. A handshake in a mountain village and a term sheet in a glass tower operate by the same logic: trust, leverage, reputation. Lou has covered both. Lou has been the only person in the room who understood that they were the same room.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          The body is a tool. Lou understands this without being obsessive about it. Lou can hold a headstand for longer than is strictly necessary. Lou runs before cities wake up, in the hours when a place reveals itself without the performance of being observed. Lou knows the particular silence of a Bangkok street at five in the morning, the quality of light in a Milanese courtyard before the offices open, the smell of a Seoul market before the vendors have arranged themselves for the day. These are the details that do not appear in any briefing document and are the only details that matter.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          At 2am in the wrong bar, Lou has been known to settle an argument with a Muay Thai move that nobody saw coming. This is not a metaphor. Lou trains. Lou understands that the capacity for controlled violence is not incompatible with the practice of stillness — that these are, in fact, the same practice approached from different ends. Lou meditates on this afterward. Lou does not apologise.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "40px",
        }}>
          Lou has strong opinions about fabric, geopolitics, fermentation, conflict, architecture, the long-term consequences of monetary policy, and the precise moment when a trend becomes a signal and a signal becomes a fact. These opinions are formed by experience rather than reading about experience. Lou reads extensively and trusts almost nothing read without corroboration from someone who was in the room.
        </p>

        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.85,
          color: "#c8bfaa",
          marginBottom: "80px",
        }}>
          Lou Magazine is what Lou finds. It arrives when it arrives. It covers what matters — technology reshaping power, capital moving in the dark, fashion as a living language, food as a map of culture and desire, conflict as a consequence of everything that preceded it. The categories are artificial. Everything is connected. Lou follows the thread wherever it goes, without prejudice about where that turns out to be. Sometimes it goes to a gallery opening. Sometimes it goes to a border crossing at three in the morning. Lou prepares for both.
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
