import type * as React from 'react';

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
    <div className="relative rounded-3xl flex justify-center items-center flex-row gap-3">
      <button
        type={type}
        className={`flex group relative h-10 w-36 overflow-hidden rounded-lg border border-neutral-400 bg-gradient-to-b from-neutral-100/50 from-30% via-neutral-600 to-pink-200 shadow-lg shadow-pink-100 active:translate-y-[0.5px] active:scale-[99%] active:shadow-md active:shadow-pink-100 disabled:cursor-not-allowed disabled:opacity-60 ${className ?? ''}`}
        {...props}
      >
        <div className="z-10 h-full w-full rounded-lg bg-gradient-to-b from-neutral-300 to-neutral-400 items-center flex justify-center">
          {children}
        </div>

        <div className="top-0 bg-gradient-to-r from-transparent via-white/90 to-transparent w-32 absolute h-full -translate-x-28 group-hover:translate-x-[5.5rem] transition duration-700"></div>
        <div className="z-20 top-0 bg-gradient-to-r from-transparent via-pink-100/15 to-transparent w-32 absolute h-full translate-x-28 group-hover:-translate-x-24 transition duration-700"></div>
        <div className="z-20 top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-32 absolute h-full translate-x-28 group-hover:-translate-x-24 transition duration-700"></div>
      </button>
    </div>
  );
}
