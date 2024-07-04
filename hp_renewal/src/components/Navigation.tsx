'use client';
import Link from 'next/link';
import { useState } from 'react';

import Menu from '@/components/Menu';

const Navigation = () => {
  const [isShownMenu, setIsShownMenu] = useState(false);
  const menuToggleHandler = () => {
    console.log(isShownMenu);
    setIsShownMenu((prevState: boolean) => !prevState);
  };
  const linkObjectList = [
    { url: '/about', content: 'About' },
    { url: '/works', content: 'Works' },
    { url: '/news', content: 'News' },
    { url: '/recruit', content: 'Recruit' },
    { url: '/contact', content: 'Contact' },
  ];

  const linkComponentList = linkObjectList.map(e => (
    <li key={e.url} className='flex'>
      <Link
        href={e.url}
        className='flex items-center justify-center w-full h-full hover:text-gray-400 relative before:absolute before:left-0 before:right-0 before:mx-auto before:bottom-6 before:w-0 hover:before:w-full before:h-[2px] before:bg-gray-400 transition'
      >
        {e.content}
      </Link>
    </li>
  ));

  return (
    <header className='md:mx-8 mx-4 md:h-20 h-12 sticky top-0 z-10 bg-white'>
      <div className='mx-auto md:max-w-4xl h-full'>
        <div className='flex h-full justify-between'>
          <div className=''>
            <Link
              href='/'
              className='flex text-2xl font-bold relative w-full h-full items-center justify-center hover:text-gray-400 transition'
            >
              Comfy
            </Link>
          </div>
          <nav className='md:w-1/2 md:block hidden text-sm'>
            <ul className='flex items-stretch justify-between h-full'>
              {linkComponentList}
            </ul>
          </nav>
          <button
            onClick={menuToggleHandler}
            className='absolute -right-4 flex md:hidden w-12 h-12 justify-center items-center bg-gray-900'
          ></button>
        </div>
        {isShownMenu ? (
          <div className='md:hidden absolute w-full bg-gray-400 md:top-20 top-12'>
            <Menu linkObjectList={linkObjectList}></Menu>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Navigation;
