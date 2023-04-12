import { Suspense } from 'react';

import { Spinner } from '@/components/Spinner';

import { CommentList } from '../../../../components/CommentList';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2>コメント一覧</h2>
      <Suspense fallback={<Spinner />}>
        {/* @ts-expect-error Async Server Component */}
        <CommentList articleId={params.id} />
      </Suspense>
    </div>
  );
}
