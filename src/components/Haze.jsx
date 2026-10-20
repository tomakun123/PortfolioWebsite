// Fixed background layer: a soft lavender glow at the top, a faint mint glow
// low on the page, and a light dot grid
export default function Haze() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-56 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-haze-300/[0.08] blur-[160px]" />
      <div className="absolute -bottom-48 right-0 h-[30rem] w-[40rem] rounded-full bg-mint/[0.04] blur-[160px]" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgb(255 255 255 / 0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at top, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at top, black 20%, transparent 70%)",
        }}
      />
    </div>
  );
}
