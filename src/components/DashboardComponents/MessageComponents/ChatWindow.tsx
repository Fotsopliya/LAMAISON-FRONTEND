import React from "react"
import MessageInput from "../MessageComponents/MessageInput"

type Props = {
  conversationId: number
  onBack: () => void
}

const mockMessages = [
  { id: 1, sender: "Agence Dupont", text: "Bonjour, intéressé par l’annonce ?" },
  { id: 2, sender: "Moi", text: "Oui, pouvez-vous me donner plus de détails ?" },
]

const ChatWindow: React.FC<Props> = ({ conversationId, onBack }) => {
  return (
    <div className="flex flex-col w-full h-full bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        {/* Bouton retour visible seulement sur mobile */}
        <button
          onClick={onBack}
          className="md:hidden mr-2 text-blue-600 font-semibold"
        >
          ← Retour
        </button>
        <h2 className="font-semibold">Conversation {conversationId}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === "Moi"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <MessageInput />
    </div>
  )
}

export default ChatWindow


// import React from "react"
// import { useParams } from "react-router-dom"
// import MessageInput from "../MessageComponents/MessageInput"

// const mockMessages = [
//   { id: 1, sender: "me", text: "Bonjour 👋" },
//   { id: 2, sender: "them", text: "Salut ! Disponible pour une visite ?" },
//   { id: 3, sender: "me", text: "Oui, quand seriez-vous dispo ?" },
// ]

// const ChatWindow: React.FC = () => {
//   const { id } = useParams()

//   return (
//     <div className="flex flex-col h-full">
//       {/* Header */}
//       <div className="p-4 border-b bg-white">
//         <h2 className="font-semibold">Conversation #{id}</h2>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
//         {mockMessages.map(msg => (
//           <div
//             key={msg.id}
//             className={`max-w-xs p-2 rounded-lg ${
//               msg.sender === "me"
//                 ? "bg-blue-500 text-white self-end"
//                 : "bg-gray-200 text-gray-800 self-start"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       {/* Input */}
//       <MessageInput />
//     </div>
//   )
// }

// export default ChatWindow
