import React from 'react'
interface GSelectProps{
    options: Option[]
    value: string
    onChange: (value: string) => void
    placeholder?: string
}
interface Option{
    value: string
    label: string
}
const GSelect:React.FC<GSelectProps> = ({options, value, onChange ,placeholder}) => {
  return (
     <select
      
      value={value}
       onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
    >
      {/* {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )} */}
      if (placeholder != null){
          <option value="" disabled>
          {placeholder}
        </option>
      }
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default GSelect