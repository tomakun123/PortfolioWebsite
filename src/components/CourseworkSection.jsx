import { COURSEWORK, CURRENT_TERM, DEGREE, SCHOOL_LINE } from "../data/coursework";

const isCurrent = (c) => c.status === "in-progress";

function CategoryIcon({ icon }) {
  const tile =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-haze-400/10 text-haze-300 ring-1 ring-haze-400/20";

  if (icon === "atom") {
    return (
      <span className={tile} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      </span>
    );
  }

  return (
    <span className={`${tile} font-mono text-sm font-semibold`} aria-hidden="true">
      {icon === "sigma" ? "Σ" : "</>"}
    </span>
  );
}

function PulseDot() {
  return (
    <span aria-hidden="true" className="relative flex h-2 w-2 shrink-0">
      <span className="absolute inline-flex h-full w-full rounded-full bg-mint/60 motion-safe:animate-ping" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
    </span>
  );
}

function CourseRow({ course }) {
  const current = isCurrent(course);

  return (
    <li className="flex items-center gap-3 py-2.5">
      {current ? (
        <span className="flex w-4 justify-center"><PulseDot /></span>
      ) : (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true">
          <path d="m3.5 8.5 3 3 6-7" />
        </svg>
      )}
      <span className={`text-[15px] ${current ? "text-white" : "text-zinc-300"}`}>{course.name}</span>
      {current && (
        <span className="ml-auto shrink-0 font-mono text-xs text-mint">Now</span>
      )}
    </li>
  );
}

function CategoryCard({ group, className = "" }) {
  // Current courses first, then the rest in their listed order
  const courses = [...group.courses.filter(isCurrent), ...group.courses.filter((c) => !isCurrent(c))];

  return (
    <div className={`glass rounded-3xl p-5 sm:p-6 ${className}`}>
      <div className="flex items-center gap-3">
        <CategoryIcon icon={group.icon} />
        <h3 className="text-lg font-semibold tracking-tight text-white">{group.category}</h3>
        <span className="ml-auto font-mono text-xs text-zinc-500">{group.courses.length}</span>
      </div>
      <ul className="mt-3 divide-y divide-white/5">
        {courses.map((c) => (
          <CourseRow key={c.name} course={c} />
        ))}
      </ul>
    </div>
  );
}

export default function CourseworkSection() {
  const current = COURSEWORK.flatMap((g) => g.courses.filter(isCurrent));
  const [first, ...rest] = COURSEWORK;

  return (
    <section className="animate-fade-up scroll-mt-24" id="coursework" aria-labelledby="coursework-heading">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint">{"// coursework"}</p>
      <h2 id="coursework-heading" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
        Coursework
      </h2>
      <p className="mt-2 text-zinc-300">{DEGREE}</p>
      <p className="mt-0.5 text-sm text-zinc-500">{SCHOOL_LINE}</p>

      {/* This semester */}
      {current.length > 0 && (
        <div className="glass relative mt-6 overflow-hidden rounded-3xl p-5 sm:p-6">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-mint to-mint/20" />
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-mint">
            This semester · {CURRENT_TERM}
          </h3>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {current.map((c) => (
              <li key={c.name} className="flex items-center gap-3 text-[15px] text-white">
                <PulseDot />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* By category: the biggest group on the left, the others stacked on the right */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {first && <CategoryCard group={first} className="md:row-span-2" />}
        {rest.map((g) => (
          <CategoryCard key={g.category} group={g} />
        ))}
      </div>
    </section>
  );
}
