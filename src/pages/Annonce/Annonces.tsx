import React from 'react'
import { annonces } from './annonces.mock'
import AnnonceCard from './AnnonceCard'

const Annonces = () => {
    return (
        <section className="py-8 px-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">Annonces récentes</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {annonces.map((a) => (
                    <AnnonceCard
                        id={a.id}
                        titre={a.titre}
                        ville={a.ville}
                        prix={a.prix}
                        image={a.image}
                    />
                ))}
            </div>
        </section>

    )
}

export default Annonces