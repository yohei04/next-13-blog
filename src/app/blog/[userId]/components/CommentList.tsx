import { baseUrl } from '@/lib/baseUrl';
import { sleep } from '@/utils/sleep';
import { Comment } from '@prisma/client';

async function getData(id: string): Promise<Comment[]> {
  const res = await fetch(`${baseUrl}/api/blog/users/${id}/articles`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(3000);

  return res.json();
}

type Props = {
  articleId: string;
};

export async function CommentList({ articleId }: Props) {
  const comments = await getData(articleId);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <div>{comment.id}</div>
          <div>{comment.content}</div>
          <div>{comment.updatedAt.toString()}</div>
        </li>
      ))}
    </ul>
  );
}
