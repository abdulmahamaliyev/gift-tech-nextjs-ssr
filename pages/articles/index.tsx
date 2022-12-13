import ArticleCard from '@/components/cards/article/ArticleCard';
import { Articles } from '@/types';
import { GetServerSideProps, NextPage } from 'next';

const Index: NextPage<PageProps> = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      記事一覧
      {articles.contents?.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Index;

interface PageProps {
  articles: Articles;
}

export const getServerSideProps: GetServerSideProps<PageProps> =
  async function getServerSideProps(ctx) {
    const res = await fetch(process.env.API_URL!, {
      method: 'GET',
      headers: {
        'X-MICROCMS-API-KEY': process.env.API_KEY!,
      },
    });

    const data: Articles = await res.json();

    return {
      props: {
        articles: data,
      },
    };
  };
