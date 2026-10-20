import TechStack from "./TechStack";
import LinksRow from "./LinksRow";

export default function ProfileCard({ showToast }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        {/* profile image */}
        <img
          src="/ProfilePicture.png"
          alt="Profile"
          className="h-25 w-25 rounded-2xl object-cover border border-zinc-200"
        />

        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Thomas Motais De Narbonne
          </h1>
          <p className="mt-1 text-xl text-zinc-600">
            Computer Science Student @ NYU Tandon School of Engineering
          </p>
          <p className="mt-1 text-l text-zinc-600">
           Software Engineering • Cybersecurity • Systems
          </p>
        </div>
      </div>

      <hr className="my-6 border-zinc-200" />

      {/* About Me */}
      <div className="mt-4 flex flex-wrap gap-2">
        <h2 className="text-lg font-bold tracking-tight mb-2">
          About Me
        </h2>
        <p>
          I’m a CS student at NYU Tandon focused on building practical systems —
          security tooling, automation pipelines, and full-stack applications.
          I like projects with real-world constraints: reliability, scale, and
          clean interfaces.
        </p>
      </div>
      
      <hr className="my-6 border-zinc-200" />

      {/* Skills & Focus */}
      <section className="mt-6">
        <h2 className="text-lg font-bold tracking-tight mb-2">
          Skills & Focus
        </h2>

        <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
          <h3 className="font-semibold">Programming Languages:</h3>
          <p>Python, C++, JavaScript, SQL (MySQL, PostgreSQL)</p>

          <h3 className="font-semibold">Frameworks / Cloud:</h3>
          <p>React, Next.js, Flask, Azure, Google Cloud Functions, Supabase</p>

          <h3 className="font-semibold">Tools:</h3>
          <p>Neo4j, Git/GitHub, Linux, PowerShell, n8n, Slack API, Chrome Extensions API, Jupyter, Anthropic API</p>

          <h3 className="font-semibold">Languages:</h3>
          <p>English (Fluent), French (Fluent), Japanese (Fluent)</p>
        </div>
      </section>

      <hr className="my-6 border-zinc-200" />

      {/* Tech Stack */}
      <TechStack />

      <hr className="my-6 border-zinc-200" />

      {/* Links */}
      <LinksRow onCopyEmail={showToast} />
    </div>
  );
}
