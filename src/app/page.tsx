import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/blog">ブログ</Link>
    </main>
  );
}
