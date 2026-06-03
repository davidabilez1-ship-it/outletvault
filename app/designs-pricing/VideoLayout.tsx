"use client";

function Vid({ src }: { src: string }) {
  return (
    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function VideoLayout() {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-8">
      <div className="flex gap-3 items-stretch" style={{ height: 380 }}>
        <div className="flex-[65] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl shadow-sky-950/40">
          <Vid src="/showcase.mp4" />
        </div>
        <div className="flex-[35] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-lg">
          <Vid src="/showcase2.mp4" />
        </div>
      </div>
    </div>
  );
}
