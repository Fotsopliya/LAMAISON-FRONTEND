import React, { useState } from 'react'
import RdvModal from './RdvModal'

type Props = {
  nom: string
  telephone: string
  onPrendre: ()=> void;
}

const AgentCard: React.FC<Props> = ({ nom, telephone }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* --- Carte Agent --- */}
      <div className="border p-4 rounded-lg shadow-md bg-white">
        <h4 className="text-lg font-bold mb-2">Agent immobilier</h4>
        <p><span className="font-medium">Nom :</span> {nom}</p>
        <p><span className="font-medium">Téléphone :</span> {telephone}</p>

        {/* --- Bouton ouvrir la modale --- */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Prendre RDV
        </button>
      </div>

      {/* --- Modale de RDV --- */}
      <RdvModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        agentNom={nom}
        agentTel={telephone}
      />
    </>
  )
}

export default AgentCard

// import React, { useState } from 'react';

// type Props = {
//     nom: string;
//     telephone: string;
// };

// const AgentCard: React.FC<Props> = ({ nom, telephone }) => {
//     const [showModal, setShowModal] = useState(false); // Contrôle de l'ouverture/fermeture de la modale

//     return (
//         <>
//             {/* --- Carte Agent --- */}
//             <div className="border p-4 rounded-lg shadow-md bg-white">
//                 <h4 className="text-lg font-bold mb-2">Agent immobilier</h4>
//                 <p><span className="font-medium">Nom :</span> {nom}</p>
//                 <p><span className="font-medium">Téléphone :</span> {telephone}</p>

//                 {/* --- Bouton ouvrir modale --- */}
//                 <button
//                     onClick={() => setShowModal(true)}
//                     className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                 >
//                     Prendre RDV
//                 </button>
//             </div>

//             {/* --- Modale de RDV --- */}
//             {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//                     <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
//                         <button
//                             onClick={() => setShowModal(false)}
//                             className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
//                         >
//                             &times;
//                         </button>

//                         <h3 className="text-xl font-semibold mb-4">Prendre rendez-vous avec {nom}</h3>

//                         {/* --- Formulaire --- */}
//                         <form
//                             onSubmit={(e) => {
//                                 e.preventDefault();
//                                 // 🔒 Logique d’envoi vers API ici
//                                 setShowModal(false);
//                                 alert("RDV envoyé à l'agent !");
//                             }}
//                             className="space-y-4"
//                         >
//                             <div>
//                                 <label className="block text-sm font-medium">Nom</label>
//                                 <input type="text" className="w-full border p-2 rounded" required />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Prénom</label>
//                                 <input type="text" className="w-full border p-2 rounded" required />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Email</label>
//                                 <input type="email" className="w-full border p-2 rounded" required />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Téléphone</label>
//                                 <input type="tel" className="w-full border p-2 rounded" required />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Date du RDV</label>
//                                 <input type="date" className="w-full border p-2 rounded" required />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Heure</label>
//                                 <input type="time" className="w-full border p-2 rounded" required />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Message</label>
//                                 <textarea className="w-full border p-2 rounded" rows={3} />
//                             </div>

//                             {/* --- Bouton envoyer --- */}
//                             <button
//                                 type="submit"
//                                 className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//                             >
//                                 Envoyer le RDV
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default AgentCard;

// import React from 'react';

// type Props = {
//   nom: string;
//   telephone: string;
// }

// const AgentCard: React.FC<Props> = ({ nom, telephone }) => {
//   return (
//     <div className="border p-4 rounded-lg shadow-md bg-white">
//       <h4 className="text-lg font-bold mb-2">Agent immobilier</h4>
//       <p><span className="font-medium">Nom :</span> {nom}</p>
//       <p><span className="font-medium">Téléphone :</span> {telephone}</p>
//       <a
//         href={`tel:${telephone}`}
//         className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//       >
//         Prendre RDV
//       </a>
//     </div>
//   )
// }

// export default AgentCard;
