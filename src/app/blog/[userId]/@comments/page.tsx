import { baseUrl } from '@/lib/baseUrl';
import { sleep } from '@/utils/sleep';
import { Comment } from '@prisma/client';

async function getData(userId: string): Promise<Comment[]> {
  const res = await fetch(`${baseUrl}/api/blog/users/${userId}/comments`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(2500);

  return res.json();
}

type Props = {
  params: {
    userId: string;
  };
};

export default async function Page({ params }: Props) {
  const comments = await getData(params.userId);

  return (
    <section>
      <h2>ユーザーのコメント一覧</h2>
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
  );
}
