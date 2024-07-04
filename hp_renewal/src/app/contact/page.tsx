const Page = () => {
  return (
    <div className='md:mx-8 mx-4 my-16'>
      <h1 className='mb-12 text-4xl font-bold border-b-2 border-gray-500'>
        Contact
      </h1>
      <p className='text-gray-600 mt-6'></p>

      <form>
        <div className='mt-8 grid grid-cols-1 gap-8'>
          <div className='grid gap-2 md:grid-cols-2 grid-cols-1'>
            <p className='md:col-start-1 md:col-end-3 text-sm text-gray-700 block mb-1 font-medium'>
              お名前*
            </p>
            <div>
              <input
                type='text'
                name='firstName'
                id='first-name'
                className='col-span-1 bg-gray-100 border border-gray-200  py-1 px-3 block text-gray-700 w-full'
                placeholder='姓'
              />
            </div>
            <div>
              <input
                type='text'
                name='name'
                id='name'
                className='col-span-1 bg-gray-100 border border-gray-200  py-1 px-3 block text-gray-700 w-full'
                placeholder='名'
              />
            </div>
          </div>
          <div className='grid gap-2 md:grid-cols-2'>
            <p className='md:col-start-1 md:col-end-3 text-sm text-gray-700 block mb-1 font-medium'>
              フリガナ
            </p>
            <div>
              <input
                type='text'
                name='firstName'
                id='first-name'
                className='col-span-1 bg-gray-100 border border-gray-200  py-1 px-3 block text-gray-700 w-full'
                placeholder='セイ'
              />
            </div>
            <div>
              <input
                type='text'
                name='name'
                id='name'
                className='col-span-1 bg-gray-100 border border-gray-200  py-1 px-3 block text-gray-700 w-full'
                placeholder='メイ'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='email'
              className='text-sm text-gray-700 block mb-1 font-medium'
            >
              メールアドレス
            </label>
            <input
              type='text'
              name='email'
              id='email'
              className='bg-gray-100 border border-gray-200  py-1 px-3 block text-gray-700 w-full'
              placeholder='example@provider.com'
            />
          </div>
          <div>
            <label
              htmlFor='company'
              className='text-sm text-gray-700 block mb-1 font-medium'
            >
              会社名
            </label>
            <input
              type='text'
              name='company'
              id='company'
              className='bg-gray-100 border border-gray-200  py-1 px-3 block text-gray-700 w-full'
            />
          </div>
          <div>
            <label
              htmlFor='job'
              className='text-sm text-gray-700 block mb-1 font-medium'
            >
              役職
            </label>
            <input
              type='text'
              name='job'
              id='job'
              className='bg-gray-100 border border-gray-200  py-1 px-3 block text-gray-700 w-full'
              placeholder=''
            />
          </div>
          <div>
            <label
              htmlFor='tel'
              className='text-sm text-gray-700 block mb-1 font-medium'
            >
              電話番号
            </label>
            <input
              type='text'
              name='tel'
              id='tel'
              className='bg-gray-100 border border-gray-200  py-1 px-3 block text-gray-700 w-full'
              placeholder=''
            />
          </div>

          <div>
            <label
              htmlFor='content'
              className='text-sm text-gray-700 block mb-1 font-medium'
            >
              お問い合わせ内容
            </label>
            <textarea
              name='content'
              id='content'
              className='h-80 bg-gray-100 border border-gray-200  py-1 px-3 block text-gray-700 w-full'
            ></textarea>
          </div>
        </div>

        <div className='space-x-4 mt-12'>
          <button
            type='button'
            className='py-6 px-8 bg-black text-white hover:bg-gray-400 disabled:opacity-50 text-sm transition'
          >
            入力内容を確認する
          </button>
        </div>
      </form>
    </div>
  );
};
export default Page;
