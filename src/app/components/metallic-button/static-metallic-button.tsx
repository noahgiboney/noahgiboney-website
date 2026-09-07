import type * as React from 'react';

import {
  ShineLayers,
  shinyLabelClasses,
  shinyShellClasses,
} from './metallic-button';

interface StaticMetallicButtonProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Non-interactive twin of MetallicButton, for wrapping inside a Link so the
 * anchor stays the interactive element.
 */
export default function StaticMetallicButton({
  children,
  className,
}: StaticMetallicButtonProps) {
  return (
    <span
      className={`${shinyShellClasses} group-hover/link:shadow-xl group-hover/link:shadow-pink-100 ${className ?? ''}`}
    >
      <span className={shinyLabelClasses}>{children}</span>
      <ShineLayers />
    </span>
  );
}
