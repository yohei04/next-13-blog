import { baseUrl } from '@/lib/baseUrl';
import { Article, Comment } from '@prisma/client';

async function getArticle(id: string): Promise<Article> {
  const res = await fetch(`${baseUrl}/api/blog/articles/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getComments(id: string): Promise<Comment[]> {
  const res = await fetch(`${baseUrl}/api/blog/articles/${id}/comments`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const articleData = getArticle(params.id);
  const commentsData = getComments(params.id);

  const [article, comments] = await Promise.all([articleData, commentsData]);

  return (
    <section>
      <h1>記事詳細</h1>
      <article key={article.id}>
        <div>
          <div>{article.id}</div>
          <div>{article.title}</div>
          <div>{article.body}</div>
          <div>{article.updatedAt.toString()}</div>
        </div>
        <section>
          <h2>コメント一覧</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <div>{comment.id}</div>
                <div>{comment.content}</div>
                <div>{comment.updatedAt.toString()}</div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
}
