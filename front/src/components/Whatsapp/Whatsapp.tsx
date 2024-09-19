import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Whatsapp = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <Link
        href="https://wa.me/5215512345678" 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        <Image
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726677958/icons8-whatsapp_ndirqi.svg"
          alt="Whatsapp"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Whatsapp;
