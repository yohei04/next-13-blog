import { Article } from '@prisma/client';

async function getData(id: string): Promise<Article> {
  const res = await fetch(`https://next-13-blog-five.vercel.app/api/articles/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const article = await getData(params.id);

  return (
    <main>
      <div key={article.id}>
        <div>{article.id}</div>
        <div>{article.title}</div>
        <div>{article.body}</div>
        <div>{article.updatedAt.toString()}</div>
      </div>
    </main>
  );
}
