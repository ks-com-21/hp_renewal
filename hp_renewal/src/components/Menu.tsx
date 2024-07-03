const Menu = () => {
  return (
    <div className='w-full'>
      <div className='w-full bg-indigo-700 p-8 rounded-lg'>
        <ul className='text-black'>
          <li className='px-4 py-2 hover:bg-indigo-900 rounded-lg'>Pilot</li>
          <li className='px-4 py-2 bg-indigo-700 hover:bg-indigo-900 rounded-lg'>
            Titan
          </li>
          <li className='px-4 py-2 hover:bg-indigo-900 rounded-lg'>
            Timelines
          </li>
        </ul>

        <ul className='pl-4 border-l-2 border-indigo-700 text-white'>
          <li className='px-4 py-2 hover:bg-indigo-900 rounded-lg'>
            Basic maneuver
          </li>
          <li className='px-4 py-2 hover:bg-indigo-900 rounded-lg'>Gaunlet</li>
          <li className='px-4 py-2 hover:bg-indigo-900 rounded-lg'>
            Neural Link 101
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
