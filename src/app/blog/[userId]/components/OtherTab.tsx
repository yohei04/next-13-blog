'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import styles from './OtherTab.module.css';

const TABS = [
  { name: '格言', path: 'quotes' },
  { name: 'Bucket List', path: 'bucketlist' },
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
        const isSelected =
          pathname.includes(tab.path) || (pathname === `/blog/${userId}` && tab.path === 'quotes');
        return (
          <Link
            key={tab.name}
            href={`/blog/${userId}/${tab.path}`}
            role="tab"
            aria-selected={isSelected}
            className={styles.tab}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
};
