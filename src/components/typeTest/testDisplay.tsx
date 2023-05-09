import React from 'react';

const TestDisplay: React.FC<{ testText: string }> = ({ testText }) => {
  return <div className="w-[20rem] rounded-md bg-black">{testText}</div>;
};

export default TestDisplay;
