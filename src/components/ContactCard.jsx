import { CONTACT } from "../data/profile";
import { copyEmail } from "../utils/copyEmail";

const labelClass = "font-mono text-xs uppercase tracking-[0.2em] text-zinc-500";
const linkClass =
  "mt-1 inline-block text-lg text-zinc-100 underline decoration-haze-400/50 underline-offset-4 transition hover:text-mint hover:decoration-mint";

export default function ContactCard({ showToast }) {
  function handleCopyEmail(e) {
    e.preventDefault();
    copyEmail(CONTACT.email, showToast);
  }

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">

      <p className="max-w-4xl text-lg text-zinc-300">
        Interested in internships, research, or collaboration?
        I’m always happy to talk about projects, systems, and engineering work.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {/* Email */}
        <div className="min-w-0">
          <p className={labelClass}>Email</p>
          <a
            href={`mailto:${CONTACT.email}`}
            onClick={handleCopyEmail}
            className={`${linkClass} break-all`}
            title="Click to copy"
          >
            {CONTACT.email}
          </a>
        </div>

        {/* LinkedIn */}
        <div>
          <p className={labelClass}>LinkedIn</p>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            View profile
          </a>
        </div>

        {/* GitHub */}
        <div>
          <p className={labelClass}>GitHub</p>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className={linkClass}>
            View repositories
          </a>
        </div>
      </div>
    </div>
  );
}
