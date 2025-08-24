// src/pages/dashboard/rdv/RdvLayout.tsx
import React from "react";
import RdvProspect from "../components/DashboardComponents/AppointmentComponents/RdvProspect";
import RdvAgent from "../components/DashboardComponents/AppointmentComponents/RdvAgent";

// Exemple: à remplacer par ton vrai AuthContext
const mockUser = {
  role: "agent", // change en "agent" pour tester
};

const RdvLayout: React.FC = () => {
  if (mockUser.role === "prospect") {
    return <RdvProspect />;
  }

  if (mockUser.role === "agent") {
    return <RdvAgent />;
  }

  return <div className="p-6">⚠️ Aucun rôle détecté</div>;
};

export default RdvLayout;


// import React from "react";
// import { Outlet, NavLink } from "react-router-dom";

// const RdvLayout: React.FC = () => {
//   return (
//     <div className="p-4">
//       <nav className="flex gap-4 border-b pb-2 mb-4">
//         <NavLink
//           to="prospect"
//           className={({ isActive }) =>
//             `px-3 py-1 rounded-lg ${isActive ? "bg-blue-500 text-white" : "text-gray-700"}`
//           }
//         >
//           Mes RDV (Prospect)
//         </NavLink>
//         <NavLink
//           to="agent"
//           className={({ isActive }) =>
//             `px-3 py-1 rounded-lg ${isActive ? "bg-blue-500 text-white" : "text-gray-700"}`
//           }
//         >
//           RDV Agents
//         </NavLink>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// export default RdvLayout;
