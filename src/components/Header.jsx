import { Link, NavLink } from "react-router-dom";
import { CONTACT } from "../data/profile";

const NAV = [
  { to: "/", label: "About", end: true },
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects & Coursework" },
];

function navClass({ isActive }) {
  return [
    "transition-colors underline-offset-8",
    isActive
      ? "text-white underline decoration-2 decoration-mint"
      : "text-zinc-400 hover:text-white",
  ].join(" ");
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-4 sm:py-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-white hover:text-haze-300 transition-colors"
        >
          Thomas Motais De Narbonne
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 sm:gap-x-10 text-base sm:text-lg">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={navClass}>
              {n.label}
            </NavLink>
          ))}

          {/* Resume download, always one click away */}
          <a
            href={CONTACT.resume}
            download={CONTACT.resumeFileName}
            aria-label="Download resume"
            title="Download resume"
            className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/5 px-3 py-1.5 text-sm font-medium text-mint transition hover:border-mint hover:bg-mint/15"
          >
            <img src="/icons/resume.svg" alt="" className="h-4 w-4 object-contain invert opacity-90" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
