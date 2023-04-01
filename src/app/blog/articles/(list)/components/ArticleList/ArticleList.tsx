import { FC } from 'react';

import { ArticleWithTags } from '@/app/api/blog/articles/route';
import { Article } from '@prisma/client';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import styles from './ArticleList.module.css';

type Props = {
  articles: ArticleWithTags[];
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
