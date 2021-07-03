//page that shows the competency level in the technolgies used
import { tech } from '../technologies';
import { motion } from 'framer-motion';

const technologies = () => {
  return (
    <div className='bg-education bg-fixed'>
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
        <div className='flex justify-center from-white via-blue-600 to-white bg-gradient-to-b w-full h-40  '>
          <span className='mt-12 absolute text-white font-extralight font-sans text-center text-5xl text-'>
            Technology Competency
          </span>
        </div>
      </motion.div>
      <div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {tech.map((item) => (
          <div className='p-10'>
            <div className='bg-white ml-7 lg:w-48 flex-none bg-cover rounded text-center overflow-hidden shadow-lg p-2 transform transition duration-500 hover:scale-110'>
              <a>
                <img
                  className='w-full object-cover'
                  className='lazy'
                  src={item.image}
                  alt={item.image}
                />
              </a>
              <p className='mt-1 font-sans text-gray-800 font-light'>
                {' '}
                <span className='font-semibold'>Level:</span> {item.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default technologies;
