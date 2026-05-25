"use client";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#0b1120] font-sans min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col justify-between py-24 px-16">
        <span className="text-sm text-zinc-500">outletvault.co</span>

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

        <div className="relative h-12 w-full">
          <button
            onClick={() => setOpen(true)}
            className={`absolute inset-0 flex items-center justify-center rounded-full border border-white text-sm font-medium text-white hover:bg-white hover:text-[#0b1120] transition-all ${
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
