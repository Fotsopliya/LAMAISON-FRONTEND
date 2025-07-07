import React from 'react'

const APropos: React.FC = () => {
  return (
    <div className="mt-24 px-4 max-w-3xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">À propos de LAMAISON</h2>

      <div className="bg-white shadow-lg rounded-2xl px-8 py-10 space-y-5 text-justify leading-relaxed">
        <p>
          <strong>LAMAISON</strong> est une plateforme moderne de mise en relation entre <span className="text-green-600 font-semibold">particuliers</span> et <span className="text-green-600 font-semibold">professionnels de l'immobilier</span>.
          Nous facilitons la recherche, la vente et la location de biens immobiliers à travers une interface simple, rapide et sécurisée.
        </p>

        <p>
          Notre objectif est de digitaliser entièrement le parcours immobilier, depuis la consultation des annonces jusqu'à la prise de rendez-vous, les paiements et la signature des contrats.
        </p>

        <p>
          Que vous soyez un particulier souhaitant vendre votre bien ou une agence immobilière souhaitant diffuser vos annonces efficacement, <span className="font-semibold text-yellow-500">LAMAISON</span> est conçu pour vous.
        </p>
      </div>
    </div>
  )
}

export default APropos
