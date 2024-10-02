'use client'
import ProductList from '@/components/Productos/ProductsCards/ProductList';
import productsToPreLoad from '@/helpers/products';
import React, { useEffect } from 'react';
const page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ProductList products={productsToPreLoad} />
    </div>
  );
};

export default page;
