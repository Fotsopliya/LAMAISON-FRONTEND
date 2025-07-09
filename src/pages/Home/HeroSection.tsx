import React from 'react'
import heroImage from '../../assets/img/hero.jpg'

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      
      {/* Image de fond */}
      <img
        src= {heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/*Overlay foncé pour lisibilité */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenu au-dessus */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Trouvez le bien immobilier idéal</h1>
        <p className="text-lg md:text-xl mb-6">Avec LAMAISON, explorez des milliers d’annonces en un clic.</p>
        
      </div>
    </div>
  )
}

export default HeroSection
