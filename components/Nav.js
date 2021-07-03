import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=' lg:flex lg:justify-between'>
      <div className='flex items-center justify-between  px-6 py-3'>
        <div>
          <img
            className='lg:h-28 ml-2 md:h-40 h-40'
            src='/currentLogo.png'
            alt='Rook Logo'
            href='/'
          />
        </div>
        <div className='lg:hidden'>
          <button
            // Hamburger menu
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            className='block text-gray-800 hover:text-gray-400 focus:text-gray-400 outline-none'
          >
            <svg className='h-8 w-8 fill-current' viewBox='0 0 24 24'>
              <path
                className={isOpen ? 'block' : 'hidden'}
                fill-rule='evenodd'
                d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
              />
              <path
                className={!isOpen ? 'block' : 'hidden'}
                fill-rule='evenodd'
                d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={
          isOpen
            ? 'block px-7 pt-2 pb-3 lg:flex lg:items-center'
            : 'hidden px-7 pt-2 pb-3 lg:flex lg:items-center'
        }
      >
        <a
          href='/'
          className='text-lg block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 '
        >
          Home
        </a>
        <a
          href='/about'
          className='text-lg mt-1 block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          About
        </a>
        <a
          href='/projects'
          className='text-lg mt-1 block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          Projects
        </a>
        <a
          href='/technologies'
          className='text-lg mt-1 block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          Technologies
        </a>
        <a
          href='/experience'
          className='text-lg mt-1 block px-2 py-1 font-thin text-gray-800 rounded hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          Experience
        </a>
        <a
          href='/education'
          className='text-lg mt-1 block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          Education
        </a>
      </div>
    </header>
  );
};

export default Nav;
