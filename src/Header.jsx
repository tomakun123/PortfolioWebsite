export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-5xl px-8 py-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg font-semibold text-zinc-900 hover:text-zinc-700"
        >
          Thomas Motais De Narbonne
        </a>

        <nav className="flex items-center gap-12 text-lg text-zinc-700">
          <a className="hover:text-zinc-900" href="#home">Home</a>
          <a href="#work">Work</a>
          <a className="hover:text-zinc-900" href="#projects">Projects</a>
          <a className="hover:text-zinc-900" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
