import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href='/' className="text-[28px] text-primary font-normal text-lion">
        Culinary <span className="text-white">Crafters</span>
      </Link>
    </div>
  );
};

export default Logo;
