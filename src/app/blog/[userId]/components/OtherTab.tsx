'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import styles from './OtherTab.module.css';

const TABS = [
  { name: '格言', path: 'quotes' },
  { name: '天気', path: 'weather' },
] as const;

type Props = {
  userId: string;
};

export const OtherTab: FC<Props> = ({ userId }) => {
  const pathname = usePathname();

  return (
    <div role="tablist" className={styles.root}>
      {TABS.map((tab) => {
        const isActive = pathname.includes(tab.path);
        return (
          <Link
            key={tab.name}
            href={`/blog/${userId}/${tab.path}`}
            role="tab"
            aria-selected={isActive}
            className={styles.tab}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
};
