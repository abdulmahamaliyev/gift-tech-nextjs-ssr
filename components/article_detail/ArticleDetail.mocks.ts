import { IArticleDetail } from './ArticleDetail';

const base: IArticleDetail = {
  article: {
    body: '<p> TEST</>',
    createdAt: new Date(Date.now()).toLocaleString(),
    description: 'TEST',
    id: '231',
    image: {
      height: 1333,
      width: 1506,
      url: 'https://placehold.jp/3d4070/ffffff/1920x1179.png?text=TEST%20Photo',
    },
    publishedAt: new Date(Date.now()).toLocaleString(),
    title: 'TEST TITLE',
    revisedAt: new Date(Date.now()).toLocaleString(),
    updatedAt: new Date(Date.now()).toLocaleString(),
  },
};

export const mockArticleDetailProps = {
  base,
};
