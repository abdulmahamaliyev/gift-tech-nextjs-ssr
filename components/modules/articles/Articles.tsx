import ArticleCard from '@/components/cards/article/ArticleCard';
import { Articles } from '@/types';
import { useRouter } from 'next/router';
import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Articles.module.scss';

type Props = {
  articles: Articles;
};

const Articles = ({ articles }: Props) => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <h1>記事一覧</h1>
      <ul className={styles.cards}>
        {articles.contents?.map((article) => (
          <li className={styles.cards_item} key={article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => {
          router.push(
            {
              query: { ...router.query, page: event.selected + 1 || 1 },
            },
            undefined,
            { shallow: false }
          );
        }}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(articles.totalCount / articles.limit)}
        previousLabel="<"
        renderOnZeroPageCount={undefined}
        className={styles.pagination}
        pageLinkClassName={styles.pageLinkClassName}
      />
    </div>
  );
};

export default Articles;
