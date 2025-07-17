import React, { useState } from 'react'

type RdvModalProps = {
  isOpen: boolean
  onClose: () => void
  agentNom: string
  agentTel: string
}

const RdvModal: React.FC<RdvModalProps> = ({ isOpen, onClose, agentNom, }) => {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [date, setDate] = useState('')
  const [heure, setHeure] = useState('')
  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    //  Logique d’envoi API ici...
    alert(`RDV envoyé à ${agentNom} !`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/*  Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        <h3 className="text-xl font-semibold mb-4 text-center">
          Prendre rendez-vous avec {agentNom}
        </h3>

        {/*  Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Téléphone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="time"
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-2 rounded"
            rows={4}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </div>
  )
}

export default RdvModal
