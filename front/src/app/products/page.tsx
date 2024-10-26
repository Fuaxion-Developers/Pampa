'use client'
import Pagination from '@/components/Pagination/Pagination';
import ProductList from '@/components/Products/ProductsCards/ProductCards';
import React, { useEffect, useState } from 'react';
const page = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const totalPages = 10; // Total de páginas a paginar, ajusta según tus necesidades

   const handlePageChange = (page: number) => {
     setCurrentPage(page);
     // Lógica adicional para cargar datos correspondientes a la página
   };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl my-6">Página {currentPage}</h1>
      <ProductList />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default page;
