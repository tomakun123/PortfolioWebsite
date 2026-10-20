import RoleLinks from "./RoleLinks";

// Compact list for older / non-engineering roles: one row each, summary only
export default function OtherExperience({ roles }) {
  if (!roles.length) return null;

  return (
    <section className="mt-14" aria-labelledby="other-experience-heading">
      <h2 id="other-experience-heading" className="text-lg font-semibold tracking-tight text-white">
        Other experience
      </h2>

      <ul className="glass mt-4 divide-y divide-white/10 rounded-3xl">
        {roles.map((w) => (
          <li key={w.id} id={w.id} className="scroll-mt-28 px-5 py-4 sm:px-7">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <p className="text-zinc-100">
                <span className="font-semibold">{w.company}</span>
                <span className="text-zinc-500"> · </span>
                <span className="text-haze-300">{w.role}</span>
              </p>
              <span className="shrink-0 font-mono text-xs text-zinc-400">{w.date}</span>
            </div>
            <p className="mt-1 text-sm text-zinc-400">{w.summary}</p>
            <RoleLinks links={w.links} className="mt-2" />
          </li>
        ))}
      </ul>
    </section>
  );
}
