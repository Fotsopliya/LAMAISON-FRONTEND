// src/pages/Dashboard/Profile/Profile.tsx
import { useState, useEffect } from "react";

type UserProfile = {
  firstname: string;
  email: string;
  phone?: string;
  role: "AGENT" | "PROSPECT";
};

const Profile = () => {
  const [user, setUser] = useState<UserProfile>({
    firstname: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "670000000",
    // role: (localStorage.getItem("role") as "AGENT" | "PROSPECT") || "PROSPECT",
     role: location.pathname.includes("prospect") ? "PROSPECT" : "AGENT"

  });

  const [formData, setFormData] = useState(user);

  useEffect(() => {
    // ⚡ Ici tu feras un fetch vers ton backend pour récupérer les vraies infos
    setFormData(user);
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profil mis à jour :", formData);
    alert("Profil mis à jour avec succès !");
    setUser(formData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        {/* Avatar mock */}
        <div className="h-24 w-24 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl font-bold">
          {user.firstname[0]}
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            {user.firstname}
          </h1>
          <p className="text-gray-600">
            {user.role === "AGENT" ? "Agent Immobilier" : "Particulier"}
          </p>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-4"
      >
        {/* Nom */}
        <div>
          <label className="block text-gray-700 mb-1">Nom</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-gray-700 mb-1">Téléphone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Mot de passe */}
        <div>
          <label className="block text-gray-700 mb-1">Nouveau mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Bouton */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Sauvegarder
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
