import GameOnWordmark from "./GameOnWordmark";

// A company's logo: an image from public/logos/, the GameOn wordmark, or a
// monogram tile when there's no logo. Height is set by `className` (e.g. "h-7").
export default function CompanyLogo({ company, logo, wordmark, className = "h-7" }) {
  if (wordmark === "gameon") return <GameOnWordmark />;

  if (logo) {
    return (
      <img
        src={logo}
        alt={company}
        className={`${className} w-auto max-w-[9rem] object-contain`}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={company}
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-haze-400/15 font-mono text-sm font-semibold text-haze-300"
    >
      {company[0]}
    </span>
  );
}
