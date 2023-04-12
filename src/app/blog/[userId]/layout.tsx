import Link from 'next/link';
import { ReactNode, Suspense } from 'react';

import { ArticleWithTags } from '@/app/api/blog/articles/route';
import { Spinner } from '@/components/Spinner';
import { baseUrl } from '@/lib/baseUrl';
import { sleep } from '@/utils/sleep';

import { ArticleList } from './components/ArticleList';
import { Profile } from './components/Profile';
import styles from './layout.module.css';

async function getData(userId: string): Promise<ArticleWithTags[]> {
  const res = await fetch(`${baseUrl}/api/blog/users/${userId}/articles`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(3000);

  return res.json();
}

type Props = {
  params: {
    userId: string;
  };
  profile: ReactNode;
  articlesInfo: ReactNode;
  children: ReactNode;
};

export default async function Layout({ params, profile, articlesInfo, children }: Props) {
  const articles = await getData(params.userId);

  return (
    <div>
      <h1>プロフィール</h1>
      <div className={styles.contents}>
        <section>{profile}</section>
        <div className={styles.contents__bottom}>
          <section>
            <ul>
              {articles.map((article) => (
                <li key={article.id}>
                  <Link href={`/blog/${params.userId}/articles/${article.id}/comments`}>
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>{articlesInfo}</section>
        </div>
      </div>
    </div>
  );
}
