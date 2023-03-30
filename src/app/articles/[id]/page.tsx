async function getData(id: number) {
  const res = await fetch(`http://localhost:3000/api/articles/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const article = await getData(Number(params.id));

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