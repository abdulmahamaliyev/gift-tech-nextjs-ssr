import CoverImage from '@/components/shared/CoverImage';
import { ArticleContents } from '@/types';
import { truncate } from '@/utils/truncate';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './ArticleCard.module.scss';

type Props = { article: ArticleContents };

const ArticleCard = ({ article }: Props) => {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <CoverImage image={article.image} />
        </div>
        <div
          className={styles.card__body}
          onClick={() => router.push(`/articles/${article.id}`)}
        >
          <h4>{truncate(article.title, 50)}</h4>
          <div>{truncate(article.description, 140)}</div>
        </div>
        <div className={styles.card__footer}>
          {new Date(article.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
