export interface Articles {
  contents?: ArticleContents[] | null;
  totalCount: number;
  offset: number;
  limit: number;
}

export interface ArticleContents {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  image: Image;
  body: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}
