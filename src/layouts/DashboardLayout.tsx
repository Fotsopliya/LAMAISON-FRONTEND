import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashboardComponents/Sidebar";
import Header from "../components/DashboardComponents/Header";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenu principal */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* Ici s'affichent les pages (dashboard, annonces, etc.) */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
