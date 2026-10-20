export default function Chip({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full border px-3 py-1 text-sm transition",
        active
          ? "bg-zinc-900 text-white border-zinc-900"
          : "bg-white text-zinc-900 border-zinc-200 hover:border-zinc-400",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

