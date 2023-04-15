import Link from 'next/link';
import { ReactNode } from 'react';

import { OtherTab } from './components/OtherTab';
import styles from './layout.module.css';

type Props = {
  params: {
    userId: string;
  };
  profile: ReactNode;
  articles: ReactNode;
  comments: ReactNode;
  quotes: ReactNode;
  others: ReactNode;
  weather: ReactNode;
  children: ReactNode;
};

export default async function Layout({
  params,
  profile,
  articles,
  comments,
  others,
  children,
}: Props) {
  // const bottom = params.userId === '1' ? quotes : weather;

  return (
    <div>
      <h1>プロフィール</h1>
      {/* {children} */}
      <div className={styles.contents}>
        <div>{profile}</div>
        <div className={styles.contents__bottom}>
          <div>{articles}</div>
          <div>{comments}</div>
        </div>
      </div>
      <OtherTab userId={params.userId} />
      <div>{others}</div>
    </div>
  );
}
