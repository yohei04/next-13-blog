import { ReactNode, Suspense } from 'react';

import styles from './layout.module.css';

type Props = {
  quotes: ReactNode;
  exchangerate: ReactNode;
  bucketlist: ReactNode;
  weather: ReactNode;
};

export default function Layout({ quotes, exchangerate, bucketlist, weather }: Props) {
  const meId = 1;
  const bottom = meId === 1 ? bucketlist : weather;

  return (
    <div className={styles.root}>
      <Suspense fallback={<div>Loading...</div>}>{quotes}</Suspense>
      {exchangerate}
      {bottom}
    </div>
  );
}
