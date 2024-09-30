import React from 'react';
import BanerCategories from '@/components/Productos/BanerCategories/BanerCategories';
import Categories from '@/components/Productos/Categories/Categories';
import Navbar from '@/components/Home/Navbar/Navbar';
import Footer from '@/components/Home/Footer/Footer';

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Navbar/>
      <BanerCategories />
      <Categories />
      {children}
      <Footer/>
    </div>
  );
};

export default ProductLayout;
