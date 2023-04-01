import Link from 'next/link';

import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
};

const HEADER_MENUS = [
  { name: 'すべて', path: '/blog/articles' },
  // { name: 'Tech', path: '/tags/tech/articles' },
  // { name: 'Idea', path: '/tags/tech/articles' },
] as const;

export default function Layout({ children }: Props) {
  return (
    <>
      <header className={styles.header}>
        <h2>ヘッダー:</h2>
        <nav>
          <ul className={styles.header__list}>
            {HEADER_MENUS.map((headerMenu) => (
              <li key={headerMenu.name}>
                <Link href={headerMenu.path}>{headerMenu.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className={styles.content}>{children}</div>
    </>
  );
}
