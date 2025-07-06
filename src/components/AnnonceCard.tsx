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
const AnnonceCard: React.FC<Props> = ({ id, titre, ville, prix, image }: Props) => {
    return (
        <div className="border rounded-lg shadow-sm p-4 flex flex-col justify-between">
            <img src={image} alt={titre} className="w-full h-48 object-cover mb-2 rounded" />
            <div className='flex justify-between items-center p-2'>
                <div>
                    <h3 className="text-xl font-semibold">{titre}</h3>
                    <p className="text-gray-700">{ville}</p>
                    <p className="text-green-600 font-bold">{prix} fcfa</p>
                </div>

                <div className='h-full flex items-end'>
                    <a href={`/annonce/${id}`} className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700">Voir plus</a>
                </div>
            </div >
        </div >

    )
}

export default AnnonceCard