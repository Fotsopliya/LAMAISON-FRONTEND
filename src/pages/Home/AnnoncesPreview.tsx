import React from 'react'
import { AnnoncesMock } from '../../lib/mock'
import AnnonceCard from '../../components/AnnonceCard'
// Import de "Link" depuis React Router pour faire des liens internes sans recharger la page
import { Link } from 'react-router-dom'

const AnnoncesPreview: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Annonces récentes</h2>
      
      <div className="grid gap-6 md:grid-cols-3">
        {AnnoncesMock.slice(0, 6).map((a) => (
            // Chaque annonce est enveloppée dans un <Link> qui redirige vers sa page de détails
          // "to" contient l’URL dynamique basée sur l’ID de l’annonce
          // "key" est requis par React pour identifier chaque élément de la liste
          // "className" permet d’avoir un petit effet de survol et de style
          <Link to={`/annonce/${a.id}`} key={a.id} className="">
            <AnnonceCard
              id={a.id}
              titre={a.titre}
              ville={a.ville}
              prix={a.prix}
              image={a.image}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default AnnoncesPreview
