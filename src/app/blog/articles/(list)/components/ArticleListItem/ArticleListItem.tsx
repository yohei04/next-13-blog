import Link from 'next/link';
import { FC } from 'react';

import { Article } from '@prisma/client';

import styles from './ArticleListItem.module.css';

type Props = {
  article: Article;
};

export const ArticleListItem: FC<Props> = ({ article }) => {
  return (
    <Link className={styles.root} href={`/blog/articles/${article.id}`}>
      <div>{article.id}</div>
      <div>{article.title}</div>
    </Link>
  );
};
