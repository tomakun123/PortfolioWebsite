import { useMemo, useState } from "react";
import { LINKS, PROJECTS, GITHUB_USERNAME } from "./data/projects";
import { useGithubRepoMeta } from "./hooks/useGithubRepoMeta";

// For Header
import Header from "./Header";

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

// Copy to Clipboard component
function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-8 right-8 z-9999 pointer-events-none">
      <div className="toast animate-toast">
        <span className="text-green-600 text-lg">✓</span>
        <span>{message}</span>
      </div>
    </div>
  );
}

function TechStack() {
  const stack = [
    { name: "Python", icon: "/tech/python.svg" },
    { name: "C++", icon: "/tech/c++.svg" },
    { name: "JavaScript", icon: "/tech/js.svg" },
    { name: "React", icon: "/tech/react.svg" },
    { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
    { name: "MySQL", icon: "/tech/mysql.svg" },
    { name: "HTML5", icon: "/tech/html5.svg" },
    { name: "CSS3", icon: "/tech/css3.svg" },
    { name: "Flask", icon: "/tech/flask.svg" },
    { name: "Linux", icon: "/tech/linux.svg" },
    { name: "Docker", icon: "/tech/docker.svg" },
    { name: "n8n", icon: "/tech/n8n.svg" },
    { name: "Supabase", icon: "/tech/supabase.svg" },
    { name: "Jupyter", icon: "/tech/jupyter.svg" },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold tracking-tight mb-2">
        Tech Stack
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
        {stack.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-center rounded-xl border border-zinc-300 bg-zinc-50 p-3 hover:bg-white transition"
            title={item.name}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="h-12 w-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function LinksRow({ onCopyEmail }) {
  const resume = "/resume.pdf";
  const github = "https://github.com/YOUR_GITHUB";
  const linkedin = "https://www.linkedin.com/in/YOUR_LINKEDIN";
  const email = "tmd.nyu@gmail.com";

  const linkClass =
    "flex items-center gap-3 px-10 py-2 text-lg text-zinc-700 underline hover:no-underline transition-colors hover:text-zinc-900";
  const iconClass = "h-5 w-5 object-contain";

  async function handleCopyEmail(e) {
    e.preventDefault(); // stops mailto
    try {
      await navigator.clipboard.writeText(email);
      onCopyEmail?.("Email copied");
    } catch {
      // fallback if clipboard API is blocked
      try {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        onCopyEmail?.("Email copied");
      } catch {
        onCopyEmail?.("Couldn’t copy email");
      }
    }
  }

  return (
    <div className="mt-6 flex justify-center">
      <nav className="flex items-center divide-x divide-zinc-300 rounded-xl bg-white px-4">
        <a href={resume} target="_blank" rel="noreferrer" className={linkClass}>
          <img src="/icons/resume.svg" alt="" className={iconClass} />
          <span>Resume</span>
        </a>

        <a href={github} target="_blank" rel="noreferrer" className={linkClass}>
          <img src="/icons/github.svg" alt="" className={iconClass} />
          <span>GitHub</span>
        </a>

        <a href={linkedin} target="_blank" rel="noreferrer" className={linkClass}>
          <img src="/icons/linkedin.svg" alt="" className={iconClass} />
          <span>LinkedIn</span>
        </a>

        {/* Email: copy to clipboard */}
        <a href={`mailto:${email}`} onClick={handleCopyEmail} className={linkClass}>
          <img src="/icons/email.svg" alt="" className={iconClass} />
          <span>{email}</span>
        </a>
      </nav>
    </div>
  );
}

function ProfileCard({ loading, error, showToast }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        {/* profile image */}
        <img
          src="/ProfilePicture.jpg"
          alt="Profile"
          className="h-25 w-25 rounded-2xl object-cover border border-zinc-200"
        />

        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Thomas Motais De Narbonne
          </h1>
          <p className="mt-1 text-xl text-zinc-600">
            Computer Science Student @ NYU Tandon School of Engineering
          </p>
          <p className="mt-1 text-l text-zinc-600">
           Software Engineering • Cybersecurity • Systems
          </p>
        </div>
      </div>

      <hr className="my-6 border-zinc-200" />

      {/* About Me */}
      <div className="mt-4 flex flex-wrap gap-2">
        <h2 className="text-lg font-bold tracking-tight mb-2">
          About Me
        </h2>
        <p>
          I’m a CS student at NYU Tandon focused on building practical systems —
          security tooling, automation pipelines, and full-stack applications.
          I like projects with real-world constraints: reliability, scale, and
          clean interfaces.
        </p>
      </div>
      
      <hr className="my-6 border-zinc-200" />

      {/* Skills & Focus */}
      <section className="mt-6">
        <h2 className="text-lg font-bold tracking-tight mb-2">
          Skills & Focus
        </h2>

        <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
          <h3 className="font-semibold">Programming Languages:</h3>
          <p>Python, C++, JavaScript, SQL (MySQL, PostgreSQL)</p>

          <h3 className="font-semibold">Web / Frameworks:</h3>
          <p>HTML, CSS, React, Flask</p>

          <h3 className="font-semibold">Tools & Systems:</h3>
          <p>Git/GitHub, Linux, Windows, PowerShell, Azure, Supabase, Jupyter, n8n</p>

          <h3 className="font-semibold">Languages:</h3>
          <p>English (Fluent), French (Fluent), Japanese (Fluent)</p>
        </div>
      </section>

      <hr className="my-6 border-zinc-200" />

      {/* Tech Stack */}
      <TechStack />

      <hr className="my-6 border-zinc-200" />

      {/* Links */}
      <LinksRow onCopyEmail={showToast} />

      {/* GitHub status */}
      <div className="mt-3">
        {loading ? (
          <span className="text-xs text-zinc-500">
            Loading GitHub metadata…
          </span>
        ) : error ? (
          <span className="text-xs text-zinc-500">{error}</span>
        ) : null}
      </div>
    </div>
  );
}


function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);

  const updated =
    p.github?.updatedAt ? new Date(p.github.updatedAt).toLocaleDateString() : "";

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

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {(p.tags || []).map((t) => (
          <span
            key={t}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {(p.stack || []).map((s) => (
          <span
            key={s}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
          >
            {s}
          </span>
        ))}
      </div>

      {/* GitHub metadata */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
        {updated && <span className="text-zinc-500">Updated {updated}</span>}
      </div>

      {/* Highlights dropdown */}
      {(p.highlights?.length ?? 0) > 0 && (
        <details className="mt-4">
          <summary className="list-none cursor-pointer select-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition">
            <div className="flex items-center justify-between">
              <span>Highlights</span>
              <span className="text-xs text-zinc-500">{p.highlights.length} items</span>
            </div>
          </summary>

          <div className="mt-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
              {p.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </div>
        </details>
      )}


      {/* Links */}
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {p.links?.github && (
          <a
            className="underline hover:no-underline"
            href={p.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        )}
        {p.links?.demo && (
          <a
            className="underline hover:no-underline"
            href={p.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live demo
          </a>
        )}
      </div>
    </div>
  );
}

function ContactCard({ showToast }) {
  const email = "tmd.nyu@gmail.com";
  const linkedin = "https://www.linkedin.com/in/YOUR_LINKEDIN";
  const github = "https://github.com/YOUR_GITHUB";

  async function handleCopyEmail(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      showToast?.("Email copied");
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        showToast?.("Email copied");
      } catch {
        showToast?.("Couldn’t copy email");
      }
    }
  }


  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">

      <p className="mt-2 max-w-4xl text-base text-zinc-600">
        Interested in internships, research, or collaboration?  
        I’m always happy to talk about projects, systems, and engineering work.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {/* Email */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Email
          </p>
          <a
            href={`mailto:${email}`}
            onClick={handleCopyEmail}
            className="mt-1 inline-block text-sm underline hover:no-underline"
            title="Click to copy"
          >
            {email}
          </a>
        </div>

        {/* LinkedIn */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            LinkedIn
          </p>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-sm underline hover:no-underline"
          >
            View profile
          </a>
        </div>

        {/* GitHub */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            GitHub
          </p>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-sm underline hover:no-underline"
          >
            View repositories
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState(new Set());
  const [sort, setSort] = useState("featured");
  const [toast, setToast] = useState("");

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
        p.description.toLowerCase().includes(q) ||
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

  // Copy to Clipboard
  function showToast(msg) {
  setToast(msg);
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => setToast(""), 1500);
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">

      {/* Render toast */}
      <Toast message={toast} />

      {/* Header */}
      <Header />

      <div className="mx-auto max-w-5xl px-5 py-12">

        <main>
          {/* Profile card at top */}
          <section className="mb-8 scroll-mt-24" id="home">
            <ProfileCard loading={loading} error={error} showToast={showToast} />
          </section>

          {/* Separator */}
          <hr className="my-10 border-t border-zinc-200" /> 

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
            <h2 className="text-sm font-semibold text-zinc-700">Filters</h2>
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
              <h2 className="text-xl font-semibold">Projects</h2>
              <p className="text-sm text-zinc-600">{filtered.length} shown</p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {filtered.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}
            </div>
          </section>

          {/* Separator */}
          <hr className="my-10 border-t border-zinc-200" /> 

          {/* Contact card */}
          <section className="mt-8 scroll-mt-24" id="contact">
            <div className="grid gap-4 md:grid-cols-2">
              <h2 className="text-xl font-semibold">Contact Me</h2>
              <div className="md:col-span-2">
                <ContactCard showToast={showToast} />
              </div>
            </div>
          </section>

          <footer className="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
            <p>© {new Date().getFullYear()} Thomas Motais De Narbonne</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

