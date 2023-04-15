import { sleep } from '@/utils/sleep';

type TQuote = {
  quote: string;
  author: string;
  category: string;
};

async function getData(): Promise<TQuote[]> {
  const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
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

export default async function Default() {
  const quotes = await getData();

  return (
    <section>
      <h2>今日の格言</h2>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.quote}>
            <div>
              <p>{quote.quote}</p>
              <p>作者: {quote.author}</p>
              <p>カテゴリー: {quote.category}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
