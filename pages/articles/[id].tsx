import ArticleDetail from '@/components/article_detail/ArticleDetail';
import CoverImage from '@/components/shared/CoverImage';
import { ArticleContents } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

const Index: NextPage<PageProps> = ({ article }) => {
  console.log(article);
  return article ? <ArticleDetail article={article} /> : <h1>404 not found</h1>;
};

export default Index;

interface PageProps {
  article: ArticleContents;
}

export const getServerSideProps: GetServerSideProps<PageProps> =
  async function getServerSideProps(ctx) {
    const id = ctx.params?.id;

    const res = await fetch(`${process.env.API_URL!}/${id}`, {
      method: 'GET',
      headers: {
        'X-MICROCMS-API-KEY': process.env.API_KEY!,
      },
    });

    const data: ArticleContents = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article: data,
      },
    };
  };
