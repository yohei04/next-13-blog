import { ArticleWithTags } from '@/app/api/blog/articles/route';
import { baseUrl } from '@/lib/baseUrl';

import { ArticleList } from './components/ArticleList/ArticleList';

async function getData(): Promise<ArticleWithTags[]> {
  const res = await fetch(`${baseUrl}/api/blog/articles`);
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

  // const articles = await getData();

  return (
    <section>
      <h1>記事一覧</h1>
      <ArticleList articles={[]} />
    </section>
  );
}
