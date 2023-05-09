import React from 'react';
import TextInput from './testInput';
import TestDisplay from './testDisplay';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa';

const TypeTest: React.FC<{ testText: string }> = ({ testText }) => {
  return (
    <div className="flex flex-col gap-3">
      <Link href="/" className="flex items-center gap-2">
        <FaAngleLeft /> Back
      </Link>
      <TestDisplay testText={testText} />
      <TextInput />
    </div>
  );
};

export default TypeTest;
