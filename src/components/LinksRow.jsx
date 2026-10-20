export default function LinksRow({ onCopyEmail }) {
  const resume = "/Thomas Motais De Narbonne Resume.pdf";
  const github = "https://github.com/tomakun123";
  const linkedin = "https://www.linkedin.com/in/thomas-motais-de-narbonne/";
  const email = "tsm6956@nyu.edu";

  const linkClass =
    "flex items-center gap-3 px-10 py-2 text-lg text-zinc-700 underline hover:no-underline transition-colors hover:text-zinc-900";
  const iconClass = "h-5 w-5 object-contain";

  async function handleCopyEmail(e) {
    e.preventDefault(); // stops mailto
    try {
      await navigator.clipboard.writeText(email);
      onCopyEmail?.("Email copied");
    } catch {
      // fallback if clipboard API is blocked
      try {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        onCopyEmail?.("Email copied");
      } catch {
        onCopyEmail?.("Couldn’t copy email");
      }
    }
  }

  return (
    <div className="mt-6 flex justify-center">
      <nav className="flex items-center divide-x divide-zinc-300 rounded-xl bg-white px-4">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          download="Thomas_Motais_De_Narbonne_Resume.pdf"
          className={linkClass}
        >
          <img src="/icons/resume.svg" alt="" className={iconClass} />
          <span>Resume</span>
        </a>

        <a href={github} target="_blank" rel="noreferrer" className={linkClass}>
          <img src="/icons/github.svg" alt="" className={iconClass} />
          <span>GitHub</span>
        </a>

        <a href={linkedin} target="_blank" rel="noreferrer" className={linkClass}>
          <img src="/icons/linkedin.svg" alt="" className={iconClass} />
          <span>LinkedIn</span>
        </a>

        {/* Email: copy to clipboard */}
        <a href={`mailto:${email}`} onClick={handleCopyEmail} className={linkClass}>
          <img src="/icons/email.svg" alt="" className={iconClass} />
          <span>{email}</span>
        </a>
      </nav>
    </div>
  );
}
