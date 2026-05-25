import Link from "next/link";

export default function Plan() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b1120] font-sans">
      <div className="flex justify-end px-8 pt-8">
        <Link
          href="/"
          className="px-4 py-2 rounded-full border border-white/30 text-sm font-medium text-white hover:bg-white hover:text-[#0b1120] transition-all"
        >
          ← Back
        </Link>
      </div>

      <main className="flex flex-1 items-center justify-center">
        <h1
          className="text-[6.5rem] font-bold leading-none tracking-tight bg-linear-to-br from-white via-sky-200 to-sky-500 bg-clip-text text-transparent select-none text-center"
          style={{ filter: "drop-shadow(0 0 60px rgba(56,189,248,0.25))" }}
        >
          Plan
        </h1>
      </main>
    </div>
  );
}
