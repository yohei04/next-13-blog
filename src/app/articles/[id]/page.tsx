import Link from 'next/link';

import { baseUrl } from '@/lib/baseUrl';
import { Article } from '@prisma/client';

async function getData(id: string): Promise<Article> {
  const res = await fetch(`${baseUrl}/api/articles/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const article = await getData(params.id);

  return (
    <div>
      <main>
        <article key={article.id}>
          <div>{article.id}</div>
          <div>{article.title}</div>
          <div>{article.body}</div>
          <div>{article.updatedAt.toString()}</div>
        </article>
      </main>
      <Link href={'/articles'}>記事一覧へ</Link>
    </div>
  );
}
