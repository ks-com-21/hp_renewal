import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const linkObjectList = [
    { url: '/about', content: 'About' },
    { url: '/works', content: 'Works' },
    { url: '/news', content: 'News' },
    { url: '/recruit', content: 'Recruit' },
    { url: '/contact', content: 'Contact' },
  ];

  const linkComponentList = linkObjectList.map(e => (
    <li key={e.url} className='flex justify-center items-center'>
      <Link href={e.url} className='p-2 hover:text-gray-400 transition'>
        {e.content}
      </Link>
    </li>
  ));

  return (
    <footer className='py-10 w-full z-10 bg-slate-600 text-sm'>
      <div className='flex w-full justify-between'>
        <nav className='w-full mx-auto'>
          <ul className='flex md:w-1/2 md:mx-auto items-stretch justify-between h-full'>
            {linkComponentList}
          </ul>
        </nav>
      </div>
      <p className='text-center'>Copyright 2024 Comfy</p>
    </footer>
  );
};

export default Footer;
