export default function WorkCard({ w }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
      <details className="group">
        <summary className="list-none cursor-pointer select-none px-6 py-5 hover:bg-zinc-50 transition">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">{w.company}</h3>
              <p className="mt-1 text-sm text-zinc-600">{w.role}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-zinc-600">{w.location}</p>
                <p className="mt-1 text-xs text-zinc-500">{w.date}</p>
              </div>

              <span className="text-zinc-400 group-open:rotate-90 transition-transform text-xl">
                ›
              </span>
            </div>
          </div>
        </summary>

        <div className="px-6 pb-6">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            {(w.highlights?.length ?? 0) > 0 && (
              <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
                {w.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            )}

            {(w.stack?.length ?? 0) > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {w.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white px-3 py-1 text-xs text-zinc-700 border border-zinc-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </details>
    </div>
  );
}
