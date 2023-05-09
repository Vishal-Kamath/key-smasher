import TypeTest from '@/components/typeTest/typeTest';
import Image from 'next/image';
import { paragraph } from 'txtgen';

const getTest = async () => {
  const test = paragraph(200);
  return test;
};

const GamePage = async () => {
  const testText = await getTest();
  return (
    <main className="relative flex min-h-screen flex-col items-end justify-center px-[5vw]">
      <Image
        src="/typewriter.png"
        alt="typewriter Image"
        className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 opacity-75 grayscale"
        width={1000}
        height={1000}
      />
      <TypeTest testText={testText} />
    </main>
  );
};

export default GamePage;
