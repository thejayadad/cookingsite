import React from 'react';
import { FaCircle } from 'react-icons/fa';

const ImageDot = ({ active, onClick }) => {
  return (
    <FaCircle
      className={`cursor-pointer ${active ? 'text-lion' : 'text-gray-400'}`}
      onClick={onClick}
    />
  );
};

export default ImageDot;
