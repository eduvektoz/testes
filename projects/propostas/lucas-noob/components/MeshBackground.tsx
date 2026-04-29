export function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 15%, rgba(43,95,255,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(124,58,237,0.1) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg" />
      <div
        className="blob-a absolute -top-60 -left-60 h-[85vh] w-[85vh] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(43,95,255,0.55) 0%, rgba(43,95,255,0) 62%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="blob-b absolute top-1/4 -right-60 h-[95vh] w-[95vh] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(124,58,237,0.5) 0%, rgba(124,58,237,0) 60%)",
          filter: "blur(110px)",
        }}
      />
      <div
        className="blob-c absolute bottom-[-30%] left-1/4 h-[65vh] w-[65vh] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(224,139,99,0.22) 0%, rgba(224,139,99,0) 65%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 45%, rgba(5,7,14,0.8) 100%)",
        }}
      />
    </div>
  );
}
