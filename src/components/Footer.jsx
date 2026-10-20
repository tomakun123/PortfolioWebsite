import { CONTACT } from "../data/profile";
import { copyEmail } from "../utils/copyEmail";

const pill =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-haze-400/50 hover:bg-white/10 hover:text-white";
const iconClass = "h-4 w-4 object-contain invert opacity-90";

// Shown on every page so the resume and contact links are always reachable
export default function Footer({ showToast }) {
  function handleCopyEmail(e) {
    e.preventDefault(); // stops mailto
    copyEmail(CONTACT.email, showToast);
  }

  return (
    <footer className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Thomas Motais De Narbonne</p>

      <nav aria-label="Contact links" className="flex flex-wrap gap-2">
        <a href={CONTACT.resume} download={CONTACT.resumeFileName} className={pill}>
          <img src="/icons/resume.svg" alt="" className={iconClass} />
          Resume
        </a>
        <a href={CONTACT.github} target="_blank" rel="noreferrer" className={pill}>
          <img src="/icons/github.svg" alt="" className={iconClass} />
          GitHub
        </a>
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className={pill}>
          <img src="/icons/linkedin.svg" alt="" className={iconClass} />
          LinkedIn
        </a>
        <a href={`mailto:${CONTACT.email}`} onClick={handleCopyEmail} className={pill} title="Click to copy">
          <img src="/icons/email.svg" alt="" className={iconClass} />
          <span className="sm:hidden">Email</span>
          <span className="hidden sm:inline">{CONTACT.email}</span>
        </a>
      </nav>
    </footer>
  );
}
