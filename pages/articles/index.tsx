import ArticleCard from '@/components/cards/article/ArticleCard';
import Articles from '@/components/modules/articles/Articles';
import { Articles as IArticles } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

const Index: NextPage<PageProps> = ({ articles }) => {
  return (
    <>
      <Articles articles={articles} />
    </>
  );
};

export default Index;

interface PageProps {
  articles: IArticles;
}

export const getServerSideProps: GetServerSideProps<PageProps> =
  async function getServerSideProps(ctx) {
    const { page } = ctx.query;

    const offset = (+page! - 1) * 10;
    const res = await fetch(`${process.env.API_URL!}?offset=${offset}`, {
      method: 'GET',
      headers: {
        'X-MICROCMS-API-KEY': process.env.API_KEY!,
      },
    });

    const data: IArticles = await res.json();

    return {
      props: {
        articles: data,
      },
    };
  };
