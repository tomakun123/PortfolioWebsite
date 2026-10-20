import { COURSEWORK, CURRENT_TERM, DEGREE } from "../data/coursework";

function InProgressPill() {
  return (
    <span className="whitespace-nowrap rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs text-amber-800">
      In progress
    </span>
  );
}

export default function CourseworkSection() {
  const current = COURSEWORK.flatMap((g) =>
    g.courses.filter((c) => c.status === "in-progress")
  );

  return (
    <section className="scroll-mt-24" id="coursework">
      <div>
        <h2 className="text-2xl font-semibold">Coursework</h2>
        <p className="mt-1 text-sm text-zinc-600">{DEGREE}</p>
      </div>

      {/* This semester */}
      {current.length > 0 && (
        <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            This semester ({CURRENT_TERM})
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {current.map((c) => (
              <span
                key={c.name}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* By category */}
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {COURSEWORK.map((g) => (
          <div
            key={g.category}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">{g.category}</h3>
              <span className="text-xs text-zinc-500">{g.courses.length} courses</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              {g.courses.map((c) => (
                <li key={c.name} className="flex items-start justify-between gap-2">
                  <span>{c.name}</span>
                  {c.status === "in-progress" && <InProgressPill />}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
