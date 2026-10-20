import TechChip from "./TechChip";
import { SKILL_GROUPS, SPOKEN_LANGUAGES } from "../data/skills";

const cardClass =
  "glass rounded-3xl p-5 sm:p-6 transition hover:border-haze-400/30 hover:shadow-[0_0_40px_-12px_rgb(167_139_250_/_0.2)]";
const cardTitle = "text-lg font-semibold tracking-tight text-white";

export default function SkillsSection() {
  return (
    <section className="animate-fade-up [animation-delay:120ms] scroll-mt-24" id="skills" aria-labelledby="skills-heading">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint">{"// skills"}</p>
      <h2 id="skills-heading" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
        Skills & Tech Stack
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} className={cardClass}>
            <div className="flex items-center justify-between">
              <h3 className={cardTitle}>{g.title}</h3>
              <span className="font-mono text-xs text-zinc-500">{g.skills.length}</span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.skills.map((name) => (
                <TechChip key={name} name={name} />
              ))}
            </ul>
          </div>
        ))}

        {/* Spoken languages */}
        <div className={cardClass}>
          <h3 className={cardTitle}>Spoken Languages</h3>
          <ul className="mt-4 grid gap-2">
            {SPOKEN_LANGUAGES.map((l) => (
              <li
                key={l.code}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-9 items-center justify-center rounded-lg bg-mint/15 font-mono text-xs font-semibold text-mint">
                    {l.code}
                  </span>
                  <span className="text-sm text-zinc-200">{l.name}</span>
                </span>
                <span className="text-xs text-zinc-400">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
