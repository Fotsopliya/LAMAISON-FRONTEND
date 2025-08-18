import React from "react"

type Props = {
  onSelectConversation: (id: number) => void
}

const mockConversations = [
  { id: 1, name: "Agence Dupont", lastMessage: "Bonjour, intéressé par l’annonce ?" },
  { id: 2, name: "Prospect Martin", lastMessage: "Merci pour la visite !" },
  { id: 3, name: "Admin", lastMessage: "Rappel: vos annonces expirent bientôt" },
]

const ConversationsList: React.FC<Props> = ({ onSelectConversation }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white">
      <h2 className="text-lg font-semibold p-4 border-b">Conversations</h2>
      {mockConversations.map((conv) => (
        <div
          key={conv.id}
          onClick={() => onSelectConversation(conv.id)}
          className="p-4 border-b hover:bg-gray-100 cursor-pointer"
        >
          <p className="font-medium">{conv.name}</p>
          <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
        </div>
      ))}
    </div>
  )
}

export default ConversationsList


// import React from "react"
// import { Link } from "react-router-dom"

// const mockConversations = [
//   { id: 1, name: "Agent Immobilier A", lastMessage: "Bonjour, dispo pour visiter ?", time: "14:20" },
//   { id: 2, name: "Prospect B", lastMessage: "Merci pour l’info !", time: "Hier" },
//   { id: 3, name: "Admin", lastMessage: "Votre annonce est validée ✅", time: "2j" },
// ]

// const ConversationsList: React.FC = () => {
//   return (
//     <div className="h-full overflow-y-auto">
//       <h2 className="p-4 font-bold text-lg">Conversations</h2>
//       <ul>
//         {mockConversations.map(conv => (
//           <li key={conv.id}>
//             <Link
//               to={`/dashboard/messages/${conv.id}`}
//               className="flex items-center justify-between p-4 hover:bg-gray-100 border-b"
//             >
//               <div>
//                 <p className="font-semibold">{conv.name}</p>
//                 <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
//               </div>
//               <span className="text-xs text-gray-400">{conv.time}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default ConversationsList
