"use client";

import Link from "next/link";

const logos = [
  {
    num: 1,
    name: "Ice Chrome",
    element: (
      <h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
          fontWeight: 900,
          fontStyle: "italic",
          background: "linear-gradient(135deg, #ffffff 0%, #7dd3fc 40%, #0ea5e9 70%, #1d4ed8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "0.08em",
          filter: "drop-shadow(0 0 18px rgba(56,189,248,0.6)) drop-shadow(0 4px 24px rgba(14,165,233,0.4))",
        }}
      >
        CoolX
      </h1>
    ),
  },
  {
    num: 2,
    name: "Neon Glow",
    element: (
      <h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
          fontWeight: 800,
          color: "#00f5ff",
          letterSpacing: "0.06em",
          textShadow: "0 0 6px #00f5ff, 0 0 20px #00f5ff, 0 0 60px #06b6d4, 0 0 100px rgba(6,182,212,0.4)",
        }}
      >
        CoolX
      </h1>
    ),
  },
  {
    num: 3,
    name: "Frost Outline",
    element: (
      <h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "2px #7dd3fc",
          letterSpacing: "0.1em",
          filter: "drop-shadow(0 0 12px rgba(125,211,252,0.5))",
        }}
      >
        CoolX
      </h1>
    ),
  },
  {
    num: 4,
    name: "Split Gradient",
    element: (
      <h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
          fontWeight: 800,
          background: "linear-gradient(160deg, #ffffff 0%, #ffffff 45%, #0ea5e9 55%, #1e40af 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "0.06em",
        }}
      >
        CoolX
      </h1>
    ),
  },
  {
    num: 5,
    name: "Titanium",
    element: (
      <h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
          fontWeight: 700,
          background: "linear-gradient(180deg, #f1f5f9 0%, #94a3b8 40%, #e2e8f0 70%, #64748b 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "0.22em",
          textTransform: "uppercase" as const,
          filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
        }}
      >
        CoolX
      </h1>
    ),
  },
  {
    num: 6,
    name: "Aurora",
    element: (
      <h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
          fontWeight: 800,
          background: "linear-gradient(120deg, #a78bfa 0%, #22d3ee 50%, #38bdf8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "0.08em",
          filter: "drop-shadow(0 0 24px rgba(139,92,246,0.5)) drop-shadow(0 0 48px rgba(34,211,238,0.3))",
        }}
      >
        CoolX
      </h1>
    ),
  },
  {
    num: 7,
    name: "Blade",
    element: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "#ffffff",
            letterSpacing: "0.04em",
            lineHeight: 1,
          }}
        >
          CoolX
        </h1>
        <div
          style={{
            width: "80%",
            height: "3px",
            background: "linear-gradient(90deg, transparent, #f97316, #ef4444, transparent)",
            borderRadius: "2px",
            transform: "skewX(-12deg)",
          }}
        />
      </div>
    ),
  },
  {
    num: 8,
    name: "Blueprint",
    element: (
      <div style={{ position: "relative" }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: 700,
            fontFamily: "'Courier New', monospace",
            color: "#38bdf8",
            letterSpacing: "0.28em",
            textTransform: "uppercase" as const,
            textShadow: "0 0 10px rgba(56,189,248,0.4)",
          }}
        >
          COOLX
        </h1>
      </div>
    ),
  },
  {
    num: 9,
    name: "Hologram",
    element: (
      <h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
          fontWeight: 800,
          background: "linear-gradient(90deg, #f0abfc 0%, #67e8f9 33%, #86efac 66%, #f0abfc 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "0.08em",
          filter: "drop-shadow(0 0 16px rgba(240,171,252,0.5)) drop-shadow(0 0 32px rgba(103,232,249,0.3))",
        }}
      >
        CoolX
      </h1>
    ),
  },
  {
    num: 10,
    name: "Deep Space",
    element: (
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ color: "#38bdf8", fontSize: "1.2rem", opacity: 0.7 }}>✦</span>
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: 300,
            background: "linear-gradient(90deg, #ffffff 0%, #bae6fd 50%, #0ea5e9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "0.38em",
            textTransform: "uppercase" as const,
          }}
        >
          CoolX
        </h1>
        <span style={{ color: "#38bdf8", fontSize: "1.2rem", opacity: 0.7 }}>✦</span>
      </div>
    ),
  },
];

export default function CoolXPreview() {
  return (
    <div className="min-h-screen bg-[#080c14] font-sans text-white">
      <div className="flex justify-between items-center px-8 pt-8 pb-4">
        <span className="text-sm text-zinc-500 tracking-widest uppercase">OUTLETVAULT.CO</span>
        <Link
          href="/"
          className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-white/70 hover:bg-white hover:text-[#080c14] transition-all"
        >
          ← Back
        </Link>
      </div>

      <div className="px-8 pt-8 pb-4 text-center">
        <p className="text-xs tracking-[0.3em] text-sky-400 uppercase mb-2">Pick a style</p>
        <p className="text-zinc-500 text-sm">Tell me the number you want applied</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8 pb-20 max-w-4xl mx-auto mt-4">
        {logos.map((logo) => (
          <div
            key={logo.num}
            className="rounded-2xl bg-zinc-900/60 border border-white/8 flex flex-col items-center justify-center gap-4 py-12 px-6 hover:border-sky-500/40 transition-all"
          >
            <div className="flex items-center justify-center min-h-[80px]">
              {logo.element}
            </div>
            <p className="text-xs text-zinc-500 tracking-widest uppercase">
              #{logo.num} — {logo.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
