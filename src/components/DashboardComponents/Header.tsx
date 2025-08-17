import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Exemple : rôle stocké dans localStorage après login
  // const role = localStorage.getItem("role") || "PROSPECT";
    const role = location.pathname.includes("prospect") ? "PROSPECT" : "AGENT";


  // Menu dynamique selon le rôle
  const menuItems =
    role === "AGENT"
      ? [
          { path: "/dashboard/agent/profile", label: "Mon profil" },
          { path: "/dashboard/agent/annonces", label: "Mes annonces" },
          { path: "/dashboard/agent/annonces/new", label: "Publier une annonce" },
          { path: "/settings", label: "Paramètres" },
        ]
      : [
          { path: "/dashboard/prospect/profile", label: "Mon profil" },
          { path: "/dashboard/prospect/annonces", label: "Mes annonces" },
          { path: "/dashboard/prospect/favoris", label: "Mes favoris" },
          { path: "/settings", label: "Paramètres" },
        ];

  return (
    <header className="bg-white shadow px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-10 w-auto" />

      {/* Menu Mon Compte */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:shadow-md transition"
        >
          {/* Avatar mock (tu pourras remplacer par un avatar dynamique) */}
          <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
            {role[0]} {/* Affiche la première lettre du rôle */}
          </div>
          <span className="hidden sm:inline font-medium">Mon Compte</span>
          <ChevronDown size={18} />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden border z-50">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-3 hover:bg-gray-100 text-gray-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Déconnexion */}
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
              }}
              className="w-full text-left px-4 py-3 text-red-600 hover:bg-gray-100"
            >
              Déconnexion
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;




// import logo from "../../assets/logo.jpg";
// import { User } from "lucide-react";

// const Header = () => {
//   return (
//     <header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-30">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <img src={logo} alt="logo" className="h-10 w-auto rounded" />
//       </div>

//       {/* Actions utilisateur */}
//       <div className="flex items-center gap-4">
//         <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition">
//           <User size={18} /> Mon compte
//         </button>
//         <button
//           className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//           onClick={() => {
//             localStorage.clear();
//             window.location.href = "/login";
//           }}
//         >
//           Déconnexion
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;




// // src/components/DashboardComponents/Header.tsx
// import logo from '../../assets/logo.jpg'
// const Header = () => {
//   return (
//     <header className="bg-white shadow p-4 flex justify-between items-center">
//      <img src={logo} alt="logo" className="w-auto h-10"/>
//       <div className="flex items-center gap-4">
//         <button
//           className="bg-red-500 text-white px-3 py-1 rounded"
//           onClick={() => {
//             localStorage.clear();
//             window.location.href = "/login";
//           }}
//         >
//           Déconnexion
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
