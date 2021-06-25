import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import navStyles from '../styles/Nav.module.css';
import layoutStyles from '../styles/Layout.module.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className=' lg:flex lg:justify-between'>
      <div className='flex items-center justify-between px-6 py-3'>
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
          className='block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 '
        >
          Home
        </a>
        <a
          href='/about'
          className='mt-1 block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          About
        </a>
        <a
          href='/projects'
          className='mt-1 block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          Projects
        </a>
        <a
          href='/technologies'
          className='mt-1 block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          Technologies
        </a>
        <a
          href='/experience'
          className='mt-1 block px-2 py-1 font-thin text-gray-800 rounded hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          Experience
        </a>
        <a
          href='/education'
          className='mt-1 block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          Education
        </a>
        <a
          href='/contact'
          className='mt-1 block px-2 py-1 font-thin text-gray-800 hover:text-gray-400 lg:mt-0 lg:ml-6'
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Nav;
{
  /* <header className={layoutStyles.header}>
      <nav className={navStyles.navbar}>
        <Link href='/'>
          <a className={navStyles.navlogo}>
            <Image
              src='/currentLogo.png'
              alt='Rook Logo'
              height={100}
              width={200}
            />
          </a>
        </Link>
        <ul
          className={
            isOpen === false
              ? navStyles.navmenu
              : navStyles.navmenu + ' ' + navStyles.active
          }
        >
          <li className={navStyles.navitem}>
            <Link href='/'>
              <a
                className={
                  isOpen === false
                    ? navStyles.navlink
                    : navStyles.navlink + ' ' + navStyles.active
                }
                onClick={openMenu}
              >
                Home
              </a>
            </Link>
          </li>
          <li className={navStyles.navitem}>
            <Link href='/about'>
              <a
                className={
                  isOpen === false
                    ? navStyles.navlink
                    : navStyles.navlink + ' ' + navStyles.active
                }
                onClick={openMenu}
              >
                About
              </a>
            </Link>
          </li>
          <li className={navStyles.navitem}>
            <Link href='/projects'>
              <a
                className={
                  isOpen === false
                    ? navStyles.navlink
                    : navStyles.navlink + ' ' + navStyles.active
                }
                onClick={openMenu}
              >
                Projects
              </a>
            </Link>
          </li>
          <li className={navStyles.navitem}>
            <Link href='/technologies'>
              <a
                className={
                  isOpen === false
                    ? navStyles.navlink
                    : navStyles.navlink + ' ' + navStyles.active
                }
                onClick={openMenu}
              >
                Technologies
              </a>
            </Link>
          </li>
          <li className={navStyles.navitem}>
            <Link href='/experience'>
              <a
                className={
                  isOpen === false
                    ? navStyles.navlink
                    : navStyles.navlink + ' ' + navStyles.active
                }
                onClick={openMenu}
              >
                Experience
              </a>
            </Link>
          </li>
          <li className={navStyles.navitem}>
            <Link href='/education'>
              <a
                className={
                  isOpen === false
                    ? navStyles.navlink
                    : navStyles.navlink + ' ' + navStyles.active
                }
                onClick={openMenu}
              >
                Education
              </a>
            </Link>
          </li>
          <li className={navStyles.navitem}>
            <Link href='/contact'>
              <a
                className={
                  isOpen === false
                    ? navStyles.navlink
                    : navStyles.navlink + ' ' + navStyles.active
                }
                onClick={openMenu}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? navStyles.hamburger
              : navStyles.hamburger + ' ' + navStyles.active
          }
          onClick={openMenu}
        >
          <span className={navStyles.bar}></span>
          <span className={navStyles.bar}></span>
          <span className={navStyles.bar}></span>
        </button>
      </nav>
    </header> */
}
