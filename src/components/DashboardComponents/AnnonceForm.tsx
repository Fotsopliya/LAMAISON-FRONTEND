import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// type AnnonceFormProps = {
//   role: "AGENT" | "PROSPECT";
// };

const AnnonceForm: React.FC = () => {
  const location = useLocation();
  const role = location.pathname.includes("prospect") ? "PROSPECT" : "AGENT";
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    prix: "",
    type: "maison",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //  Ici on enverra l'annonce au backend via API
    const annoncePayload = {
      ...formData,
      auteurType: role === "AGENT" ? "professionnel" : "particulier", // différence clé !
    };

    console.log("Annonce publiée :", annoncePayload);
    alert(`Annonce publiée en tant que ${role}`);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Publier une annonce ({role === "AGENT" ? "Pro" : "Particulier"})
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Titre */}
        <div>
          <label className="block text-gray-700 mb-1">Titre</label>
          <input
            type="text"
            name="titre"
            value={formData.titre}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            rows={4}
            required
          />
        </div>

        {/* Prix */}
        <div>
          <label className="block text-gray-700 mb-1">Prix (FCFA)</label>
          <input
            type="number"
            name="prix"
            value={formData.prix}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        {/* Type de bien */}
        <div>
          <label className="block text-gray-700 mb-1">Type de bien</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="maison">Maison</option>
            <option value="appartement">Appartement</option>
            <option value="terrain">Terrain</option>
            <option value="chambre">Chambre</option>
            <option value="meublé">Meublé</option>
          </select>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Publier
        </button>
      </form>
    </div>
  );
};

export default AnnonceForm;
