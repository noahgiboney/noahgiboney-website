import type { CSSProperties } from 'react';

/**
 * NMG Systems lockup — BRAND_SPEC.md §1.
 *
 * Every dimension is derived from `size` (the wordmark font-size) so the mark
 * stays on-brand at any scale. The one value that never drifts is the circle
 * gap: 46.67% of circle diameter. That ratio is what makes the trio read as a
 * single mark rather than three loose dots.
 */

const TRIO = {
  dark: ['#7C7CFF', '#4DA6FF', '#58E0B8'],
  light: ['#5A5AEB', '#1F8CE8', '#17B98D'],
} as const;

const INK = { dark: '#F3F3F1', light: '#0E0F12' } as const;
const TAGLINE_INK = { dark: '#8B9099', light: '#5D6068' } as const;

const GAP_RATIO = 0.4667;
const DOT_RATIO = { stacked: 0.37, horizontal: 0.43 } as const;
const STAGGER_MS = 60;

export type NmgLogoVariant = 'stacked' | 'horizontal' | 'mark';
export type NmgLogoTheme = 'dark' | 'light';

interface NmgLogoProps {
  /** Wordmark font-size in px. Minimum 15px before switching to `mark`. */
  size?: number;
  variant?: NmgLogoVariant;
  theme?: NmgLogoTheme;
  showTagline?: boolean;
  /**
   * Override the derived circle diameter. Spec §4 sizes the header lockup at a
   * 19px wordmark with 11px circles, which is heavier than the 43% rule; the
   * gap still follows GAP_RATIO off whatever diameter lands here.
   */
  dotSize?: number;
  /** Fade the circles in 60ms apart on first paint (spec §5). */
  animate?: boolean;
  className?: string;
}

export default function NmgLogo({
  size = 40,
  variant = 'stacked',
  theme = 'light',
  showTagline = false,
  dotSize,
  animate = false,
  className,
}: NmgLogoProps) {
  const trio = TRIO[theme];
  const dot =
    dotSize ?? size * (variant === 'stacked' ? DOT_RATIO.stacked : DOT_RATIO.horizontal);
  const gap = dot * GAP_RATIO;

  const dots = (
    <span style={{ display: 'flex', gap: `${gap}px` }}>
      {trio.map((color, index) => (
        <span
          key={color}
          className={animate ? 'nmg-dot' : undefined}
          style={{
            width: dot,
            height: dot,
            borderRadius: '50%',
            background: color,
            ...(animate ? { animationDelay: `${index * STAGGER_MS}ms` } : null),
          }}
        />
      ))}
    </span>
  );

  if (variant === 'mark') {
    return <span className={className}>{dots}</span>;
  }

  const wordmarkStyle: CSSProperties = {
    fontFamily: 'var(--font-archivo), system-ui, sans-serif',
    fontWeight: 700,
    fontSize: size,
    letterSpacing: '0.04em',
    lineHeight: 0.92,
    color: INK[theme],
  };

  if (variant === 'horizontal') {
    return (
      <span
        className={className}
        style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.35 }}
      >
        {dots}
        <span style={wordmarkStyle}>NMG</span>
      </span>
    );
  }

  // Stacked: cluster horizontally centered above the wordmark (§1), with the
  // two gaps set independently — 17% to the wordmark, 10% to the tagline.
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {dots}
      <span style={{ ...wordmarkStyle, marginTop: size * 0.17 }}>NMG</span>
      {showTagline ? (
        <span
          style={{
            fontFamily: 'var(--font-mono), ui-monospace, monospace',
            fontSize: Math.max(9, size * 0.135),
            letterSpacing: '0.30em',
            lineHeight: 1.4,
            color: TAGLINE_INK[theme],
            marginTop: size * 0.1,
          }}
        >
          SYSTEMS LLC
        </span>
      ) : null}
    </span>
  );
}
