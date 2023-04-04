import { FC } from 'react';

import styles from './Spinner.module.css';

type Props = {
  color?: 'primary' | 'secondary' | 'tertiary';
};

export const Spinner: FC<Props> = ({ color = 'primary' }) => {
  return (
    <div className={styles.root}>
      <div className={`${styles.spinner} ${styles[color]}`} />
    </div>
  );
};
