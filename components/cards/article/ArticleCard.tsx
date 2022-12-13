import CoverImage from '@/components/shared/CoverImage';
import { ArticleContents } from '@/types';
import React from 'react';

type Props = { article: ArticleContents };

const ArticleCard = ({ article }: Props) => {
  return (
    <div>
      <div className='cover'>
        <CoverImage image={article.image} />
      </div>
      <div className='header'>{article.title}</div>
      <div className='body'>{article.body}</div>
      <div className='created-at'>{article.createdAt}</div>
    </div>
  );
};

export default ArticleCard;
