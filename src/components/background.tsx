import React from 'react';

const BgTile: React.FC = () => {
  return <div className="w-24 h-24 rounded-lg bg-white bg-opacity-5"></div>;
};

const Background: React.FC = () => {
  return (
    <div className="isolate absolute flex flex-col items-end gap-4 top-0 right-0 -z-10">
      <div className="flex gap-4">
        {Array(7)
          .fill(null)
          .map((_, index) => (
            <BgTile key={'row 1' + index} />
          ))}
      </div>
      <div className="flex gap-4">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <BgTile key={'row 2' + index} />
          ))}
        <div className="w-16 h-24 rounded-l-lg bg-white bg-opacity-5"></div>
      </div>
      <div className="flex gap-4">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <BgTile key={'row 3' + index} />
          ))}
        <div className="w-8 h-24 rounded-l-lg bg-white bg-opacity-5"></div>
      </div>
    </div>
  );
};

export default Background;
