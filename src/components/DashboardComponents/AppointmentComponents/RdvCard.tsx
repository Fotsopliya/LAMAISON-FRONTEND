import { Building, Calendar } from "lucide-react";
import React from "react";
import { FaUser } from "react-icons/fa";

interface RdvCardProps {
  date: string;
  heure: string;
  bien: string;
  PROSPECT?: string;
  AGENT?: string;
  status: "en attente" | "confirmé" | "refusé";
  onAction?: (action: "confirmer" | "refuser") => void; // utilisé côté agent
}

const RdvCard: React.FC<RdvCardProps> = ({ date, heure, bien, PROSPECT, AGENT, status, onAction }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <div>
        <h3 className="font-semibold text-lg">{bien}</h3>
        <p className="text-sm text-gray-600 flex items-center gap-1"><Calendar className="text-gray-600 w-4 h-4" />{date} à {heure}
        </p>
        {PROSPECT && (
          <p className="text-sm flex items-center gap-1">
            <FaUser className="text-gray-600 w-4 h-4" />
            Prospect : {PROSPECT}
          </p>
        )}
        {AGENT && (
          <p className="text-sm flex items-center gap-1">
            <Building className="text-indigo-600 w-4 h-4" />
            Agent : {AGENT}
          </p>
        )}

        {/* Badge de statut */}
        <span className={`px-3 py-1 text-xs rounded-full mt-1 inline-block
          ${status === "confirmé" ? "bg-green-100 text-green-600" : ""}
          ${status === "refusé" ? "bg-red-100 text-red-600" : ""}
          ${status === "en attente" ? "bg-yellow-100 text-yellow-600" : ""}
        `}>
          {status}
        </span>
      </div>
      {/* Boutons d’action visibles uniquement côté Agent */}
      {onAction && (
        <div className="flex gap-2">
          <button
            onClick={() => onAction("confirmer")}
            className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
          >
            Confirmer
          </button>
          <button
            onClick={() => onAction("refuser")}
            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
          >
            Refuser
          </button>
        </div>
      )}
    </div>
  );
};

export default RdvCard;
