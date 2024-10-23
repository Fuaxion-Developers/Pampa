import React from 'react';

const Dashboard = () => {
  return (
    <div className="grid-cols-2 grid gap-4">
      <div className=" border flex-col flex p-4">
        <h2 className="text-[30px]">Clientes</h2>
        <div className="flex gap-4 ">
          <p>Total de Clientes</p>
          <p>100</p>
        </div>
      </div>
      <div className=" border flex-col flex p-4">
        <h2 className="text-[30px]">Ventas</h2>
        <div className="flex gap-4 ">
          <p>Total de Ventas</p>
          <p>100</p>
        </div>
      </div>
      <div className=" border flex-col flex p-4">
        <h2 className="text-[30px]">Productos</h2>
        <div className="flex gap-4 ">
          <p>Total de Productos</p>
          <p>100</p>
        </div>
      </div>
      <div className=" border flex-col flex p-4">
        <h2 className="text-[30px]">Categorias</h2>
        <div className="flex gap-4 ">
          <p>Total de Categorias</p>
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
