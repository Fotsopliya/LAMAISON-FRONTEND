import React, { useState } from 'react'
import SearchBar from './SearchBar'
import HeroSection from './HeroSection'
import AnnoncesPreview from './AnnoncesPreview'
import GSelect from '../../components/GSelect'


const Home: React.FC = () => {
  const villes = [
    { value: "yaounde", label: "Yaoundé" },
    { value: "bertoua", label: "Bertoua" },
    { value: "dschang", label: "Dschang" }
  ]
    const types = [
    { value: 'appartement', label: 'Appartement' },
    { value: 'maison', label: 'Maison' },
    { value: 'terrain', label: 'Terrain' }
  ]
 const prixMax = [
    { value: '10000000', label: 'Jusqu’à 10M FCFA' },
    { value: '25000000', label: 'Jusqu’à 25M FCFA' },
    { value: '50000000', label: 'Jusqu’à 50M FCFA' }
  ]
  const [selectedvilles, setSelectedvilles] = useState('');
  const [selectedtypes, setSelectedtypes] = useState('')
  const [selectedprix, setSelectedprix] = useState('')
  return (
    <div>
      <HeroSection />
      <div className='flex gap-2 items-center'>
      <SearchBar />
      <GSelect
          options={villes}
          value = {selectedvilles}
          onChange={setSelectedvilles}
          placeholder='filtrer par ville'
      />
      <GSelect
        options={types}
        value={selectedtypes}
        onChange={setSelectedtypes}
        placeholder="filtrer par type de bien"
        />
        <GSelect
        options={prixMax}
        value={selectedprix}
        onChange={setSelectedprix}
        placeholder="filtrer par prix max"
      
      />
      </div>
      <AnnoncesPreview />
    </div>
    

  )
}

export default Home