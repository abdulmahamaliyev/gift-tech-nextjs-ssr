import { mockArticle } from '@/types';
import { IArticles } from './Articles';

const base: IArticles = {
  articles: {
    contents: Array(10).fill(mockArticle),
    limit: 10,
    totalCount: 10,
    offset: 0,
  },
};

export const mockArticlesProps = {
  base,
};
