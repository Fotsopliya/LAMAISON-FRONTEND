import React from 'react'
import SearchBar from './SearchBar'
import HeroSection from './HeroSection'
import AnnoncesPreview from './AnnoncesPreview'


const Home:React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <SearchBar/>
      <AnnoncesPreview/>
    </div>

  )
}

export default Home