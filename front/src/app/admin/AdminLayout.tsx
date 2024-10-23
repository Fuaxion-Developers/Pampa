import Sidebar from '@/components/Admin/sidebar/Sidebar';
import '../globals.css';
import NavbarAdmin from '@/components/Admin/NavbarAdmin/NavbarAdmin';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex  bg-whiteD-200 ">
      {' '}
      <Sidebar />
      <NavbarAdmin />
      {children}
    </div>
  );
}
