import React from 'react'
type Props = {
    id: number;
    titre: string;
    ville: string;
    prix: number;
    image: string;
}
// interface Props {
//   id: number;
//   titre: string;
//   ville: string;
//   prix: number;
//   image: string;
// }
const AnnonceCard = ({ id, titre, ville, prix, image }: Props) => {
    return (
        <div className="border rounded-lg shadow-sm p-4">
            <img src={image} alt={titre} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="text-xl font-semibold">{titre}</h3>
            <p className="text-gray-700">{ville}</p>
            <p className="text-green-600 font-bold">{prix} fcfa</p>
        </div>
    )
}

export default AnnonceCard