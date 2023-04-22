import Link from 'next/link';
import { ReactNode } from 'react';

import { ArticleList } from './components/ArticleList';
import { OtherTab } from './components/OtherTab';
import { Profile } from './components/Profile';
import styles from './layout.module.css';

type Props = {
  params: {
    userId: string;
  };
  children: ReactNode;
};

export default async function Layout({ params, children }: Props) {
  return (
    <div>
      <h1>プロフィール</h1>
      <div className={styles.contents}>
        {/* @ts-expect-error Async Server Component */}
        <Profile userId={params.userId} />
        <div className={styles.contents__bottom}>
          {/* @ts-expect-error Async Server Component */}
          <ArticleList userId={params.userId} />
          {children}
        </div>
      </div>
      {/* <OtherTab userId={params.userId} /> */}
      {/* <div>{others}</div> */}
    </div>
  );
}
