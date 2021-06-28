import { tech } from '../technologies';

const technologies = () => {
  return (
    <>
      <div className='mx-auto border-0 rounded'>
        <img
          className='lazy h-48 w-max'
          src='/technologies.png'
          alt='technologies'
        />
      </div>
      <div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {tech.map((item) => (
          <div className='p-10'>
            <div className='ml-7 h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden shadow-lg p-2 transform transition duration-500 hover:scale-110 hover:opacity-60'>
              <a href={item.link} target='_blank'>
                <img
                  className='w-full'
                  className='lazy'
                  src={item.image}
                  alt={item.image}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default technologies;
