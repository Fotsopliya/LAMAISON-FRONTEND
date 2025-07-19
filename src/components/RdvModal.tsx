import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type RdvModalProps = {
  isOpen: boolean
  onClose: () => void
  proprietaireNom: string
  proprietaireTel: string
}

const RdvModal: React.FC<RdvModalProps> = ({
  isOpen,
  onClose,
  proprietaireNom,
  proprietaireTel,
}) => {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [date, setDate] = useState<Date | null>(null)
  const [heure, setHeure] = useState<Date | null>(null)
  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`RDV envoyé à ${proprietaireNom} (${proprietaireTel}) !`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          Prendre rendez-vous avec <span className="text-green-600">{proprietaireNom}</span>
        </h3>

        {/* Formulaire de RDV */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="tel"
              placeholder="Téléphone"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Sélecteur de date */}
            <DatePicker
              selected={date}
              onChange={(val) => setDate(val)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Date du RDV"
              className="border p-2 rounded w-full"
              required
            />

            {/* Sélecteur d’heure */}
            <DatePicker
              selected={heure}
              onChange={(val) => setHeure(val)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Heure"
              dateFormat="HH:mm"
              placeholderText="Heure du RDV"
              className="border p-2 rounded w-full"
              required
            />
          </div>

          {/* Champ message libre */}
          <textarea
            placeholder="Message (facultatif)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded w-full"
            rows={4}
          />

          {/* Bouton d’envoi */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </div>
  )
}

export default RdvModal


// import React, { useState } from 'react'


// type RdvModalProps = {
//   isOpen: boolean
//   onClose: () => void
//   proprietaireNom: string
//   proprietaireTel: string
// }

// const RdvModal: React.FC<RdvModalProps> = ({ isOpen, onClose, proprietaireNom, }) => {
//   const [nom, setNom] = useState('')
//   const [prenom, setPrenom] = useState('')
//   const [email, setEmail] = useState('')
//   const [tel, setTel] = useState('')
//   const [date, setDate] = useState('')
//   const [heure, setHeure] = useState('')
//   const [message, setMessage] = useState('')

//   if (!isOpen) return null

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     //  Logique d’envoi API ici...
//     alert(`RDV envoyé à ${proprietaireNom} !`)
//     onClose()
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
//         {/*  Bouton fermer */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
//         >
//           &times;
//         </button>

//         <h3 className="text-xl font-semibold mb-4 text-center">
//           Prendre rendez-vous avec {proprietaireNom}
//         </h3>

//         {/*  Formulaire */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Nom"
//             value={nom}
//             onChange={(e) => setNom(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Prénom"
//             value={prenom}
//             onChange={(e) => setPrenom(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Adresse email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Téléphone"
//             value={tel}
//             onChange={(e) => setTel(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <input
//             type="time"
//             value={heure}
//             onChange={(e) => setHeure(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <textarea
//             placeholder="Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full border p-2 rounded"
//             rows={4}
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//           >
//             Envoyer la demande
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default RdvModal
