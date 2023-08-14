import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const MenuButton = ({ menuOpen, toggleMenu }) => {
  return (
    <button className='text-primary md:hidden z-10 text-3xl' onClick={toggleMenu}>
      {menuOpen ? <FiX /> : <FiMenu />}
    </button>
  );
};

export default MenuButton;
