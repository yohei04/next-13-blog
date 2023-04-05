import Link from 'next/link';
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

export default function Layout({ params, children }: Props) {
  return (
    <div>
      <h1>プロフィール</h1>
      <div className={styles.contents}>
        <section>
          <Suspense fallback={<Spinner />}>
            {/* @ts-expect-error Async Server Component */}
            <Profile userId={params.userId} />
          </Suspense>
        </section>
        <div className={styles.contents__bottom}>
          {/* <div>
            <Link href={`/blog/${params.userId}`}>デフォルトへ</Link>
            <Link>天気へ</Link>
          </div> */}
          <Suspense fallback={<Spinner />}>
            <div className={styles.items}>
              <section>
                {/* @ts-expect-error Async Server Component */}
                <ArticleList userId={params.userId} />
              </section>
              <section>{children}</section>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
