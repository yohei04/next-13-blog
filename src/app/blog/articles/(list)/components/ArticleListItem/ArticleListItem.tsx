import Link from 'next/link';
import { FC } from 'react';

import { ArticleWithTags } from '@/app/api/blog/articles/route';

import { TagList } from '../TagList/TagList';
import styles from './ArticleListItem.module.css';

type Props = {
  article: ArticleWithTags;
};

export const ArticleListItem: FC<Props> = ({ article }) => {
  return (
    <Link className={styles.root} href={`/blog/articles/${article.id}`}>
      <div>{article.id}</div>
      <div>{article.title}</div>
      {/* <TagList tags={article.tags} /> */}
    </Link>
  );
};
