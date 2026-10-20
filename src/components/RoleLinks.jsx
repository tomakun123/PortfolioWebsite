import { Link } from "react-router-dom";

const linkClass =
  "inline-flex items-center gap-1 text-sm font-medium text-mint underline decoration-mint/30 underline-offset-4 transition hover:decoration-mint";

// Links under a role: "/..." stays on this site, anything else opens a new tab
export default function RoleLinks({ links, className = "" }) {
  if (!links?.length) return null;

  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {links.map((l) =>
        l.href.startsWith("/") ? (
          <Link key={l.href} to={l.href} className={linkClass}>
            {l.label} <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={linkClass}>
            {l.label} <span aria-hidden="true">↗</span>
          </a>
        )
      )}
    </div>
  );
}
