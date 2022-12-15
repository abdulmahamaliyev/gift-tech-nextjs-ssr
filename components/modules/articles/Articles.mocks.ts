import { mockArticle } from '@/types';
import { IArticles } from './Articles';

const base: IArticles = {
  articles: { contents: [mockArticle], limit: 10, totalCount: 1, offset: 0 },
};

export const mockArticlesProps = {
  base,
};
