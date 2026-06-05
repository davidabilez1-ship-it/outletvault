"use client";
import { useEffect, useRef, useState } from "react";
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
  const [showBubble, setShowBubble] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#050810] font-sans min-h-screen relative overflow-hidden touch-none">
      <StarField />

      <main className="relative z-10 flex flex-1 w-full max-w-3xl flex-col justify-between py-12 px-8 sm:py-24 sm:px-16">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm text-zinc-500">outletvault.co</span>
          <div className="relative flex items-center gap-3">
            {showBubble && (
              <div className="absolute top-full mt-2 right-0 flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 shadow-xl shadow-black/40 whitespace-nowrap z-50">
                <span className="text-sm text-zinc-300">support@outletvault.co</span>
                <button
                  onClick={() => setShowBubble(false)}
                  className="ml-1 text-zinc-500 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            )}
            <button
              onClick={() => setShowBubble((v) => !v)}
              className="text-sm text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-zinc-700 hover:border-zinc-500"
            >
              Contact
            </button>
            <button
              onClick={() => setShowAbout(true)}
              className="text-sm text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-zinc-700 hover:border-zinc-500"
            >
              About
            </button>
          </div>
        </div>

        {showAbout && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 backdrop-blur-md bg-black/50" onClick={() => setShowAbout(false)} />
            <div
              className="relative w-[90vw] max-w-2xl bg-gradient-to-br from-[#0d1b3e] via-[#0a1628] to-[#050810] border border-sky-500/30 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-6 px-10 py-14"
              style={{ boxShadow: "0 0 60px rgba(56,189,248,0.15), 0 25px 60px rgba(0,0,0,0.6)" }}
            >
              <button
                onClick={() => setShowAbout(false)}
                className="absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors text-lg leading-none"
                aria-label="Close"
              >
                ✕
              </button>
              <h2
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-transparent text-center"
                style={{ filter: "drop-shadow(0 0 12px rgba(56,189,248,0.2))" }}
              >
                OutletVault
              </h2>
              <p className="text-sky-100/80 text-base sm:text-lg leading-relaxed text-center max-w-lg">
                This is an idea that I have wanted to create for many years, and I am excited to finally be at the point to push this product forward! I thought of this because I realized there is not a good way to charge laptops — at least all laptops. Why use a USB-C charger when an outlet already works with everything?
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6">
          <h1
            className="text-[4.5rem] sm:text-[6.5rem] font-bold leading-none tracking-tight bg-gradient-to-br from-white via-sky-200 to-sky-500 bg-clip-text text-transparent select-none"
            style={{ filter: "drop-shadow(0 0 60px rgba(56,189,248,0.25))" }}
          >
            Outlet
            <br />
            Vault
            <br />
            <span style={{ WebkitTextFillColor: "rgb(125 211 252)", fontSize: "1.5rem", fontWeight: 300, letterSpacing: "0.15em", whiteSpace: "nowrap" }}>
              coming soon
            </span>
          </h1>

          <div className="sm:pt-4 flex flex-col gap-3">
            <Link
              href="/designs-pricing"
              className="w-36 h-[4.25rem] sm:w-44 sm:h-[5.25rem] flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-blue-900 text-white text-base font-semibold text-center px-4 hover:opacity-90 transition-all shadow-lg shadow-blue-950/60"
            >
              Device #1
            </Link>
            <Link
              href="/device2"
              className="w-36 h-[4.25rem] sm:w-44 sm:h-[5.25rem] flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-blue-900 text-white text-base font-semibold text-center px-4 hover:opacity-90 transition-all shadow-lg shadow-blue-950/60"
            >
              Device #2
            </Link>
          </div>
        </div>

        <div />
      </main>
    </div>
  );
}
