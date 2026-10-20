import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import CourseworkSection from "../components/CourseworkSection";
import { PROJECTS, CATEGORIES, GITHUB_USERNAME } from "../data/projects";
import { useGithubRepoMeta } from "../hooks/useGithubRepoMeta";
import { usePageTitle } from "../hooks/usePageTitle";

const TABS = [{ id: "all", label: "All" }, ...CATEGORIES];

function countFor(id) {
  return id === "all"
    ? PROJECTS.length
    : PROJECTS.filter((p) => p.categories?.includes(id)).length;
}

export default function ProjectsPage() {
  const [category, setCategory] = useState("all");
  usePageTitle("Projects & Coursework");

  const { enrichedProjects } = useGithubRepoMeta(GITHUB_USERNAME, PROJECTS);

  // Featured first, then newest
  const shown = useMemo(
    () =>
      enrichedProjects
        .filter((p) => category === "all" || p.categories?.includes(category))
        .sort((a, b) => Number(b.featured) - Number(a.featured) || b.year - a.year),
    [enrichedProjects, category]
  );

  return (
    <>
      {/* Page header + in-page links */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint">{"// projects"}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">Projects & Coursework</h1>
        </div>
        <nav className="flex gap-3 text-sm text-zinc-400">
          <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href="#projects">Projects</a>
          <span aria-hidden="true">·</span>
          <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href="#coursework">Coursework</a>
        </nav>
      </div>

      {/* Projects */}
      <section className="mt-8 scroll-mt-24" id="projects" aria-label="Projects">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {TABS.map((t) => {
            const active = category === t.id;
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(t.id)}
                className={[
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
                  active
                    ? "border-haze-500 bg-haze-500 text-white shadow-[0_0_16px_-4px_rgb(139_92_246_/_0.6)]"
                    : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-haze-400/50 hover:text-white",
                ].join(" ")}
              >
                {t.label}
                <span className={`font-mono text-xs ${active ? "text-white/80" : "text-zinc-500"}`}>
                  {countFor(t.id)}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {shown.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* Separator */}
      <hr className="my-14 border-t border-white/10" />

      <CourseworkSection />
    </>
  );
}
