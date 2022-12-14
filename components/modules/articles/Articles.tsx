import ArticleCard from '@/components/cards/article/ArticleCard';
import { Articles } from '@/types';
import React from 'react';
import styles from './Articles.module.scss';

type Props = {
  articles: Articles;
};

const Articles = ({ articles }: Props) => {
  return (
    <div className={styles.main}>
      <h1>記事一覧</h1>
      <ul className={styles.cards}>
        {articles.contents?.map((article) => (
          <li className={styles.cards_item} key={article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
