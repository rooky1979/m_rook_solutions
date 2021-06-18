import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import navStyles from '../styles/Nav.module.css';
import layoutStyles from '../styles/Layout.module.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={layoutStyles.header}>
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
    </header>
  );
};

export default Nav;
