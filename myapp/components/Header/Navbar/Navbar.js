'use client'
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='header-main px-3 flex-1 flex'>
      <div className='container max-w-[1200px] mx-auto flex flex-col'>
        <div className='py-5 md:flex md:justify-between'>
          <div className='flex justify-between'>
            <div>
              <Link href='/' className="text-[28px] text-primary font-normal text-lion">
                Culinary <span className="text-white">Crafters</span>
              </Link>
            </div>
            <button className='text-primary md:hidden z-10 text-3xl'
            onClick={toggleMenu}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
            <div
              className={`navbar-box fixed top-0 right-0 w-[280px] h-full bg-white p-5 flex flex-col items-center font-barlow-cond transition duration-300 ease-in-out md:relative md:bg-transparent md:flex-row md:h-auto md:w-auto md:p-0 ${
                menuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <ul className='flex flex-col w-full text-center mt-[60px] md:flex-row md:mt-0'>
                <li className='py-3 border-b-[1px] border-solid md:py-0 md:border-none'>
                  <Link
                    href={'/'}
                    className='uppercase text-md tracking-[.12em] font-medium hover:text-lion hover:underline transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white'
                  >
                    Home
                  </Link>
                </li>
                <li className='py-3 border-b-[1px] border-solid md:py-0 md:border-none'>
                  <Link
                    href={'/'}
                    className='uppercase text-md tracking-[.12em] font-medium hover:text-lion hover:underline transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white'
                  >
                    Gallery
                  </Link>
                </li>
                <li className='py-3 border-b-[1px] border-solid md:py-0 md:border-none'>
                  <Link
                    href={'/'}
                    className='uppercase text-md tracking-[.12em] font-medium hover:text-lion hover:underline transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white'
                  >
                    About
                  </Link>
                </li>
                <li className='py-3 border-b-[1px] border-solid md:py-0 md:border-none'>
                  <Link
                    href={'/'}
                    className='uppercase text-md tracking-[.12em] font-medium hover:text-lion hover:underline transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
