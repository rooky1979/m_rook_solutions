import Link from 'next/link';
import { project } from '../projects';
import layoutStyles from '../styles/Layout.module.css';
import projectStyles from '../styles/Projects.module.css';

const projects = () => {
  return (
    <>
      <h1 className='pl-24 mt-10 text-gray-800 font-extrathin text-6xl font-sans'>
        Projects
      </h1>
      <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {project.map((item) => (
          <div className='p-10'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
              <img
                className='w-full'
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
    </>
  );
};

export default projects;
