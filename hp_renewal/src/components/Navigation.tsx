'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Menu from '@/components/Menu';

const Navigation = () => {
  const [isShownMenu, setIsShownMenu] = useState(false);
  const linkObjectList = [
    { url: '/about', content: 'About' },
    { url: '/works', content: 'Works' },
    { url: '/news', content: 'News' },
    { url: '/recruit', content: 'Recruit' },
    { url: '/contact', content: 'Contact' },
  ];

  const linkComponentList = linkObjectList.map(e => (
    <li
      key={e.url}
      className='flex w-1/5 relative before:absolute before:left-0 before:right-0 before:mx-auto before:bottom-6 before:w-0 hover:before:w-2/3 before:h-[2px] before:bg-gray-400 transition'
    >
      <Link
        href={e.url}
        className='flex items-center justify-center w-full h-full hover:text-gray-400 transition'
      >
        {e.content}
      </Link>
    </li>
  ));

  const menuToggleHandler = () => {
    console.log(isShownMenu);
    setIsShownMenu((prevState: boolean) => !prevState);
  };

  return (
    <header className='w-full md:h-20 h-12 sticky top-0 z-10 bg-white'>
      {isShownMenu ?? <div className='h-10 w-10 bg-slate-500'></div>}
      <div className='flex mx-auto md:max-w-4xl h-full justify-between'>
        <div className='md:w-40 w-20'>
          <Link
            href='/'
            className='flex text-2xl font-bold relative w-full h-full items-center justify-center hover:text-gray-400 transition'
          >
            Comfy
          </Link>
        </div>
        <nav className='md:w-3/5 md:block hidden px-4 text-sm'>
          <ul className='flex items-stretch justify-between h-full'>
            {linkComponentList}
          </ul>
        </nav>
        <button
          onClick={menuToggleHandler}
          className='flex md:hidden w-12 h-12 justify-center items-center bg-sky-200'
        ></button>
      </div>
      <div className='absolute top-12'>
        <Menu></Menu>
      </div>
    </header>
  );
};

export default Navigation;
