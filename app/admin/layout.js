import AdminSidebar from '@/components/admin/AdminSidebar';
import './admin.css';

export default function AdminLayout({ children }) {
  return (
    <div className="adminApp">
      <AdminSidebar />

      <div className="adminMain">
        {children}
      </div>
    </div>
  );
}