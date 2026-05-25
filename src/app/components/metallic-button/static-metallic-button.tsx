import type * as React from 'react';

interface StaticMetallicButtonProps {
  children: React.ReactNode;
}

export default function StaticMetallicButton({
  children,
}: StaticMetallicButtonProps) {
  return (
    <div className="relative flex flex-row items-center justify-center gap-3 rounded-3xl">
      <div className="group relative flex h-10 w-36 overflow-hidden rounded-lg border border-neutral-400 bg-gradient-to-b from-neutral-100/50 from-30% via-neutral-600 to-pink-200 p-[1.5px] shadow-lg shadow-pink-100">
        <div className="z-10 flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-b from-neutral-300 to-neutral-400">
          {children}
        </div>

        <div className="absolute top-0 h-full w-32 -translate-x-28 bg-gradient-to-r from-transparent via-white/90 to-transparent transition duration-700 group-hover:translate-x-[5.5rem]" />
        <div className="absolute top-0 z-20 h-full w-32 translate-x-28 bg-gradient-to-r from-transparent via-pink-100/15 to-transparent transition duration-700 group-hover:-translate-x-24" />
        <div className="absolute top-0 z-20 h-full w-32 translate-x-28 bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:-translate-x-24" />
      </div>
    </div>
  );
}
