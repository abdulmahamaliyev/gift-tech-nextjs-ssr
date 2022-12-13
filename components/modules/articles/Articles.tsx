import ArticleCard from '@/components/cards/article/ArticleCard';
import { Articles } from '@/types';
import React from 'react';
import styles from './Articles.module.scss';

type Props = {
  articles: Articles;
};

const Articles = ({ articles }: Props) => {
  return (
    <div className={styles.container}>
      記事一覧
      <div className={styles.articles}>
        {articles.contents?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
