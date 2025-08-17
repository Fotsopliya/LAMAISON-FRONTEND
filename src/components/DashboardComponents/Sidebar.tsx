import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, FilePlus, List, User, Heart } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // Rôle simulé depuis localStorage ( à remplacer avec AuthContext plus tard)
  const role = location.pathname.includes("prospect") ? "PROSPECT" : "AGENT";
  
  const links =
    role === "AGENT"
      ? [
          { path: "/dashboard/agent", label: "Tableau de bord", icon: <Home size={18} /> },
          { path: "/dashboard/agent/annonces", label: "Mes annonces", icon: <List size={18} /> },
          { path: "/dashboard/agent/annonces/new", label: "Publier une annonce", icon: <FilePlus size={18} /> },
          { path: "/dashboard/agent/profile", label: "Profil", icon: <User size={18} /> },
        ]
      : [
          { path: "/dashboard/prospect", label: "Tableau de bord", icon: <Home size={18} /> },
          { path: "/dashboard/prospect/annonces", label: "Mes annonces", icon: <List size={18} /> },
          { path: "/dashboard/prospect/annonces/new", label: "Publier une annonce", icon: <FilePlus size={18} /> },
          { path: "/dashboard/prospect/favoris", label: "Mes favoris", icon: <Heart size={18} /> },
          { path: "/dashboard/prospect/profile", label: "Profil", icon: <User size={18} /> },
        ];

  return (
    <>
      {/* Bouton mobile (menu burger) */}
      <button
        className="lg:hidden p-3 fixed top-4 left-4 z-50 bg-green-600 text-white rounded-md shadow-md"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-green-700 text-white p-6 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:static z-40`}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard {role}</h2>
        <nav className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-green-600 transition duration-200"
              onClick={() => setOpen(false)}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;





// // src/components/DashboardComponents/Sidebar.tsx
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// // import { FaBars, FaTimes } from "react-icons/fa";

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);

//   // Exemple : tu peux détecter le rôle depuis le localStorage ou context
//   const role = localStorage.getItem("role") || "AGENT";

//   const links = role === "AGENT"
//     ? [
//       { path: "/dashboard/agent", label: "Tableau de bord" },
//       { path: "/dashboard/agent/annonces", label: "Mes annonces" },
//       { path: "/dashboard/agent/annonces/new", label: "Publier une annonce" },
//       { path: "/dashboard/agent/profile", label: "Profil" },
//     ]
//     : [
//       { path: "/dashboard/prospect", label: "Tableau de bord" },
//       { path: "/dashboard/prospect/annonces", label: "Mes favoris" },
//       { path: "/dashboard/prospect/profile", label: "Profil" },
//     ];

//   return (
//     <>
//       {/* Bouton mobile */}
//       <button
//         className="lg:hidden p-4"
//         onClick={() => setOpen(!open)}
//       >
//         {open ? <X size={28} /> : <Menu size={28} />}
//         {/* { open ? <FaTimes/> : <FaBars/>} */}
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`fixed lg:static top-0 left-0 h-full w-64 bg-green-600 text-white p-4 transform ${open ? "translate-x-0" : "-translate-x-full"
//           } transition-transform lg:translate-x-0`}
//       >
//         <h2 className="text-xl font-bold mb-6">Dashboard {role}</h2>
//         <nav className="space-y-3">
//           {links.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className="block px-3 py-2 rounded hover:bg-green-700 transition duration-300"
//               onClick={() => setOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;
