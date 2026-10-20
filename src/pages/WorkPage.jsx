import ExperienceEntry from "../components/ExperienceEntry";
import OtherExperience from "../components/OtherExperience";
import { WORKS } from "../data/works";
import { usePageTitle } from "../hooks/usePageTitle";

const MAIN_ROLES = WORKS.filter((w) => !w.other);
const OTHER_ROLES = WORKS.filter((w) => w.other);

export default function WorkPage() {
  usePageTitle("Work Experience");

  return (
    <section className="scroll-mt-24" id="work" aria-labelledby="work-heading">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint">{"// experience"}</p>
      <h1 id="work-heading" className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
        Work Experience
      </h1>
      <p className="mt-2 text-zinc-400">
        {MAIN_ROLES.length} roles in software engineering, AI and enterprise IT
      </p>

      {/* Timeline: date rail + line + dots from md up; plain stacked cards below */}
      <ol className="relative mt-10 space-y-6">
        <span
          aria-hidden="true"
          className="absolute left-[calc(8.5rem+1.25rem)] top-2 bottom-2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-mint/50 via-haze-400/30 to-transparent md:block"
        />
        {MAIN_ROLES.map((w, i) => (
          <ExperienceEntry key={w.id} w={w} index={i} />
        ))}
      </ol>

      <OtherExperience roles={OTHER_ROLES} />
    </section>
  );
}
