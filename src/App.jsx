import { useMemo, useState } from "react";

const LINKS = [
  { label: "Resume", href: "/resume.pdf" }, // later you can place resume.pdf in /public
  { label: "GitHub", href: "https://github.com/YOUR_GITHUB" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/YOUR_LINKEDIN" },
];

const PROJECTS = [
  {
    id: "phishlab",
    name: "PhishLab",
    tagline: "Email threat analysis toolkit + local mail lab",
    description:
      "Analyze .eml files, parse headers/MIME, detect suspicious links, and output structured JSON reports.",
    tags: ["Cybersecurity", "Python", "Systems"],
    links: { github: "https://github.com/YOUR_GITHUB/phishlab", demo: "" },
    featured: true,
    year: 2026,
  },
  {
    id: "gmatch",
    name: "GMatch",
    tagline: "Full-stack platform prototype",
    description:
      "Backend + data modeling + APIs. Built with reliability and clear workflows in mind.",
    tags: ["Full-Stack", "React", "Databases"],
    links: { github: "https://github.com/YOUR_GITHUB/gmatch", demo: "" },
    featured: true,
    year: 2026,
  },
];

const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort();

function Chip({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full border px-3 py-1 text-sm transition",
        active
          ? "bg-zinc-900 text-white border-zinc-900"
          : "bg-white text-zinc-900 border-zinc-200 hover:border-zinc-400",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function ProjectCard({ p }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="text-sm text-zinc-600">{p.tagline}</p>
        </div>
        <span className="text-xs text-zinc-500">{p.year}</span>
      </div>

      <p className="mt-3 text-sm text-zinc-700">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {p.links.github && (
          <a className="underline hover:no-underline" href={p.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {p.links.demo && (
          <a className="underline hover:no-underline" href={p.links.demo} target="_blank" rel="noreferrer">
            Live demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState(new Set());
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = PROJECTS.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      const matchesTags =
        activeTags.size === 0 || p.tags.some((t) => activeTags.has(t));

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
  }, [query, activeTags, sort]);

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
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <header className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Thomas Motais</h1>
            <p className="mt-1 text-zinc-600">
              CS @ NYU Tandon • Software Engineering • Cybersecurity • Systems
            </p>

            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {LINKS.map((l) => (
                <a key={l.label} className="underline hover:no-underline" href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-full sm:w-64 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm outline-none focus:border-zinc-400"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm outline-none focus:border-zinc-400"
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
        </header>

        <section className="mt-8">
          <h2 className="text-sm font-semibold text-zinc-700">Filters</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {ALL_TAGS.map((t) => (
              <Chip key={t} active={activeTags.has(t)} onClick={() => toggleTag(t)}>
                {t}
              </Chip>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Projects</h2>
            <p className="text-sm text-zinc-600">{filtered.length} shown</p>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Thomas Motais</p>
        </footer>
      </div>
    </div>
  );
}
