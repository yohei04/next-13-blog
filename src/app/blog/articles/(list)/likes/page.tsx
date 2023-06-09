import { ArticleWithTags } from '@/app/api/blog/articles/route';
import { baseUrl } from '@/lib/baseUrl';

import { ArticleList } from '../components/ArticleList/ArticleList';

async function getData(): Promise<ArticleWithTags[]> {
  const res = await fetch(`${baseUrl}/api/blog/articles/likes`, { next: { revalidate: 10 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const articles = await getData();

  return (
    <div>
      <section>
        <h1>お気に入り記事一覧</h1>
        <ArticleList articles={articles} />
      </section>
    </div>
  );
}
