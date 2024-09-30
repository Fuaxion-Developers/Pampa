import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BanerCategories = () => {
  return (
    <div className="bg-brownD-100 flex justify-between p-4 text-whiteD-100 my-4">
      <div className="flex justify-center items-center m-8">
        <h2 className="text-[50px] font-semibold ">PRODUCTOS</h2>
      </div>
      <div className='flex'>
        <Image
          alt="Imagen"
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1727721484/Rectangle_9605_mp9jx6.png"
          width={300}
          height={300}
        />
        <Image
          alt="Imagen"
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1727722911/Rectangle_9601_p4rj7z.png"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default BanerCategories;
