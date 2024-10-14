import Sidebar from '@/components/Admin/sidebar/Sidebar';
import '../globals.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-whiteD-200">
      <Sidebar />
      {children}
    </div>
  );
}
