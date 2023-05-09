import React from 'react';

const TestDisplay: React.FC<{ testText: string }> = ({ testText }) => {
  return (
    <div className="h-full max-h-[22rem] w-full max-w-2xl overflow-hidden overflow-y-auto rounded-xl bg-sky-900 bg-opacity-75 px-6 py-3 text-justify text-xl leading-10 text-white scrollbar-none">
      {testText}
    </div>
  );
};

export default TestDisplay;
