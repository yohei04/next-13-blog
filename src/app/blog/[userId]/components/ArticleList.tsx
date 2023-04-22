import Link from 'next/link';

import { ArticleWithTags } from '@/app/api/blog/articles/route';
import { baseUrl } from '@/lib/baseUrl';
import { sleep } from '@/utils/sleep';

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
    <section>
      <h2>ユーザーの記事一覧</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/blog/${userId}/articles/${article.id}/comments`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
