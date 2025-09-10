import React, { useState } from "react";
// import { useLocation } from "react-router-dom";



const AnnonceForm: React.FC = () => {
  // const location = useLocation();
  // const role = location.pathname.includes("prospect") ? "PROSPECT" : "AGENT";
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    prix: "",
    type: "maison",
    surface: "",
    chambres: "",
    douches: ""
  });

  const [images, setImages] = useState<File[]>([]); // stockage des fichiers

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestion upload images
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files)); // conversion FileList -> tableau
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //  Ici on enverra l'annonce au backend via API
    // const annoncePayload = {
    //   ...formData,
    //   auteurType: "AGENT"
    // };
    const annoncePayload = new FormData();
    annoncePayload.append("titre", formData.titre);
    annoncePayload.append("description", formData.description);
    annoncePayload.append("prix", formData.prix);
    annoncePayload.append("type", formData.type);
    annoncePayload.append("surface", formData.surface);
    annoncePayload.append("chambres", formData.chambres);
    annoncePayload.append("douches", formData.douches);
    annoncePayload.append("auteurType", "AGENT");

    images.forEach((file, _index) => {
      annoncePayload.append("images", file); // "images" doit correspondre au champ attendu par ton backend
    });

    console.log("Annonce publiée :", annoncePayload);
    alert(`Annonce publiée avec succès`);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Publier une annonce (AGENT)
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

        {/* Surface*/}
        <div>
          <label className="block text-gray-700 mb-1">Surface</label>
          <input
            type="number"
            name="surface"
            value={formData.surface}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        {/* Chambre*/}
        <div>
          <label className="block text-gray-700 mb-1">Chambre</label>
          <input
            type="number"
            name="chambres"
            value={formData.chambres}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        {/* Douche*/}
        <div>
          <label className="block text-gray-700 mb-1">Douche</label>
          <input
            type="number"
            name="douches"
            value={formData.douches}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        {/* Upload Images */}
        <div>
          <label className="block text-gray-700 mb-1">Images du bien</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border px-3 py-2 rounded-md"
          />
          {/* Aperçu des images */}
          {images.length > 0 && (
            <div className="mt-2 grid grid-cols-3 gap-2">
              {images.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                  className="w-full h-24 object-cover rounded-md border"
                />
              ))}
            </div>
          )}
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
