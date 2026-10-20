import { useState } from "react";

export default function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const updated =
    p.github?.updatedAt ? new Date(p.github.updatedAt).toLocaleDateString() : "";

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition h-full flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="text-sm text-zinc-600">{p.tagline}</p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <span className="text-xs text-zinc-500">{p.year}</span>
          {p.status && (
            <span className="whitespace-nowrap rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs text-amber-800">
              {p.status}
            </span>
          )}
        </div>
      </div>

      {/* Overview + How it's built */}
      <div className="mt-4">
        <h4 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          Overview
        </h4>
        <p className="mt-1 text-sm text-zinc-700">{p.overview}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          How it's built
        </h4>
        <p className="mt-1 text-sm text-zinc-700">{p.technical}</p>
      </div>

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
      <div className="mt-auto" />
      {(p.highlights?.length ?? 0) > 0 && (
        <div className="mt-4 relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition text-left"
          >
            <div className="flex items-center justify-between">
              <span>Highlights</span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-500">{p.highlights.length} items</span>
                <span className={`text-zinc-400 transition-transform ${open ? "rotate-90" : ""}`}>
                  ›
                </span>
              </div>
            </div>
          </button>

          {open && (
            <>
              {/* local click-away layer: only covers this card area */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute inset-0 z-40"
                aria-label="Close highlights"
              />

              {/* dropdown panel */}
              <div className="absolute left-0 right-0 z-50 mt-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 shadow-lg max-h-64 overflow-auto">
                <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
                  {p.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}

      {/* Links */}
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {(p.links || []).map((l) => (
          <a
            key={l.href}
            className="underline hover:no-underline"
            href={l.href}
            target="_blank"
            rel="noreferrer"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
