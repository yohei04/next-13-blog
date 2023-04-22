import { sleep } from '@/utils/sleep';

type Weather = {
  city_name: string;
  country_code: string;
  ob_time: string;
  rh: number;
  temp: number;
  ts: number;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
};

async function getData(): Promise<Weather> {
  const res = await fetch(
    `https://api.weatherbit.io/v2.0/current?lang=ja&city=Tokyo&key=${process.env.WEATHER_API_KEY}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await sleep(1500);

  return res.json().then((data) => data.data[0]);
}

export default async function Page() {
  const weather = await getData();

  const lastUpdatedDay = new Date((weather.ts ?? 0) * 1000);
  const lastUpdatedDayStr = lastUpdatedDay.toLocaleString().slice(0, -3);

  return (
    <section>
      <h2>今日の天気</h2>
      <p>天気：{weather.weather.description}</p>
      <p>気温：{weather.temp}℃</p>
      <p>都市：{weather.city_name}</p>
      <p>{lastUpdatedDayStr}現在</p>
    </section>
  );
}
