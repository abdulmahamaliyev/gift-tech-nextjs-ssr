import CoverImage from '@/components/shared/CoverImage';
import { ArticleContents } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

const Index: NextPage<PageProps> = ({ article }) => {
  console.log(article);
  return (
    <>
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
    </>
  );
};

export default Index;

interface PageProps {
  article: ArticleContents;
}

export const getServerSideProps: GetServerSideProps<PageProps> =
  async function getServerSideProps(ctx) {
    const { id } = ctx.params;

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
