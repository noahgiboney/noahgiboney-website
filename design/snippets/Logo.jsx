/* NMG Systems logo — React. Geometry is derived, so every size stays on-brand.
   variant: "stacked" | "horizontal" | "mark"
   theme:   "dark" (bright trio) | "light" (deep trio)          */

const TRIO = {
  dark:  ["#7C7CFF", "#4DA6FF", "#58E0B8"],
  light: ["#5A5AEB", "#1F8CE8", "#17B98D"],
};
const INK = { dark: "#F3F3F1", light: "#0E0F12" };
const MUTED = { dark: "#8B9099", light: "#5D6068" };

export function NmgLogo({ size = 40, variant = "stacked", theme = "dark", showTagline = false }) {
  const trio = TRIO[theme];
  const dot = variant === "stacked" ? size * 0.37 : size * 0.43;
  const gap = dot * 0.4667;                       // fixed construction ratio

  const dots = (
    <div style={{ display: "flex", gap: `${gap}px` }}>
      {trio.map((c) => (
        <div key={c} style={{ width: dot, height: dot, borderRadius: "50%", background: c }} />
      ))}
    </div>
  );

  if (variant === "mark") return dots;

  const word = (
    <div style={{
      fontFamily: '"Archivo", sans-serif',
      fontWeight: 700,
      fontSize: size,
      letterSpacing: "0.04em",
      lineHeight: 0.92,
      color: INK[theme],
    }}>NMG</div>
  );

  if (variant === "horizontal") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: size * 0.35 }}>
        {dots}{word}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: size * 0.17 }}>
      {dots}
      {word}
      {showTagline && (
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: Math.max(9, size * 0.135),
          letterSpacing: "0.30em",
          color: MUTED[theme],
        }}>SYSTEMS LLC</div>
      )}
    </div>
  );
}
