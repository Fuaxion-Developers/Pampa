import Admin from '@/components/Admin/Admin';
import Categorias from '@/components/Admin/categories/Categories';
import Clientes from '@/components/Admin/Clientes/clientes';
import Navbar from '@/components/Admin/Nav/Navbar';
import Productos from '@/components/Admin/Products/Products';
import Sidebar from '@/components/Admin/sidebar/Sidebar';
import Ventas from '@/components/Admin/Ventas/Ventas';
import React from 'react';

const page = () => {
  return (
    <div className=''>
<Navbar/>
  <div className='grid-cols-2 grid m-8 gap-8' >
<Clientes/>
<Categorias/>
<Productos/>
<Ventas/>
    </div>
    </div>
    )
};

export default page;
