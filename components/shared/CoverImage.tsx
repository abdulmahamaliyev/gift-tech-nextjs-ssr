import { Image as ArticleImage } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

export interface ICardCover {
  image: ArticleImage;
}

const CoverImage: FC<ICardCover> = ({ image }) => (
  <Image
    src={
      image.url ||
      'https://placehold.jp/3d4070/ffffff/600x400.png?text=No%20Photo'
    }
    alt='card__image'
    style={{ maxWidth: '100%', display: 'block', objectFit: 'cover' }}
    height={image.height || 1179}
    width={image.width || 1920}
  />
);

export default CoverImage;
