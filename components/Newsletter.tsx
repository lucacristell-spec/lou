"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!email.includes("@")) return;

    // TODO: Connect to your newsletter provider API (Resend, Buttondown, Mailchimp)
    // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) });

    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 px-10 py-12 border-t border-ink/10 border-b border-b-ink/10">
      <div className="text-center sm:text-left">
        <h3 className="font-display text-[22px] font-bold">Stay Curious</h3>
        <p className="text-sm text-slate mt-1.5 max-w-[300px] leading-relaxed">
          The best stories, facts, and ideas — delivered to your inbox every week.
        </p>
      </div>
      {subscribed ? (
        <div className="font-display text-lg italic text-sage">
          Welcome aboard. ✓
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            className="px-4 py-3 font-body text-sm border-2 border-ink bg-transparent outline-none w-64 focus:border-accent transition-colors placeholder:text-[#aaa]"
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-3 font-mono text-[10px] tracking-widest uppercase bg-ink text-paper border-2 border-ink hover:bg-accent hover:border-accent transition-all cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
}
