import WorkCard from "../components/WorkCard";
import { WORKS } from "../data/works";
import { usePageTitle } from "../hooks/usePageTitle";

export default function WorkPage() {
  usePageTitle("Work Experience");

  return (
    <section className="scroll-mt-24" id="work">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Work Experience</h1>
        <p className="text-sm text-zinc-600">{WORKS.length} roles</p>
      </div>

      <div className="mt-4 grid gap-4">
        {WORKS.map((w) => (
          <WorkCard key={w.id} w={w} />
        ))}
      </div>
    </section>
  );
}
