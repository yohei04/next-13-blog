import { ReactNode, Suspense } from 'react';

import { Spinner } from '@/components/Spinner';

import { ArticleList } from './components/ArticleList';
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
        <Suspense fallback={<Spinner />}>
          {/* @ts-expect-error Async Server Component */}
          <Profile userId={params.userId} />
        </Suspense>

        <div className={styles.contents__bottom}>
          <Suspense fallback={<Spinner />}>
            {/* @ts-expect-error Async Server Component */}
            <ArticleList userId={params.userId} />
          </Suspense>
          {children}
        </div>
      </div>
      {/* <OtherTab userId={params.userId} /> */}
      {/* <div>{others}</div> */}
    </div>
  );
}
