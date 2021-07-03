import { motion } from 'framer-motion';
//about me page

const about = () => {
  return (
    <>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <div className='flex justify-center from-white via-blue-600 to-transparent bg-gradient-to-b w-full h-40'>
          <span className=' mt-12 absolute text-white font-extralight font-sans text-center text-5xl'>
            About Me...
          </span>
        </div>
      </motion.div>
      <div className='flex mb-20 bg-education bg-fixed lg:align-middle'>
        <div className='hidden lg:block lg:w-1/2 lg:relative'>
          <img
            className='rounded absolute inset-0 px-10 lg:ml-5 lg:mr-10 lg:mt-16 h-auto w-full object-cover object-center'
            src='/me3.jpeg'
            alt='me'
          />
        </div>
        <div className='px-8 py-12 lg:w-1/2'>
          <img className='rounded lg:hidden' src='/me3.jpeg' alt='me' />
          <p className='mt-3 leading-relaxed text-gray-800 font-sans'>
            I am a career switcher from a respected and established analytical
            chemist and validation officer for 16 years in pharmaceutics, to
            follow a passion in software, web, and full-stack development.
            Experienced in many aspects of Validation; specialising in the
            implementation and validation of laboratory, production and IT
            software/computer systems to FDA 21 CFR Part 11 compliance. I am a
            person who can apply my own initiative and overcome obstacles with
            proactive problem solving and analytical thinking. A key team player
            who always loves learning and furthering my knowledge.
          </p>
          <br />
          <p className='mt-3 leading-relaxed text-gray-800 font-sans'>
            I recently completed a BSc Computer and Information Sciences degree
            with a GPA of 7.2 (A-). Although I have completed the degree, my
            learning journey has only just begun and I have continued to learn,
            beginning with Next.JS/Tailwind CSS to create this website, and
            currently full-stack development (MERN). I will continue to
            read/watch/create to be a full-rounded developer as possible and
            create personal projects to increase my experience and portfolio.
            After MERN, Angular and .NET are the next frameworks.
          </p>
          <br />
          <p className='mt-3 leading-relaxed text-gray-800 font-sans'>
            At 39 years old, I realised that my career had always been from
            being in the right place at the right time. I never really chose
            that path, it chose me. I decided that I would leave the world of
            chemistry and pharmaceuticals to follow my keen interest in the
            world of Information Technology.
          </p>
          <br />
          <p className='mt-3 leading-relaxed text-gray-800 font-sans'>
            It was one of the most fearful things I have ever done to give up a
            successful career and begin a new one at 39 years old; but being the
            way I am, I don't back down from a fear. I face them, and the most
            fearful thing I ever did turned into the best thing I ever did. I
            have loved every minute of it so far. I am hungry to learn more from
            the best around to become the best I can be. In work environments I
            am fun-loving and friendly, but with fierce loyalty, honesty and
            integrity. Morals I value not just in work, but in life. I want to
            help people and make a difference.
          </p>
          <br />
          <p>
            <strong>Contact:</strong>
          </p>
          <p className='leading-relaxed text-gray-800 font-sans'>
            <strong className='font-sans'>Email: </strong>mrook1979@hotmail.com
          </p>

          <a
            target='_blank'
            href='https://www.linkedin.com/in/matthew-rook-0458a61a3'
            className='font-sans font-medium hover:text-gray-400'
          >
            Click to LinkedIn Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default about;
