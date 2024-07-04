import Image from 'next/image';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Works from '@/components/Works';

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <News></News>
      <Works></Works>
      <div className='relative' style={{ height: '300vh' }}>
        <p className='sticky md:top-20 top-12'>test2</p>
      </div>
      <div className='min-h-screen relative' style={{ height: '300vh' }}>
        <p className='sticky md:top-20 top-12'>test3</p>
      </div>
      <div className='h-svh'>
        <p className='sticky md:top-20 top-12'>test4</p>
      </div>
      <div className='h-svh'>
        <p className='sticky md:top-20 top-12'>test5</p>
      </div>
    </>
  );
}
