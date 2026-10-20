import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import { PROFILE, CONTACT } from "../data/profile";
import { copyEmail } from "../utils/copyEmail";

const secondaryBtn =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-haze-400/50 hover:bg-white/10 hover:text-white";
const iconClass = "h-4 w-4 object-contain invert opacity-90";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default function Hero({ showToast }) {
  function handleCopyEmail(e) {
    e.preventDefault(); // stops mailto
    copyEmail(CONTACT.email, showToast);
  }

  return (
    <div className="glass animate-fade-up relative overflow-hidden rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_-20px_rgb(167_139_250_/_0.15)]">
      {/* Inner glow along the top edge */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-haze-400/60 to-transparent" />

      {/* Identity */}
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="relative shrink-0">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-haze-400/25 to-mint/20 blur-xl" />
          <div className="relative rounded-2xl bg-gradient-to-br from-haze-400 to-mint p-[2px]">
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              className="h-28 w-28 sm:h-36 sm:w-36 rounded-[0.9rem] object-cover"
            />
          </div>
        </div>

        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint">
            {"// "}{PROFILE.eyebrow}
          </p>
          <h1 className="text-gradient mt-3 text-3xl sm:text-5xl font-bold tracking-tight leading-tight pb-1">
            {PROFILE.name}
          </h1>
          <p className="mt-2 text-base sm:text-lg text-zinc-200">{PROFILE.school}</p>
          <p className="mt-1 text-sm sm:text-base text-zinc-400">{PROFILE.degree}</p>
        </div>
      </div>

      {/* About */}
      <section className="mt-8" aria-labelledby="about-heading">
        <h2 id="about-heading" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          {"// about me"}
        </h2>
        <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-zinc-300">
          {PROFILE.about}
        </p>
      </section>

      {/* Experience logos */}
      <section className="mt-8" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          {"// experience"}
        </h2>
        <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PROFILE.experience.map((x) => (
            <li key={x.company}>
              <Link
                to={x.to}
                className="group flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center transition hover:border-haze-300/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-8 items-center opacity-85 transition group-hover:opacity-100">
                  <CompanyLogo company={x.company} logo={x.logo} wordmark={x.wordmark} />
                </span>
                <span className="text-xs text-zinc-400">{x.role}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={CONTACT.resume}
          download={CONTACT.resumeFileName}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-haze-500 to-mint px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_20px_-6px_rgb(167_139_250_/_0.35)] transition hover:brightness-110 hover:shadow-[0_0_24px_-6px_rgb(111_214_190_/_0.4)]"
        >
          <DownloadIcon />
          Download resume
        </a>

        <a href={CONTACT.github} target="_blank" rel="noreferrer" className={secondaryBtn}>
          <img src="/icons/github.svg" alt="" className={iconClass} />
          GitHub
        </a>

        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className={secondaryBtn}>
          <img src="/icons/linkedin.svg" alt="" className={iconClass} />
          LinkedIn
        </a>

        {/* Email: copy to clipboard */}
        <a href={`mailto:${CONTACT.email}`} onClick={handleCopyEmail} className={secondaryBtn} title="Click to copy">
          <img src="/icons/email.svg" alt="" className={iconClass} />
          <span className="sm:hidden">Email</span>
          <span className="hidden sm:inline">{CONTACT.email}</span>
        </a>
      </div>
    </div>
  );
}
