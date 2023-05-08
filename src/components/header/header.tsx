'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { AiOutlineGithub } from 'react-icons/ai';
import Toggle from './toggle';
import { useAppSelector } from '@/store/hooks';
import { selectTheme } from '@/slice/theme.slice';

const Header: React.FC = () => {
  const dark = useAppSelector(selectTheme);
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="flex w-full items-center justify-between border-b-2 border-slate-300 bg-opacity-10 px-[5vw] py-2 backdrop-blur-sm dark:border-slate-700">
        <div className="flex gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              alt="Key Smasher key"
              src={dark ? '/key_smasher_dark.png' : '/key_smasher.png'}
              width="500"
              height="500"
              className="h-10 w-10"
              loading="lazy"
            />
            <span className="font-ubuntu text-2xl text-slate-800 dark:text-slate-300 font-medium">
              Smasher_
            </span>
          </Link>
        </div>

        <div className="flex gap-2">
          <Toggle />

          <a
            target="_blank"
            href="https://github.com/Vishal-Kamath/key-smasher"
            className="grid h-9 w-9 place-content-center rounded-full hover:bg-sky-300 hover:bg-opacity-30 dark:hover:bg-sky-700 dark:hover:bg-opacity-30"
          >
            <AiOutlineGithub className="h-6 w-6 text-sky-600" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
