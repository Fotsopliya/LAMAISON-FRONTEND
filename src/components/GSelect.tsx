import React from 'react'

//Structure attendue pour chaque option (ex: { value: "maison", label: "Maison" })
interface Option {
  value: string
  label: string
}

//Props que reçoit le composant GSelect
interface GSelectProps {
  options: Option[]                  // Liste des options à afficher
  value: string                      // Valeur actuellement sélectionnée
  onChange: (value: string) => void // Fonction appelée quand on sélectionne
  placeholder?: string              // Texte d’intro optionnel
}

//Composant GSelect (menu déroulant réutilisable)
const GSelect: React.FC<GSelectProps> = ({ options, value, onChange, placeholder }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      // Style responsive et propre avec Tailwind
      className="w-full max-w-xs sm:max-w-sm px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
    >
      {/*  Affiche le placeholder s’il est fourni */}
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {/*  Boucle sur toutes les options et les affiches */}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default GSelect
