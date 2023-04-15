import Link from 'next/link';

import { ArticleWithTags } from '@/app/api/blog/articles/route';
import { baseUrl } from '@/lib/baseUrl';
import { sleep } from '@/utils/sleep';

async function getData(userId: string): Promise<ArticleWithTags[]> {
  const res = await fetch(`${baseUrl}/api/blog/users/${userId}/articles`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(2000);

  return res.json();
}

type Props = {
  params: {
    userId: string;
  };
};

export default async function Default({ params }: Props) {
  const articles = await getData(params.userId);

  return (
    <section>
      <h2>ユーザーの記事一覧</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <div>
              <span>{article.id}</span>
              <p>{article.title}</p>
              <p>{article.description}</p>
              <p>{article.createdAt.toString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
