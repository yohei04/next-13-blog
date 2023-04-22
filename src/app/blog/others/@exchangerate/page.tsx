import { sleep } from '@/utils/sleep';

type TExchangerate = {
  currency_pair: string;
  exchange_rate: number;
};

async function getData(): Promise<TExchangerate> {
  const res = await fetch('https://api.api-ninjas.com/v1/exchangerate?pair=USD_JPY', {
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
  const exchangeRate = await getData();

  return (
    <section>
      <h2>Exchange Rate</h2>
      <p>{exchangeRate.currency_pair}</p>
      <p>{exchangeRate.exchange_rate}</p>
    </section>
  );
}
