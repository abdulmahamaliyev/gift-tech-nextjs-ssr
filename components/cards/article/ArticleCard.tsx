import CoverImage from '@/components/shared/CoverImage';
import { ArticleContents } from '@/types';
import { truncate } from '@/utils/truncate';
import Link from 'next/link';
import React from 'react';
import styles from './ArticleCard.module.scss';

type Props = { article: ArticleContents };

const ArticleCard = ({ article }: Props) => {
  return (
    <Link href={`/articles/${article.id}`}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <CoverImage image={article.image} />
          </div>
          <h4>{truncate(article.title, 50)}</h4>
          <div className={styles.card__body}>
            {truncate(article.description, 140)}
          </div>
          <div className={styles.card__footer}>{article.createdAt}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
