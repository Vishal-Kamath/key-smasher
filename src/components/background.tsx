import React from 'react';

const BgTile: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="grid h-24 w-24 place-content-center rounded-lg bg-sky-500 bg-opacity-5 text-3xl text-sky-300 text-opacity-50 dark:bg-white dark:bg-opacity-5 dark:text-sky-700 dark:text-opacity-50">
      {value}
    </div>
  );
};

const Background: React.FC = () => {
  return (
    <div className="absolute right-0 top-0 isolate -z-10 flex aspect-square flex-col items-end gap-4 bg-gradient-to-tr from-white from-45% via-sky-100 to-white dark:from-slate-950 dark:via-sky-950 dark:to-slate-950">
      <div className="flex gap-4">
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U'].map((value, index) => (
          <BgTile key={'row 1' + index} value={value} />
        ))}
      </div>
      <div className="flex gap-4">
        {['A', 'S', 'D', 'F', 'G', 'H'].map((value, index) => (
          <BgTile key={'row 2' + index} value={value} />
        ))}
        <div className="h-24 w-16 rounded-l-lg bg-sky-500 bg-opacity-5 dark:bg-white dark:bg-opacity-5"></div>
      </div>
      <div className="flex gap-4">
        {['Z', 'X', 'C', 'V', 'B', 'N'].map((value, index) => (
          <BgTile key={'row 3' + index} value={value} />
        ))}
        <div className="h-24 w-8 rounded-l-lg bg-sky-500 bg-opacity-5 dark:bg-white dark:bg-opacity-5"></div>
      </div>
    </div>
  );
};

export default Background;
