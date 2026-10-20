import CompanyLogo from "./CompanyLogo";
import RoleLinks from "./RoleLinks";
import { renderEmphasis } from "../utils/renderEmphasis";

function CurrentPill() {
  return (
    <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-0.5 text-xs font-medium text-mint">
      Current
    </span>
  );
}

// One role on the Work page timeline. Everything is visible; nothing to click open.
// From md up: [date rail | dot on the line | card]. The rail and dot stick beside
// the card while it scrolls. Below md: just the card, with the date inside it.
export default function ExperienceEntry({ w, index = 0 }) {
  return (
    <li
      id={w.id}
      className="animate-fade-up scroll-mt-28 md:grid md:grid-cols-[8.5rem_2.5rem_1fr]"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {/* Date rail */}
      <div className="hidden md:sticky md:top-28 md:flex md:flex-col md:items-end md:gap-1 md:self-start md:pt-7 md:text-right">
        <span className="font-mono text-sm leading-snug text-zinc-200">{w.date}</span>
        {w.location && <span className="text-sm text-zinc-500">{w.location}</span>}
        {w.current && <span className="mt-1"><CurrentPill /></span>}
      </div>

      {/* Dot on the line */}
      <div aria-hidden="true" className="hidden md:sticky md:top-28 md:flex md:justify-center md:self-start md:pt-8">
        <span className="relative flex h-4 w-4 items-center justify-center">
          {w.current && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-mint/50 motion-safe:animate-ping" />
          )}
          <span
            className={`relative h-3 w-3 rounded-full ring-4 ring-ink ${w.current ? "bg-mint" : "bg-haze-300"}`}
          />
        </span>
      </div>

      <article className="glass rounded-3xl p-5 sm:p-7">
        {/* Header: logo, company, role | dates, location */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <div className="flex h-8 items-center">
              <CompanyLogo company={w.company} logo={w.logo} wordmark={w.wordmark} />
            </div>
            <h2 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-white">{w.company}</h2>
            <p className="mt-0.5 font-medium text-haze-300">{w.role}</p>
          </div>

          {/* Date inside the card on small screens only (the rail shows it from md up) */}
          <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400 sm:flex-col sm:items-end sm:text-right md:hidden">
            {w.current && <CurrentPill />}
            <span className="font-mono text-xs sm:text-sm text-zinc-300">{w.date}</span>
            {w.location && <span>{w.location}</span>}
          </div>
        </div>

        {/* One-line summary */}
        {w.summary && (
          <p className="mt-4 text-base leading-relaxed text-zinc-200">{w.summary}</p>
        )}

        {/* Bullets (max 4) */}
        {(w.highlights?.length ?? 0) > 0 && (
          <ul className="mt-4 space-y-2.5 text-sm sm:text-[15px] leading-relaxed text-zinc-400">
            {w.highlights.slice(0, 4).map((h, idx) => (
              <li key={idx} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-haze-400/70" />
                <span>{renderEmphasis(h)}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Stack */}
        {(w.stack?.length ?? 0) > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {w.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        <RoleLinks links={w.links} className="mt-5" />
      </article>
    </li>
  );
}
