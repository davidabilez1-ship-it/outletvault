import Link from "next/link";
import Image from "next/image";
import VideoLayout from "./VideoLayout";

const colorVariants = [
  { src: "/IMG_5220.jpg", label: "Midnight", color: "#1a1a1a" },
  { src: "/IMG_5221.jpg", label: "Arctic", color: "#e8e8e8" },
  { src: "/IMG_5219.jpg", label: "Rose", color: "#e91e8c" },
  { src: "/IMG_5222.jpg", label: "Ocean", color: "#1565c0" },
];

export default function DesignsPricing() {
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
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-md mx-auto">
            Portable power, wherever you need it. Built-in outlet, USB-C, and smart battery display.
          </p>
        </div>

        {/* Video hero */}
        <VideoLayout />

        {/* Color variants */}
        <div className="w-full max-w-4xl px-4 sm:px-8 mt-16 mb-20">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-2">Available In</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Four Signature Colors</h2>
          </div>

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
      </main>
    </div>
  );
}
