import React from 'react';
import Link from 'next/link';

const MenuItem = ({ href, text, isActive }) => {
  return (
    <li className={`py-3 border-b-[1px] border-solid md:py-0 md:border-none ${isActive ? 'bg-secondary' : ''}`}>
      <Link
        href={href}
        className={`uppercase text-md tracking-[.12em] font-medium hover:text-lion hover:underline transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white`}
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
