export default function ContactCard({ showToast }) {
  const email = "tsm6956@nyu.edu";
  const github = "https://github.com/tomakun123";
  const linkedin = "https://www.linkedin.com/in/thomas-motais-de-narbonne/";

  async function handleCopyEmail(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      showToast?.("Email copied");
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        showToast?.("Email copied");
      } catch {
        showToast?.("Couldn’t copy email");
      }
    }
  }


  return (
    <div className="rounded-2xl border border-zinc-200 bg-white pl-10 pb-5 p-3 shadow-sm">

      <p className="mt-2 max-w-4xl text-lg text-zinc-600">
        Interested in internships, research, or collaboration?  
        I’m always happy to talk about projects, systems, and engineering work.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {/* Email */}
        <div>
          <p className="text-base font-medium uppercase tracking-wide text-zinc-500">
            Email
          </p>
          <a
            href={`mailto:${email}`}
            onClick={handleCopyEmail}
            className="mt-1 inline-block text-lg underline hover:no-underline"
            title="Click to copy"
          >
            {email}
          </a>
        </div>

        {/* LinkedIn */}
        <div>
          <p className="text-base font-medium uppercase tracking-wide text-zinc-500">
            LinkedIn
          </p>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-lg underline hover:no-underline"
          >
            View profile
          </a>
        </div>

        {/* GitHub */}
        <div>
          <p className="text-base font-medium uppercase tracking-wide text-zinc-500">
            GitHub
          </p>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-lg underline hover:no-underline"
          >
            View repositories
          </a>
        </div>
      </div>
    </div>
  );
}
