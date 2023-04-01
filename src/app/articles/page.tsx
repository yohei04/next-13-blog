import Link from 'next/link';

import { baseUrl } from '@/lib/baseUrl';
import { Article } from '@prisma/client';

import { ArticleList } from './components/ArticleList/ArticleList';

async function getData(): Promise<Article[]> {
  const res = await fetch(`${baseUrl}/api/articles`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log({ baseUrl });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  // const articles = await prisma.article.findMany({
  //   where: {
  //     published: false,
  //   },
  // });

  const articles = await getData();

  return (
    <div>
      <section>
        <h1>記事一覧</h1>
        <ArticleList articles={articles} />
      </section>
      <Link href={'/'}>トップへ</Link>
    </div>
  );
}
