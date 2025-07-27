import React from 'react'
import { AnnoncesMock } from '../../lib/mock'
import AnnonceCard from '../../components/AnnonceCard'
import SearchBar from '../../components/SearchBar' 
import { t } from 'i18next'

const Annonces: React.FC = () => {
    return (
        <section className="py-8 px-4 mt-14">
            <h2 className="text-2xl font-semibold mb-6 text-center">{t('annonces.tteA')}</h2>

            <div className="px-4 py-8 md:px-0">
                <SearchBar />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {AnnoncesMock.map((a) => (
                    <AnnonceCard
                        key={a.id}
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

export default Annonces

