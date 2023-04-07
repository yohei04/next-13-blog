'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

import { baseUrl } from '@/lib/baseUrl';
import { Comment } from '@prisma/client';

type Props = {
  articleId: string;
};

export function AddComment({ articleId }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsFetching(true);

    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());

    console.log({ formData, formJson, articleId });

    // Mutate external data source
    await fetch(`${baseUrl}/api/blog/articles/${articleId}/comments`, {
      method: form.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: formJson.content }),
    });
    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <input name="content" type="text" />
      <button type="submit">コメント追加</button>
    </form>
  );
}
