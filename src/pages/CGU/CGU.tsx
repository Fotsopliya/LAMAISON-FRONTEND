import React from 'react'

const CGU: React.FC= () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-4">Conditions Générales d’Utilisation</h1>
      <p className="mb-4">
        Bienvenue sur LAMAISON. En utilisant ce site, vous acceptez les présentes conditions générales d'utilisation.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Objet du site</h2>
      <p className="mb-4">
        LAMAISON est une plateforme de mise en relation entre particuliers et professionnels du secteur immobilier.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Utilisation du service</h2>
      <p className="mb-4">
        Toute utilisation abusive ou frauduleuse du site pourra entraîner une suspension de compte.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Propriété intellectuelle</h2>
      <p className="mb-4">
        Tous les contenus présents sur le site sont la propriété de LAMAISON et ne peuvent être reproduits sans autorisation.
      </p>
    </div>
  )
}

export default CGU
