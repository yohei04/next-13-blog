
import { FC } from 'react';

import { Tag } from '@prisma/client';

import styles from './TagList.module.css';

type Props = {
  tags: Tag[];
};

export const TagList: FC<Props> = ({ tags }) => {
  return (
    <div className={styles.root}>
      <p>タグ一覧:</p>
      <ul className={styles.list}>
        {tags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
};
