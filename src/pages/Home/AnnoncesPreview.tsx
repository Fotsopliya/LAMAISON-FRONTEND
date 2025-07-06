import React from 'react'
import { AnnoncesMock } from '../../lib/mock'
import AnnonceCard from '../../components/AnnonceCard';


const AnnoncesPreview: React.FC = () => {
    return (
        <section className="py-8 px-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">Annonces récentes</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {AnnoncesMock.map((a) => (
                    <a href={`/annonce/${a.id}`} key={a.id} className="">
                        <AnnonceCard
                            id={a.id}
                            titre={a.titre}
                            ville={a.ville}
                            prix={a.prix}
                            image={a.image}
                        />
                    </a>
                )).slice(0, 6)}
            </div>
        </section>

    )
}

export default AnnoncesPreview
