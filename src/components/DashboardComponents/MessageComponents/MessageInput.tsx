import React, { useState } from "react"

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState("")

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    console.log("Message envoyé:", message)
    setMessage("")
  }

  return (
    <form onSubmit={handleSend} className="flex items-center p-3 border-t bg-white">
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Écrire un message..."
        className="flex-1 px-4 py-2 border rounded-lg mr-2 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Envoyer
      </button>
    </form>
  )
}

export default MessageInput
