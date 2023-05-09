import React from 'react';
import TextInput from './testInput';
import TestDisplay from './testDisplay';

const TypeTest: React.FC<{ testText: string }> = ({ testText }) => {
  return (
    <div className="flex flex-col gap-3 text-white">
      <TestDisplay testText={testText} />
      <TextInput />
    </div>
  );
};

export default TypeTest;
