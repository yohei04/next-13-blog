import { FC } from 'react';

import { Article } from '@prisma/client';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import styles from './ArticleList.module.css';

type Props = {
  articles: Article[];
};

export const ArticleList: FC<Props> = ({ articles }) => {
  return (
    <ul className={styles.root}>
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleListItem article={article} />
        </li>
      ))}
    </ul>
  );
};
