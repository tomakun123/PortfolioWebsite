import { useMemo, useState } from "react";
import Chip from "../components/Chip";
import ProjectCard from "../components/ProjectCard";
import CourseworkSection from "../components/CourseworkSection";
import { PROJECTS, GITHUB_USERNAME } from "../data/projects";
import { useGithubRepoMeta } from "../hooks/useGithubRepoMeta";
import { usePageTitle } from "../hooks/usePageTitle";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState(new Set());
  const [sort, setSort] = useState("featured");
  usePageTitle("Projects & Coursework");

  const { enrichedProjects, loading, error } = useGithubRepoMeta(
    GITHUB_USERNAME,
    PROJECTS
  );

  const allTags = useMemo(
    () =>
      Array.from(new Set(enrichedProjects.flatMap((p) => p.tags || []))).sort(),
    [enrichedProjects]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = enrichedProjects.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.overview.toLowerCase().includes(q) ||
        p.technical.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q)) ||
        (p.stack || []).some((s) => s.toLowerCase().includes(q));

      const matchesTags =
        activeTags.size === 0 || (p.tags || []).some((t) => activeTags.has(t));

      return matchesQuery && matchesTags;
    });

    if (sort === "featured") {
      list = list.sort(
        (a, b) => Number(b.featured) - Number(a.featured) || b.year - a.year
      );
    } else if (sort === "newest") {
      list = list.sort((a, b) => b.year - a.year);
    } else if (sort === "az") {
      list = list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [query, activeTags, sort, enrichedProjects]);

  function toggleTag(tag) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  }

  function clear() {
    setQuery("");
    setActiveTags(new Set());
    setSort("featured");
  }

  return (
    <>
      {/* Page header + in-page links */}
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="text-2xl font-semibold">Projects & Coursework</h1>
        <nav className="flex gap-3 text-sm text-zinc-600">
          <a className="underline hover:no-underline" href="#projects">Projects</a>
          <span aria-hidden="true">·</span>
          <a className="underline hover:no-underline" href="#coursework">Coursework</a>
        </nav>
      </div>

      {/* Search / Sort */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          className="w-full sm:w-72 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm outline-none focus:border-zinc-400"
        />
        <div className="flex gap-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 pr-2"
          >
            <option value="featured">Sort: Featured</option>
            <option value="newest">Sort: Newest</option>
            <option value="az">Sort: A → Z</option>
          </select>
          <button
            onClick={clear}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm hover:border-zinc-400"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Filters */}
      <section className="mt-6">
        <h2 className="text-base font-semibold text-zinc-700">Filters</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {allTags.map((t) => (
            <Chip
              key={t}
              active={activeTags.has(t)}
              onClick={() => toggleTag(t)}
            >
              {t}
            </Chip>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-8 scroll-mt-24" id="projects">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="text-sm text-zinc-600">{filtered.length} shown</p>
        </div>

        {/* GitHub status */}
        {loading ? (
          <p className="mt-1 text-xs text-zinc-500">Loading GitHub metadata…</p>
        ) : error ? (
          <p className="mt-1 text-xs text-zinc-500">{error}</p>
        ) : null}

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* Separator */}
      <hr className="my-10 border-t border-zinc-200" />

      <CourseworkSection />
    </>
  );
}
