import Image from 'next/image';
import layoutStyles from '../styles/Layout.module.css';
import aboutStyles from '../styles/About.module.css';

const about = () => {
  return (
    <>
      <div className='flex mb-20'>
        <div className='hidden lg:block lg:w-1/2 lg:relative'>
          <img
            className='rounded absolute inset-0 lg:ml-5 lg:mr-10 lg:mt-20 h-auto w-full object-cover object-center'
            src='/akroyd1.png'
            alt='DanAkroyd&I'
          />
        </div>
        <div className='px-8 py-12 lg:w-1/2'>
          <img
            className='rounded lg:hidden'
            src='/akroyd1.png'
            alt='DanAkroyd&I'
          />
          <h1 className='mt-6 mb-3 text-3xl font-light text-gray-800 leading-tight font-sans'>
            About me...
          </h1>
          <p className='mt-3 leading-relaxed text-gray-800 font-sans'>
            I am a career switcher from a respected and established analytical
            chemist and validation officer for 16 years in pharmaceutics, to
            follow a passion in software and web development. Experienced in
            many aspects of Validation; specialising in the implementation and
            validation of laboratory, production and IT software/computer
            systems to 21 CFR Part 11 compliance. A person who can apply his own
            initiative and overcome obstacles with proactive problem solving. A
            key team player who always loves learning and furthering his
            knowledge.
          </p>
          <br />
          <p className='mt-3 leading-relaxed text-gray-800 font-sans'>
            I recently completed a BSc Computer and Information Sciences degree
            with a GPA of 7 (A-). Although I have completed the degree, my
            learning journey has only just begun and I continued to learn with
            Next.js and full-stack development with the MERN stack and will
            continue to do so.
          </p>
          <br />
          <p className='mt-3 leading-relaxed text-gray-800 font-sans'>
            It was one of the most fearful things I have ever done to give up a
            career and begin a new one at 39 years old; but so far I have loved
            every minute of it and I find I am just so hungry to learn more from
            the best around to become the best I can be. In work environments I
            am fun-loving and friendly, but with fierce loyalty, honesty and
            integrity. Morals I value not just in work, but in life. I want to
            help people and make a difference.
          </p>
          <br />
          <p className='mt-3 leading-relaxed text-gray-800 font-sans'>
            That's me in the picture on the right. Next to Dan Akroyd... ADD
            CONTACT DETAILS
          </p>
        </div>
      </div>
    </>
  );
};

export default about;
