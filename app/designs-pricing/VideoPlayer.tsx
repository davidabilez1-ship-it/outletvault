"use client";

export default function VideoPlayer() {
  return (
    <video
      className="w-full h-auto object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/showcase.mp4" type="video/mp4" />
    </video>
  );
}
