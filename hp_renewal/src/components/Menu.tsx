import Link from 'next/link';

interface linkObject {
  url: string;
  content: string;
}

const Menu = ({ linkObjectList }) => {
  const linkComponentList = linkObjectList.map(e => (
    <li key={e.url} className='flex w-full py-2'>
      <Link
        href={e.url}
        className='flex items-center justify-center w-full h-full py-2 hover:text-gray-400  relative before:absolute before:left-0 before:right-0 before:mx-auto before:bottom-0 before:w-0 hover:before:w-1/3 before:h-[2px] before:bg-gray-400 transition'
      >
        {e.content}
      </Link>
    </li>
  ));
  return (
    <div className='w-full'>
      <div className='w-full bg-white'>
        <ul className='text-black'>{linkComponentList}</ul>
      </div>
    </div>
  );
};

export default Menu;
