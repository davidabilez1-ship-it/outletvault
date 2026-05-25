"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#050810] font-sans min-h-screen relative">
      <StarField />

<main className="relative z-10 flex flex-1 w-full max-w-3xl flex-col justify-between py-24 px-16">
        <span className="text-sm text-zinc-500">outletvault.co</span>

        <div className="flex items-start gap-6">
          <h1
            className="text-[6.5rem] font-bold leading-none tracking-tight bg-gradient-to-br from-white via-sky-200 to-sky-500 bg-clip-text text-transparent select-none"
            style={{ filter: "drop-shadow(0 0 60px rgba(56,189,248,0.25))" }}
          >
            Outlet
            <br />
            Vault
            <br />
            <span style={{ WebkitTextFillColor: "rgb(125 211 252)", fontSize: "2rem", fontWeight: 300, letterSpacing: "0.15em", whiteSpace: "nowrap" }}>
              coming soon
            </span>
          </h1>

          <div className="pt-4">
            <Link
              href="/designs-pricing"
              className="w-44 h-44 flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-blue-900 text-white text-base font-semibold text-center px-4 hover:opacity-90 transition-all shadow-lg shadow-blue-950/60"
            >
              Designs
            </Link>
          </div>
        </div>

        <div className="relative h-12 w-full">
          <button
            onClick={() => setOpen(true)}
            className={`absolute inset-0 flex items-center justify-center rounded-full border border-white text-sm font-medium text-white hover:bg-white hover:text-[#050810] transition-all ${
              open ? "pointer-events-none opacity-0" : "z-10"
            }`}
          >
            Contact
          </button>

          <div
            className={`absolute inset-0 flex items-center justify-center rounded-full bg-white/5 border border-white/20 text-sm text-white transition-all duration-300 ${
              open ? "z-10 opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            David Abilez
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 text-zinc-400 hover:text-white transition-colors leading-none"
            >
              ✕
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
