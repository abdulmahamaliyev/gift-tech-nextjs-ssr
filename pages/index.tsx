import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <Link href={'/articles'}>記事一覧</Link>
      </div>
    </>
  );
}
