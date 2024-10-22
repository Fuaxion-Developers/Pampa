import Image from 'next/image';
import React from 'react'

const Navbar = () => {
  return (
    <div className="border-b-2 p-4 border-black">
      <div className="flex justify-end gap-4">
        Bienvenido/a Admin
        <Image
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1727981367/shopping_bag_24dp_6B432E_FILL0_wght400_GRAD0_opsz24_1_mdej5y.svg"
          alt="Cart"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}

export default Navbar
