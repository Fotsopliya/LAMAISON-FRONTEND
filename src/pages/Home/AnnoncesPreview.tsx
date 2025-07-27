import React from 'react'
import { AnnoncesMock } from '../../lib/mock'
import AnnonceCard from '../../components/AnnonceCard'
import { t } from 'i18next'

const AnnoncesPreview: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">{t('annoncepreview.recent')}</h2>

{/* Grille responsive : 1 colonne sur mobile, 2 sur petits écrans, 3 sur grands */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {AnnoncesMock.slice(0, 6).map((a) => (
          <AnnonceCard
            key={a.id} // toujours ajouter une key ici
            id={a.id}
            titre={a.titre}
            ville={a.ville}
            prix={a.prix}
            images={a.images}
            chambres={a.chambres}
            douches={a.douches}
            surface={a.surface}
          />
        ))}
      </div>
    </section>
  )
}

export default AnnoncesPreview

