// Brand logo from simple-icons, or a monogram tile when there's no logo.
// Dark brand colors (e.g. Next.js, GitHub) would vanish on the dark
// background, so those are drawn in light zinc instead.

function isTooDark(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.25;
}

export default function SkillIcon({ icon, name }) {
  if (!icon) {
    return (
      <span
        aria-hidden="true"
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-haze-500/25 font-mono text-[11px] font-semibold text-haze-300"
      >
        {name[0]}
      </span>
    );
  }

  const color = isTooDark(icon.hex) ? "#e4e4e7" : `#${icon.hex}`;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0" fill={color}>
      <path d={icon.path} />
    </svg>
  );
}
