import { ReactNode } from 'react';

import styles from './layout.module.css';

type Props = {
  profile: ReactNode;
  articles: ReactNode;
  comments: ReactNode;
};

export default async function Layout({ profile, articles, comments }: Props) {
  return (
    <div>
      <h1>プロフィール</h1>
      <div className={styles.contents}>
        <div>{profile}</div>
        <div className={styles.contents__bottom}>
          <div>{articles}</div>
          <div>{comments}</div>
        </div>
      </div>
    </div>
  );
}
