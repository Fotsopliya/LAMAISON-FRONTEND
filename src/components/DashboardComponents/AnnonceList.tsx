import React from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";


const AnnonceList: React.FC = () => {
  const location = useLocation();
  const role = location.pathname.includes("prospect") ? "PROSPECT" : "AGENT";
  //  Exemple de mock data : à remplacer par un fetch API
  const annonces = [
    { id: 1, titre: "Maison moderne", prix: 250000, type: "Maison" },
    { id: 2, titre: "Appartement cosy", prix: 150000, type: "Appartement" },
  ];

  return (
    <div className="relative space-y-4">
      <h1 className="text-xl font-bold mb-4">
        Liste des annonces
      </h1>

      <SearchBar />

      <ul className="space-y-4">
        {annonces.map((annonce) => (
          <li
            key={annonce.id}
            className="border rounded-lg p-4 shadow-sm bg-white flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{annonce.titre}</h2>
              <p>{annonce.type}</p>
              <p className="text-gray-600">{annonce.prix} FCFA</p>
            </div>
            {/* Actions réservées aux agents */}
            {role === "AGENT" && (
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm">
                  Modifier
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm">
                  Supprimer
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnonceList;
