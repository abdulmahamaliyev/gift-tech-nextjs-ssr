import CoverImage from '@/components/shared/CoverImage';
import { ArticleContents } from '@/types';
import { truncate } from '@/utils/truncate';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './ArticleDetail.module.scss';

export interface IArticleDetail {
  article: ArticleContents;
}

const ArticleDetail: React.FC<IArticleDetail> = ({ article }) => {
  const router = useRouter();

  return (
    <section>
      <CoverImage image={article.image} />
      <h4>{article.title}</h4>
      <h6>{article.createdAt}</h6>
      <div
        // className={styles.card__body}
        dangerouslySetInnerHTML={{
          __html: article.body,
        }}
      />

      <Link href={'/articles'}>一覧へ戻る</Link>
    </section>
  );
};

export default ArticleDetail;
