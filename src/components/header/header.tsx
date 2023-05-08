'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { AiOutlineGithub } from 'react-icons/ai';

const Header: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="flex w-full items-center justify-between border-b-2 border-slate-300 bg-opacity-10 px-[5vw] py-2 backdrop-blur-sm dark:border-slate-700">
        <div className="flex gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              alt="Key Smasher key"
              src="/key_smasher.png"
              width="500"
              height="500"
              className="h-12 w-12"
              loading="lazy"
            />
            <span className="font-ubuntu text-3xl font-medium max-sm:hidden">
              Smasher_
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
