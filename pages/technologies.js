import { tech } from '../technologies';

const technologies = () => {
  return (
    <div className='bg-education bg-fixed'>
      <div className='flex justify-center from-transparent via-blue-600 to-transparent bg-gradient-to-b w-full h-40  '>
        <span className='mt-12 absolute text-white font-extralight font-sans text-center text-5xl text-'>
          Technology Competency
        </span>
      </div>
      <div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {tech.map((item) => (
          <div className='p-10'>
            <div className='bg-white ml-7 h-auto lg:w-48 flex-none bg-cover rounded text-center overflow-hidden shadow-lg p-2 transform transition duration-500 hover:scale-110'>
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
