import { project } from '../projects';

const projects = () => {
  return (
    <div className='bg-education bg-fixed'>
      <div className='flex justify-center from-white via-blue-600 to-white bg-gradient-to-b w-full h-40'>
        <span className='mt-12 absolute text-white font-extralight font-sans text-center text-5xl'>
          Projects
        </span>
      </div>

      <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {project.map((item) => (
          <div className='p-10'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-110 bg-white'>
              <img
                className='w-full bg-white'
                className='lazy'
                src={item.image}
                alt={item.image}
              />
              <div className='px-6 py-4'>
                <div className='font-semibold text-xl mb-2 font-sans'>
                  {item.title}
                </div>
                <p className='text-gray-800 text-base font-sans'>
                  {item.languages}
                </p>
                <p className='mt-1 text-gray-800 text-sm font-sans'>
                  {item.date}
                </p>
                <p className='mt-2 text-blue-700 text-base font-sans'>
                  {item.excerpt}
                </p>
              </div>
              <div className='px-6 pt-4 pb-2'>
                <a
                  href={`/project/${item.id}`}
                  className=' font-extralight text-gray-800 hover:text-gray-400 lg:mt-0 lg:ml-0'
                >
                  Read more...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
