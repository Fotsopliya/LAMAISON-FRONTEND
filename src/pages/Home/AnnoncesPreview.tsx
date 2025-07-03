import React from 'react'
import { annonces } from './home.mock';


const AnnoncesPreview = () => {
    return (
        <section className="py-8 px-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">Annonces récentes</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {annonces.map((a) => (
                    <div key={a.id} className="border rounded-lg shadow-sm p-4">
                        <img src={a.image} alt={a.titre} className="w-full h-48 object-cover mb-2 rounded" />
                        <h3 className="text-xl font-semibold">{a.titre}</h3>
                        <p className="text-gray-700">{a.ville}</p>
                        <p className="text-green-600 font-bold">{a.prix} fcfa</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default AnnoncesPreview
