"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/IMG_5346.jpg", label: "Slate", color: "#4a5568" },
  { src: "/IMG_5347.jpg", label: "Storm", color: "#2d3748" },
];

function GridLayout() {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-8 mt-10 mb-20">
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {images.map((v) => (
          <div
            key={v.label}
            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={v.src}
                alt={`OutletVault Device 2 in ${v.label}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
            <div className="px-5 py-4 flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full shrink-0 border border-white/10"
                style={{ backgroundColor: v.color }}
              />
              <span className="text-sm font-medium text-white/80 tracking-wide">{v.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroLayout() {
  return (
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full shrink-0 border border-white/20"
                style={{ backgroundColor: v.color }}
              />
              <span className="text-lg font-semibold text-white tracking-wide">{v.label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SplitLayout() {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-8 mt-10 mb-20">
      <div className="flex gap-3 items-stretch" style={{ height: 420 }}>
        {images.map((v) => (
          <div
            key={v.label}
            className="flex-1 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-300 shadow-2xl shadow-sky-950/40 relative group"
          >
            <Image
              src={v.src}
              alt={`OutletVault Device 2 in ${v.label}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full border border-white/20"
                style={{ backgroundColor: v.color }}
              />
              <span className="text-sm font-medium text-white/90 tracking-wide">{v.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShowcaseLayout() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-4xl px-4 sm:px-8 mt-10 mb-20 flex flex-col items-center gap-6">
      <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl shadow-sky-950/40 w-full" style={{ height: 420 }}>
        <Image
          src={images[active].src}
          alt={`OutletVault Device 2 in ${images[active].label}`}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-6 flex items-center gap-3">
          <span
            className="w-3 h-3 rounded-full border border-white/20"
            style={{ backgroundColor: images[active].color }}
          />
          <span className="text-lg font-semibold text-white tracking-wide">{images[active].label}</span>
        </div>
      </div>
      <div className="flex gap-4">
        {images.map((v, i) => (
          <button
            key={v.label}
            onClick={() => setActive(i)}
            className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              i === active ? "border-sky-400 shadow-lg shadow-sky-500/30" : "border-white/10 hover:border-white/30"
            }`}
            style={{ width: 80, height: 80 }}
          >
            <Image
              src={v.src}
              alt={v.label}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

const tabs = [
  { label: "Grid", component: <GridLayout /> },
  { label: "Hero", component: <HeroLayout /> },
  { label: "Split", component: <SplitLayout /> },
  { label: "Showcase", component: <ShowcaseLayout /> },
];

export default function Device2() {
  const [activeTab, setActiveTab] = useState(0);

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
          <p className="text-xs tracking-[0.3em] text-sky-400 uppercase mb-3">Introducing</p>
          <h1 className="text-5xl sm:text-7xl font-bold leading-none tracking-tight bg-linear-to-br from-white via-sky-100 to-sky-400 bg-clip-text text-transparent">
            OutletVault
          </h1>
          <p className="mt-2 text-sky-400/80 text-sm font-semibold tracking-widest uppercase">Device #2</p>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-md mx-auto">
            The next generation. Sleeker, smarter, and ready for anything.
          </p>
        </div>

        {/* Layout tabs */}
        <div className="flex gap-2 px-4 sm:px-8 mt-2">
          {tabs.map((tab, i) => (
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

        {/* Active layout */}
        {tabs[activeTab].component}
      </main>
    </div>
  );
}
