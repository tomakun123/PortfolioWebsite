// src/utils/renderEmphasis.jsx
// Turns "text with **key phrases**" into text with <strong> highlights.
export function renderEmphasis(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-medium text-white">
        {part}
      </strong>
    ) : (
      part
    )
  );
}
