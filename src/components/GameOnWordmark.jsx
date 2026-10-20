// GameOn Scheduler (no longer operating) never published a logo file; its site
// used a pill mark above "GameOn" in bold periwinkle. This recreates that.
export default function GameOnWordmark() {
  return (
    <span role="img" aria-label="GameOn Scheduler" className="flex items-center gap-2">
      <span aria-hidden="true" className="h-3 w-6 rounded-full bg-[#97a7db] ring-2 ring-[#97a7db]/30" />
      <span aria-hidden="true" className="text-xl font-bold tracking-tight text-[#97a7db]">
        GameOn
      </span>
    </span>
  );
}
