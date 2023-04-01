import Link from 'next/link';

import { ArticleWithTags } from '@/app/api/blog/articles/route';
import { baseUrl } from '@/lib/baseUrl';

import { ArticleList } from '../../components/ArticleList/ArticleList';

async function getData(): Promise<ArticleWithTags[]> {
  const res = await fetch(`${baseUrl}/api/blog/articles`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const articles = await getData();
  const filteredArticles = articles.filter((article) =>
    article.tags.some((tag) => tag.name === params.slug)
  );

  return (
    <section>
      <h1>該当タグの記事一覧</h1>
      <ArticleList articles={filteredArticles} />
    </section>
  );
}
