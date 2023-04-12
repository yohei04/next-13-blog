import { baseUrl } from '@/lib/baseUrl';
import { sleep } from '@/utils/sleep';
import { User } from '@prisma/client';

async function getUser(userId: string): Promise<User> {
  const res = await fetch(`${baseUrl}/api/blog/users/${userId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(2000);

  return res.json();
}

type Props = {
  params: {
    userId: string;
  };
};

export default async function Page({ params }: Props) {
  // const me = await getUser(params.userId);

  return (
    <div>
      {/* <div>{me.id}</div> */}
      {/* <div>{me.name}</div> */}
      {/* <div>{me.email}</div> */}
    </div>
  );
}
