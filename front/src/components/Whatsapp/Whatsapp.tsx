import Image from 'next/image';
import React from 'react';

const Whatsapp = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <Image
        src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726677958/icons8-whatsapp_ndirqi.svg"
        alt="Whatsapp"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Whatsapp;
