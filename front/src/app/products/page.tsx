'use client'
import React, { useEffect } from 'react';
const page = () => {
  // Aseguramos que la página siempre haga scroll al inicio al cargar.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    </div>
  );
};

export default page;
