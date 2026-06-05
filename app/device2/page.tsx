"use client";

import Link from "next/link";
import Image from "next/image";

const images = [
  { src: "/IMG_5346.jpg", label: "#1" },
  { src: "/IMG_5347.jpg", label: "#2" },
];

export default function Device2() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080c14] font-sans text-white">
      {/* Nav */}
      <div className="flex justify-between items-center px-8 pt-8 pb-4">
        <span className="text-sm text-zinc-500 tracking-widest uppercase">OUTLETVAULT.CO</span>
        <Link
          href="/"
          className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-white/70 hover:bg-white hover:text-[#080c14] transition-all"
        >
          ← Back
        </Link>
      </div>

      <main className="flex flex-col items-center w-full">
        {/* Hero text */}
        <div className="text-center px-8 pt-12 pb-8">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                fontWeight: 700,
                fontFamily: "'Courier New', monospace",
                background: "linear-gradient(90deg, #38bdf8 0%, #38bdf8 18%, #f472b6 22%, #38bdf8 26%, #38bdf8 61%, #ec4899 64%, #38bdf8 67%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                filter: "drop-shadow(0 0 10px rgba(56,189,248,0.4))",
              }}
            >
              COOLX
            </h2>
            <div
              style={{
                width: "100%",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #38bdf8 20%, #38bdf8 80%, transparent)",
                borderRadius: "2px",
                marginTop: "4px",
                filter: "blur(0.4px)",
              }}
            />
          </div>
        </div>

        {/* Hero image layout */}
        <div className="w-full max-w-4xl px-4 sm:px-8 mt-10 mb-20 flex flex-col gap-6">
          {images.map((v) => (
            <div
              key={v.label}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-black/40"
            >
              <div className="relative w-full" style={{ height: 340 }}>
                <Image
                  src={v.src}
                  alt={`OutletVault Device 2 in ${v.label}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <span className="text-lg font-semibold text-white tracking-wide">{v.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
