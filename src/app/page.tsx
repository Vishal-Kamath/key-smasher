import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <main className="grid min-h-screen place-content-center">
      <Link href="/game">game</Link>
    </main>
  );
};

export default HomePage;
