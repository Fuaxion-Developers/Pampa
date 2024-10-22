// pages/admin/ventas.tsx

interface Venta {
  id: number;
  cliente: string;
  producto: string;
  fecha: string;
}

const Ventas = () => {
  const ventas: Venta[] = [
    { id: 1, cliente: 'Juan Perez', producto: 'Laptop', fecha: '2024-01-15' },
    { id: 2, cliente: 'Ana Lopez', producto: 'Camiseta', fecha: '2024-02-20' },
  ];

  return (
    <div className="bg-brownD-200 p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Historial de Ventas</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Cliente</th>
            <th className="py-2">Producto</th>
            <th className="py-2">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map(venta => (
            <tr key={venta.id}>
              <td className="border px-4 py-2">{venta.id}</td>
              <td className="border px-4 py-2">{venta.cliente}</td>
              <td className="border px-4 py-2">{venta.producto}</td>
              <td className="border px-4 py-2">{venta.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ventas;
