import TechChip from "./TechChip";
import { renderEmphasis } from "../utils/renderEmphasis";

const primaryBtn =
  "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-haze-500 to-mint px-4 py-2 text-sm font-semibold text-ink shadow-[0_0_20px_-6px_rgb(167_139_250_/_0.35)] transition hover:brightness-110";
const secondaryBtn =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-haze-400/50 hover:bg-white/10 hover:text-white";

function LinkButton({ link, primary }) {
  return (
    <a href={link.href} target="_blank" rel="noreferrer" className={primary ? primaryBtn : secondaryBtn}>
      {link.github && (
        <img src="/icons/github.svg" alt="" className={`h-4 w-4 ${primary ? "" : "invert opacity-90"}`} />
      )}
      {link.label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function ProjectCard({ p }) {
  const updated =
    p.github?.updatedAt ? new Date(p.github.updatedAt).toLocaleDateString() : "";

  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 transition hover:border-haze-400/30 hover:shadow-[0_0_40px_-12px_rgb(167_139_250_/_0.2)]">
      {/* Title row */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-snug text-white">{p.name}</h3>
        <span className="shrink-0 font-mono text-xs text-zinc-500 pt-1">{p.year}</span>
      </div>
      <p className="mt-1 text-sm text-zinc-400">{p.tagline}</p>

      {(p.featured || p.status) && (
        <div className="mt-3 flex flex-wrap gap-2">
          {p.featured && (
            <span className="rounded-full border border-haze-400/30 bg-haze-400/10 px-2.5 py-0.5 text-xs text-haze-300">
              Featured
            </span>
          )}
          {p.status && (
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-xs text-amber-300">
              {p.status}
            </span>
          )}
        </div>
      )}

      {/* What it does (max 3) */}
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
        {(p.points || []).slice(0, 3).map((pt, idx) => (
          <li key={idx} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-haze-400/70" />
            <span>{renderEmphasis(pt)}</span>
          </li>
        ))}
      </ul>

      {/* Built with */}
      {(p.stack?.length ?? 0) > 0 && (
        <div className="mt-5">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Built with</h4>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {p.stack.map((name) => (
              <TechChip key={name} name={name} size="sm" />
            ))}
          </ul>
        </div>
      )}

      {/* Links, pinned to the bottom so they line up across a row */}
      <div className="mt-auto pt-5">
        <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
          {(p.links || []).map((l, i) => (
            <LinkButton key={l.href} link={l} primary={i === 0} />
          ))}
          {updated && <span className="ml-auto text-xs text-zinc-500">Updated {updated}</span>}
        </div>
      </div>
    </article>
  );
}
