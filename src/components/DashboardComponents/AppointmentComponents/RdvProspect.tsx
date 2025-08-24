// src/pages/dashboard/prospect/RdvProspect.tsx
import React, { useState } from "react";
import RdvCard from "../AppointmentComponents/RdvCard";
import { DayPicker } from "react-day-picker"; // librairie pour le calendrier
import "react-day-picker/dist/style.css";
import { Calendar } from "lucide-react";

const RdvProspect: React.FC = () => {
  // 👉 Liste des RDV existants du prospect (mockés pour l'instant)
  const [rdvs, setRdvs] = useState([
    {
      date: "20/08/2025",
      heure: "15h00",
      bien: "Appartement 3 pièces - Paris",
      agent: "Agence Laforêt",
      status: "en attente" as const,
    },
    {
      date: "25/08/2025",
      heure: "11h00",
      bien: "Maison 5 chambres - Lyon",
      agent: "Agent Dupont",
      status: "confirmé" as const,
    },
  ]);

  // 👉 Nouvelle date choisie par le prospect
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  // 👉 Fonction pour ajouter un nouveau RDV
  const handleAddRdv = () => {
    if (!selectedDate) {
      alert("Veuillez sélectionner une date !");
      return;
    }

    // Nouveau RDV fictif créé
    const newRdv = {
      date: selectedDate.toLocaleDateString("fr-FR"),
      heure: "14h00", // valeur par défaut, pourrait être un champ input
      bien: "Appartement à définir",
      agent: "Agent à définir",
      status: "en attente" as const,
    };

    // Ajout dans la liste des RDVs
    setRdvs((prev) => [...prev, newRdv]);

    // Réinitialise la date sélectionnée
    setSelectedDate(undefined);
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl font-bold"><Calendar className="text-gray-600 w-6 h-6" /> Mes rendez-vous</h2>

      {/* Liste des RDV existants */}
      {rdvs.map((rdv, i) => (
        <RdvCard key={i} {...rdv} />
      ))}

      {/* Sélecteur de date pour ajouter un nouveau RDV */}
      <div className="bg-white shadow rounded-xl p-4">
        <p className="font-medium mb-2">Choisissez une date :</p>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />

        <button
          onClick={handleAddRdv}
          className="mt-4 w-full sm:w-auto bg-blue-500 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-600"
        >
          ➕ Confirmer ce RDV
        </button>
      </div>
    </div>
  );
};

export default RdvProspect;
