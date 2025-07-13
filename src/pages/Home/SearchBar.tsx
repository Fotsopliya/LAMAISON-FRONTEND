import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar: React.FC = () => {
  const [placeholder, setPlaceholder] = useState('Rechercher dans LAMAISON')

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth < 768) {
        //  Ce placeholder ne sera plus visible mais on garde une valeur
        setPlaceholder('Recherche')
      } else {
        setPlaceholder('Rechercher dans LAMAISON')
      }
    }

    updatePlaceholder()
    window.addEventListener('resize', updatePlaceholder)
    return () => window.removeEventListener('resize', updatePlaceholder)
  }, [])

  return (
    <form
      className="
        flex items-center justify-center gap-3
        bg-gray-100 rounded-full px-4 py-2
        max-w-3xl mx-auto w-full
      "
    >
      {/* Champ de recherche : visible uniquement à partir de md (≥768px) */}
      <input
        type="text"
        placeholder={placeholder}
        className="
          hidden md:flex flex-1 min-w-[180px]
          bg-transparent text-sm md:text-base text-gray-800
          px-4 py-2 outline-none placeholder:text-gray-500
        "
      />

      {/* Bouton de recherche : toujours visible */}
      <button
        type="submit"
        className="
          bg-green-600 text-white p-3 rounded-[10px]
          hover:bg-green-700 transition
        "
        title="Rechercher"
      >
        <FaSearch className="text-base" />
      </button>
    </form>
  )
}

export default SearchBar




// // import React from 'react'
// // import { FaSearch } from 'react-icons/fa'

// // const SearchBar: React.FC = () => {
// //     return (
// //         <form className='flex items-center flex-grow bg-gray-100 rounded-full px-4 py-2 max-w-md'>
// //             <input 
// //                 type="text"
// //                 placeholder="Rechercher dans LAMAISON"
// //                 className="bg-transparent w-full  px-4 py-2 outline-none" 
// //             />
// //             <button 
// //                 type="submit"
// //                 className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700"
// //             >
// //                 <FaSearch/>
// //             </button>
// //         </form>
// //     )
// // }

// // export default SearchBar
// import React from 'react'
// import { FaSearch } from 'react-icons/fa'

// const SearchBar: React.FC = () => {
//   return (
//     <form
//       className="flex flex-wrap items-center justify-center gap-3 bg-gray-100 rounded-full px-4 py-3 max-w-3xl mx-auto w-full"
//     >
//       {/* Champ de recherche */}
//       <input
//         type="text"
//         placeholder="Rechercher dans LAMAISON"
//         className="flex-1 min-w-[180px] bg-transparent text-sm md:text-base text-gray-800 px-4 py-2 outline-none placeholder:text-gray-500"
//       />

//       {/* Bouton de recherche */}
//       <button
//         type="submit"
//         className="bg-green-600 text-white p-3 rounded-[10px] hover:bg-green-700 transition"
//       >
//         <FaSearch className="text-base" />
//       </button>
//     </form>
//   )
// }

// export default SearchBar
