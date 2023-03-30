import { Article } from '@prisma/client';

async function getData(): Promise<Article[]> {
  const res = await fetch('http://localhost:3000/api/articles');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  // const articles = await prisma.article.findMany({
  //   where: {
  //     published: false,
  //   },
  // });

  const articles = await getData();

  console.log({ articles });

  return (
    <main>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <div>{article.id}</div>
            <div>{article.title}</div>
            <div>{article.body}</div>
            <div>{article.updatedAt.toString()}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
