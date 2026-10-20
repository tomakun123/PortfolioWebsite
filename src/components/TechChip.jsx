import SkillIcon from "./SkillIcon";
import { iconFor } from "../data/techIcons";

// Logo + name chip, used for About page skills and project "Built with" rows
export default function TechChip({ name, size = "md" }) {
  const sizeClass = size === "sm" ? "py-1 pl-1.5 pr-2.5 text-xs gap-1.5" : "py-1.5 pl-2 pr-3 text-sm gap-2";

  return (
    <li
      className={`flex items-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:border-haze-400/50 hover:bg-white/[0.08] ${sizeClass}`}
    >
      <SkillIcon icon={iconFor(name)} name={name} />
      {name}
    </li>
  );
}
