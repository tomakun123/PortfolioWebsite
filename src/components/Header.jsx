import { Link, NavLink } from "react-router-dom";

const NAV = [
  { to: "/", label: "About", end: true },
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects & Coursework" },
];

function navClass({ isActive }) {
  return [
    "transition-colors underline-offset-8",
    isActive
      ? "text-zinc-900 underline decoration-2"
      : "text-zinc-600 hover:text-zinc-900",
  ].join(" ");
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-4 sm:py-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
        <Link
          to="/"
          className="text-lg font-semibold text-zinc-900 hover:text-zinc-700"
        >
          Thomas Motais De Narbonne
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 sm:gap-x-10 text-base sm:text-lg">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={navClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
