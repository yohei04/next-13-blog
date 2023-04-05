import { Comment } from '@prisma/client';

type Props = {
  promise: Promise<Comment[]>;
};

export async function CommentList({ promise }: Props) {
  const comments = await promise;

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
