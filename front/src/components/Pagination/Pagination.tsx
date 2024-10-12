import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 my-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-brownD-200 rounded text-white ${
          currentPage === 1
            ? 'cursor-not-allowed opacity-50'
            : 'hover:bg-brownD-100 '
        }`}
      >
        Anterior
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded ${
              page === currentPage
                ? 'bg-brownD-100 text-white'
                : 'bg-whiteD-200 hover:bg-brownD-200'
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-brownD-200 rounded text-white ${
          currentPage === totalPages
            ? 'cursor-not-allowed opacity-50'
            : 'hover:bg-brownD-100'
        }`}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
