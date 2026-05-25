import type { ReactNode } from 'react';

import styles from './pagebody.module.css';

interface PageBodyProps {
  children: ReactNode;
  title: string;
}

export default function PageBody({ children, title }: PageBodyProps) {
  return (
    <div className={styles.page}>
      <h1 className="text-5xl">{title}</h1>
      {children}
    </div>
  );
}
