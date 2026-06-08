"use client";

import Link from "next/link";
import Image from "next/image";
import VideoLayout from "./VideoLayout";
import { useState, useEffect, useRef } from "react";

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random(),
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const scale = Math.max(canvas.width, canvas.height) * 0.6;

      for (const star of stars) {
        star.z -= 0.0002;
        if (star.z <= 0) {
          star.x = Math.random() * 2 - 1;
          star.y = Math.random() * 2 - 1;
          star.z = 1;
        }

        const sx = (star.x / star.z) * scale + cx;
        const sy = (star.y / star.z) * scale + cy;

        if (sx < 0 || sx > canvas.width || sy < 0 || sy > canvas.height) {
          star.x = Math.random() * 2 - 1;
          star.y = Math.random() * 2 - 1;
          star.z = 1;
          continue;
        }

        const proximity = 1 - star.z;
        const size = Math.max(0.3, proximity * 2.2);
        const opacity = proximity * 0.95;

        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

const colorVariants = [
  { src: "/IMG_5220.jpg", label: "Midnight", color: "#1a1a1a" },
  { src: "/IMG_5221.jpg", label: "Arctic", color: "#e8e8e8" },
  { src: "/IMG_5219.jpg", label: "Rose", color: "#e91e8c" },
  { src: "/IMG_5222.jpg", label: "Ocean", color: "#1565c0" },
];

function GridView() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {colorVariants.map((v) => (
        <div
          key={v.label}
          className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
        >
          <div className="relative aspect-square w-full">
            <Image
              src={v.src}
              alt={`OutletVault in ${v.label}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 400px"
            />
          </div>
          <div className="px-5 py-4 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full shrink-0 border border-white/10" style={{ backgroundColor: v.color }} />
            <span className="text-sm font-medium text-white/80 tracking-wide">{v.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CarouselView() {
  const [idx, setIdx] = useState(0);
  const v = colorVariants[idx];
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl shadow-sky-950/40">
        <Image
          src={v.src}
          alt={`OutletVault in ${v.label}`}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-6 flex items-center gap-3">
          <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: v.color }} />
          <span className="text-lg font-semibold text-white tracking-wide">{v.label}</span>
        </div>
        <button
          onClick={() => setIdx((i) => (i - 1 + colorVariants.length) % colorVariants.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all"
        >
          ‹
        </button>
        <button
          onClick={() => setIdx((i) => (i + 1) % colorVariants.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all"
        >
          ›
        </button>
      </div>
      <div className="flex gap-2">
        {colorVariants.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-sky-400 scale-125" : "bg-zinc-600 hover:bg-zinc-400"}`}
          />
        ))}
      </div>
    </div>
  );
}

function ShowcaseView() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl">
        <Image
          src={colorVariants[active].src}
          alt={`OutletVault in ${colorVariants[active].label}`}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-6 flex items-center gap-3">
          <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: colorVariants[active].color }} />
          <span className="text-lg font-semibold text-white tracking-wide">{colorVariants[active].label}</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {colorVariants.map((v, i) => (
          <button
            key={v.label}
            onClick={() => setActive(i)}
            className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 aspect-square ${
              i === active ? "border-sky-400 shadow-lg shadow-sky-500/30" : "border-white/10 hover:border-white/30"
            }`}
          >
            <Image src={v.src} alt={v.label} fill className="object-cover" sizes="150px" />
          </button>
        ))}
      </div>
    </div>
  );
}

const layoutTabs = [
  { label: "Grid", component: <GridView /> },
  { label: "Carousel", component: <CarouselView /> },
  { label: "Showcase", component: <ShowcaseView /> },
];

export default function DesignsPricing() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans text-white relative overflow-hidden">
      <StarField />
      {/* Nav */}
      <div className="relative z-10 flex justify-between items-center px-8 pt-8 pb-4">
        <span className="text-sm text-zinc-500 tracking-widest uppercase">OUTLETVAULT.CO</span>
        <Link
          href="/"
          className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-white/70 hover:bg-white hover:text-[#080c14] transition-all"
        >
          ← Back
        </Link>
      </div>

      <main className="relative z-10 flex flex-col items-center w-full">
        {/* Hero text */}
        <div className="text-center px-8 pt-12 pb-8">
          <p className="text-xs tracking-[0.3em] text-sky-400 uppercase mb-3">Introducing</p>
          <h1 className="text-5xl sm:text-7xl font-bold leading-none tracking-tight bg-linear-to-br from-white via-sky-100 to-sky-400 bg-clip-text text-transparent">
            OutletVault
          </h1>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-md mx-auto">
            Portable power, wherever you need it. Built-in outlet, USB-C, and smart battery display.
          </p>
        </div>

        {/* Video hero */}
        <VideoLayout />

        {/* Color variants with tabs */}
        <div className="w-full max-w-4xl px-4 sm:px-8 mt-16">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-2">Available In</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Four Signature Colors</h2>
            <div className="flex justify-center gap-2">
              {layoutTabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    i === activeTab
                      ? "bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-500/30"
                      : "bg-transparent border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {layoutTabs[activeTab].component}
        </div>

        {/* LED future designs section */}
        <div className="w-full max-w-4xl px-4 sm:px-8 mt-24 mb-20 flex flex-col items-center gap-8">
          <p
            className="text-center text-lg sm:text-2xl font-semibold tracking-wide"
            style={{
              background: "linear-gradient(90deg, #38bdf8, #a78bfa, #38bdf8, #f472b6, #38bdf8)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
            }}
          >
            potential for future designs with LED screens!
          </p>

          <div className="w-full rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-sky-950/40 bg-zinc-900">
            <video
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/led-preview.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
