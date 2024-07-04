const Works = () => {
  return (
    <div className='md:max-w-4xl'>
      <h1 className='mb-10 md:text-5xl text-3xl font-bold border-b-2 border-gray-500'>
        Works
      </h1>
      <div className='flex flex-col'>
        <div className='flex flex-row mb-10 justify-between'>
          <div className='w-1/2'>
            <div className='mr-2  border-b-2 border-gray-300'>
              <p className='pb-2 text-sm text-gray-500'></p>
              <p className='pb-10 text-sm'>システム事業部</p>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='mr-2  border-b-2 border-gray-300'>
              <p className='pb-2 text-sm text-gray-500'></p>
              <p className='pb-10 text-sm'>制御事業部</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Works;
