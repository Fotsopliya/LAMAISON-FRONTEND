import React from 'react'
import SearchBar from '../../components/SearchBar'
import HeroSection from './HeroSection'
import AnnoncesPreview from './AnnoncesPreview'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Section d'en-tête avec Hero */}
      <HeroSection />

      {/* SearchBar complète avec filtres intégrés */}
      <div className="px-4 md:px-0">
        <SearchBar />
      </div>

      {/* Aperçu des annonces en bas */}
      <AnnoncesPreview />
    </div>
  )
}

export default Home

// import React, { useState } from 'react'
// import SearchBar from './SearchBar'
// import HeroSection from './HeroSection'
// import AnnoncesPreview from './AnnoncesPreview'
// import GSelect from '../../components/GSelect'


// const Home: React.FC = () => {
//   const villes = [
//     { value: "yaounde", label: "Yaoundé" },
//     { value: "bertoua", label: "Bertoua" },
//     { value: "dschang", label: "Dschang" }
//   ]
//     const types = [
//     { value: 'appartement', label: 'Appartement' },
//     { value: 'maison', label: 'Maison' },
//     { value: 'terrain', label: 'Terrain' }
//   ]
//  const prix = [
//     { value: '10000000', label: 'Jusqu’à 10M FCFA' },
//     { value: '25000000', label: 'Jusqu’à 25M FCFA' },
//     { value: '50000000', label: 'Jusqu’à 50M FCFA' }
//   ]
//   const [selectedvilles, setSelectedvilles] = useState('');
//   const [selectedtypes, setSelectedtypes] = useState('')
//   const [selectedprix, setSelectedprix] = useState('')
//   return (
//     <div>
//       <HeroSection />
//       <div className='flex gap-2 items-center'>
//       <SearchBar />
//       {/* <GSelect
//           options={villes}
//           value = {selectedvilles}
//           onChange={setSelectedvilles}
//           placeholder='Ville'
//       />
//       <GSelect
//         options={types}
//         value={selectedtypes}
//         onChange={setSelectedtypes}
//         placeholder="Bien"
//         />
//         <GSelect
//         options={prix}
//         value={selectedprix}
//         onChange={setSelectedprix}
//         placeholder="Prix"
      
//       /> */}
//       </div>
//       <AnnoncesPreview />
//     </div>
    

//   )
// }

// export default Home