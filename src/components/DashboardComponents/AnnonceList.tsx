import React from "react";
import { useLocation } from "react-router-dom";

// type AnnonceListProps = {
//   role: "AGENT" | "PROSPECT";
// };

const AnnonceList: React.FC= () => {
   const location = useLocation();
  const role = location.pathname.includes("prospect") ? "PROSPECT" : "AGENT";
  //  Exemple de mock data : à remplacer par un fetch API
  const annonces = [
    { id: 1, titre: "Maison moderne", prix: 250000, type: "Maison" },
    { id: 2, titre: "Appartement cosy", prix: 150000, type: "Appartement" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        {role === "AGENT" ? "Mes annonces (Pro)" : "Mes annonces (Particulier)"}
      </h1>

      <ul className="space-y-4">
        {annonces.map((annonce) => (
          <li
            key={annonce.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <h2 className="font-semibold">{annonce.titre}</h2>
            <p>{annonce.type}</p>
            <p className="text-gray-600">{annonce.prix} FCFA</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnonceList;
