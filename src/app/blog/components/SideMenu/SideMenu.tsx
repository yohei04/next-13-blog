'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import styles from './SideMenu.module.css';

const getSideMenus = (userId: string) => {
  return [
    // { name: 'ホーム', path: '/' },
    { name: 'ブログホーム', path: '/blog' },
    { name: '記事一覧', path: '/blog/articles' },
    { name: 'お気に入り', path: '/blog/articles/likes' },
    { name: 'プロフィール', path: `/blog/${userId}` },
    // { name: '設定', path: '/blog/setting' },
  ] as const;
};

type Props = {};

export const SideMenu: FC<Props> = () => {
  const pathname = usePathname();

  const userId = '1';
  const sideMenus = getSideMenus(userId);

  return (
    <aside className={styles.root}>
      <nav>
        <ul>
          {sideMenus.map((sideMenu) => {
            const isSelected = pathname === sideMenu.path;

            return (
              <li key={sideMenu.name}>
                <Link href={sideMenu.path} aria-selected={isSelected} className={styles.item}>
                  {sideMenu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
