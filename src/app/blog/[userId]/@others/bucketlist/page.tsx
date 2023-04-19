import { sleep } from '@/utils/sleep';

type TBucketlist = {
  item: string;
};

async function getData(): Promise<TBucketlist> {
  const res = await fetch('https://api.api-ninjas.com/v1/bucketlist', {
    headers: {
      'X-Api-Key': `${process.env.NINJAS_API_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(1000);

  return res.json();
}

export default async function Page() {
  const bucketlist = await getData();

  return (
    <section>
      <h2>Bucket List</h2>
      <p>{bucketlist.item}</p>
    </section>
  );
}
