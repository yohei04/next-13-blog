import { FC } from 'react';

import { baseUrl } from '@/lib/baseUrl';
import { sleep } from '@/utils/sleep';
import { Comment } from '@prisma/client';

async function getComments(id: string): Promise<Comment[]> {
  const res = await fetch(`${baseUrl}/api/blog/articles/${id}/comments`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(2000);

  return res.json();
}

type Props = {
  articleId: string;
};

export async function CommentList({ articleId }: Props) {
  const comments = await getComments(articleId);

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
