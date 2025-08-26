import React, { useState } from "react";
import RdvCard from "../AppointmentComponents/RdvCard";

// ✅ On définit les types
type RdvStatus = "en attente" | "confirmé" | "refusé";
interface Rdv {
  date: string;
  heure: string;
  bien: string;
  prospect: string;
  status: RdvStatus;
}

const RdvAgent: React.FC = () => {
  const [rdvs, setRdvs] = useState<Rdv[]>([
    {
      date: "20/08/2025",
      heure: "15h00",
      bien: "Appartement 3 pièces - Paris",
      prospect: "Jean Martin",
      status: "en attente",
    },
    {
      date: "25/08/2025",
      heure: "11h00",
      bien: "Maison 5 chambres - Lyon",
      prospect: "Claire Dubois",
      status: "confirmé",
    },
  ]);

  // ✅ Ici TS accepte bien car status est un RdvStatus
  const handleAction = (index: number, action: "confirmer" | "refuser") => {
    setRdvs((prev) =>
      prev.map((rdv, i) =>
        i === index
          ? { ...rdv, status: action === "confirmer" ? "confirmé" : "refusé" }
          : rdv
      )
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">📅 RDV avec les prospects</h2>
      {rdvs.map((rdv, i) => (
        <RdvCard
          key={i}
          {...rdv}
          PROSPECT={rdv.prospect}
          onAction={(action) => handleAction(i, action)}
        />
      ))}
    </div>
  );
};

export default RdvAgent;
