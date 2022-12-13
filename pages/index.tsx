import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div>
        <Link href={'/articles'}>記事一覧</Link>
      </div>
    </Layout>
  );
}
