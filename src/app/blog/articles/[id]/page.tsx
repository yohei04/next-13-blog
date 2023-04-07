import { Suspense } from 'react';

import { baseUrl } from '@/lib/baseUrl';
import { sleep } from '@/utils/sleep';
import { Article, Comment } from '@prisma/client';

import { CommentList } from '../(list)/components/CommentList/CommentList';
import { Spinner } from '../../../../components/Spinner';
import { AddComment } from './components/AddComment';

async function getArticle(id: string): Promise<Article> {
  const res = await fetch(`${baseUrl}/api/blog/articles/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(2000);

  return res.json();
}

async function getComments(id: string): Promise<Comment[]> {
  const res = await fetch(`${baseUrl}/api/blog/articles/${id}/comments`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(2500);

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const articleData = getArticle(params.id);
  const commentsData = getComments(params.id);

  const article = await articleData;

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
          <AddComment articleId={params.id} />
          <h2>コメント一覧</h2>
          <Suspense fallback={<Spinner />}>
            {/* @ts-expect-error Async Server Component */}
            <CommentList promise={commentsData} />
          </Suspense>
        </section>
      </article>
    </section>
  );
}
