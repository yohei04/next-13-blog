import { Suspense } from 'react';

import { baseUrl } from '@/lib/baseUrl';
import { sleep } from '@/utils/sleep';
import { Article, Comment } from '@prisma/client';

import { CommentList } from '../(list)/components/CommentList/CommentList';
import { Spinner } from '../../../../components/Spinner';

async function getArticle(id: string): Promise<Article> {
  const res = await fetch(`${baseUrl}/api/blog/articles/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  sleep(3000);

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);

  return (
    <section>
      <h1>記事詳細</h1>
      <article key={article.id}>
        <div>
          <div>{article.id}</div>
          <div>{article.title}</div>
          <div>{article.body}</div>
          <div>{article.updatedAt.toString()}</div>
        </div>
        <section>
          <h2>コメント一覧</h2>
          <Suspense fallback={<Spinner />}>
            {/* @ts-expect-error Async Server Component */}
            <CommentList articleId={params.id} />
          </Suspense>
        </section>
      </article>
    </section>
  );
}
