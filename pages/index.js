import Head from 'next/head';
import Image from 'next/image';
import layoutStyles from '../styles/Layout.module.css';

export default function Home() {
  return (
    <>
      <div className='flex mb-20'>
        <div className='px-8 py-12 lg:w-1/2'>
          <img
            className='rounded lg:hidden'
            src='/homepage.png'
            alt='homepage logo'
          />
          <h1 className='mt-6 text-3xl font-light text-gray-800 leading-tight font-sans'>
            A journey of a thousand miles
            <br className='' />
            <span className='text-3xl text-blue-700 font-normal font-sans'>
              {' '}
              begins with a single step...
            </span>
          </h1>
          <p className='mt-3 leading-relaxed text-gray-800 font-sans'>
            After completing a degree, my software development journey is only
            just starting. Now with learning other languages and technologies to
            make me a more well-rounded developer, I realise I am merely on the
            contents page of the software development manual.
          </p>
          <p className='mt-3 leading relaxed text-gray-800 font-sans'>
            This website is the first of many to challenge myself in learning
            new skills and take me out of my comfort zone and into deep waters.
            This is what you could call an "interactive resume" showcasing past
            projects, technology exposure,previous experience and transferrable
            skills.{' '}
          </p>
        </div>
        <div className='hidden lg:block lg:w-1/2 lg:relative'>
          <img
            className='rounded absolute inset-0 h-full w-full object-cover object-center'
            src='/homepage.png'
            alt='homepage logo'
          />
        </div>
      </div>
    </>
  );
}
