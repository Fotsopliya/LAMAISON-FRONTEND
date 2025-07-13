import React from 'react'

const Confidentialite:React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-4">Politique de Confidentialité</h1>
      <p className="mb-4">
        LAMAISON respecte votre vie privée. Aucune donnée personnelle ne sera vendue à des tiers.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Collecte des données</h2>
      <p className="mb-4">
        Les informations collectées sont utilisées uniquement pour la gestion de votre compte et de vos annonces.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        Le site utilise des cookies pour améliorer l’expérience utilisateur.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Droits des utilisateurs</h2>
      <p className="mb-4">
        Vous pouvez demander à consulter, modifier ou supprimer vos données à tout moment.
      </p>
    </div>
  )
}

export default Confidentialite
