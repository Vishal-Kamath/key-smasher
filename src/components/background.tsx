import React from 'react';

const BgTile: React.FC = () => {
  return (
    <div className="w-24 h-24 rounded-lg dark:bg-white bg-sky-500 bg-opacity-5 dark:bg-opacity-5"></div>
  );
};

const Background: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-tr from-white from-45% via-sky-100 to-white dark:from-slate-950 dark:via-sky-950 dark:to-slate-950 isolate absolute flex flex-col items-end gap-4 top-0 right-0 -z-10">
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
        <div className="w-16 h-24 rounded-l-lg dark:bg-white bg-sky-500 bg-opacity-5 dark:bg-opacity-5"></div>
      </div>
      <div className="flex gap-4">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <BgTile key={'row 3' + index} />
          ))}
        <div className="w-8 h-24 rounded-l-lg dark:bg-white bg-sky-500 bg-opacity-5 dark:bg-opacity-5"></div>
      </div>
    </div>
  );
};

export default Background;
