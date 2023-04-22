import { ReactNode, Suspense } from 'react';

import styles from './layout.module.css';

type Props = {
  quotes: ReactNode;
  bucketlist: ReactNode;
  weather: ReactNode;
};

export default function Layout({ quotes, bucketlist, weather }: Props) {
  return (
    <div className={styles.root}>
      <Suspense fallback={<div>Loading...</div>}>{quotes}</Suspense>
      {bucketlist}
      {weather}
    </div>
  );
}
