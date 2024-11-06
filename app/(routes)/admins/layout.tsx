import { AdminNavbar } from "./components/navbars/admin-navbar"
import { AdminSidebar } from "./components/sidebars/admin-sidebar"

const AdminLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="w-full h-full">
      <AdminSidebar />
      <AdminNavbar/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default AdminLayout