import type * as React from 'react';

/**
 * Shared shell for the shiny metallic buttons. Sized by its content instead of a
 * fixed width so labels of any length stay centered.
 */
export const shinyShellClasses =
  'group relative inline-flex h-11 min-w-[9rem] overflow-hidden rounded-xl border border-neutral-400/80 bg-gradient-to-b from-neutral-100/50 from-30% via-neutral-600 to-pink-200 shadow-lg shadow-pink-100/70 transition-shadow';

export const shinyLabelClasses =
  'z-10 flex h-full w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-neutral-300 to-neutral-400 px-6 text-sm font-medium tracking-wide text-neutral-900';

export function ShineLayers() {
  return (
    <>
      <span className="absolute top-0 h-full w-32 -translate-x-28 bg-gradient-to-r from-transparent via-white/90 to-transparent transition duration-700 group-hover:translate-x-[7rem]" />
      <span className="absolute top-0 z-20 h-full w-32 translate-x-28 bg-gradient-to-r from-transparent via-pink-100/15 to-transparent transition duration-700 group-hover:-translate-x-24" />
      <span className="absolute top-0 z-20 h-full w-32 translate-x-28 bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:-translate-x-24" />
    </>
  );
}

interface MetallicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function MetallicButton({
  children,
  className,
  type = 'button',
  ...props
}: MetallicButtonProps) {
  return (
    <button
      type={type}
      className={`${shinyShellClasses} active:translate-y-[0.5px] active:scale-[99%] active:shadow-md disabled:cursor-not-allowed disabled:opacity-60 ${className ?? ''}`}
      {...props}
    >
      <span className={shinyLabelClasses}>{children}</span>
      <ShineLayers />
    </button>
  );
}
