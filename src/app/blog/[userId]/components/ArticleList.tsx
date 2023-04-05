import Link from 'next/link';
import { FC } from 'react';

import { ArticleWithTags } from '@/app/api/blog/articles/route';
import { baseUrl } from '@/lib/baseUrl';
import { sleep } from '@/utils/sleep';
import { Article } from '@prisma/client';

import { ArticleListItem } from '../../articles/(list)/components/ArticleListItem/ArticleListItem';

async function getData(userId: string): Promise<ArticleWithTags[]> {
  const res = await fetch(`${baseUrl}/api/blog/users/${userId}/articles`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(3000);

  return res.json();
}

type Props = {
  userId: string;
};

export async function ArticleList({ userId }: Props) {
  const articles = await getData(userId);

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link href={`/blog/${userId}/articles/${article.id}/comments`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  );
}
