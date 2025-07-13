import React from 'react'
import { Link } from 'react-router-dom';

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
        <div className="border rounded-lg shadow-sm p-4 flex flex-col justify-between h-[400px] ">
            <div className='h-2/3'>
                <img src={image} alt={titre} className="w-full h-full object-cover mb-2 rounded" />
            </div>
            <div className='flex justify-between items-center p-2 h-1/3'>
                <div>
                    <h3 className="text-xl font-semibold">{titre}</h3>
                    <p className="text-gray-700">{ville}</p>
                    <p className="text-green-600 font-bold">{prix} fcfa</p>
                </div>

                <div className='h-full w-[25%] flex items-end justify-center'>
                    {/* <a href={`/annonce/${id}`} className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700">Voir plus</a> */}

                    {/* {/* <button
                        onClick={() => window.location.href = `/annonce/${id}`}
                        className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700"
                    >
                        Voir plus
                    </button> */}
                    <Link
                        to={`/annonce/${id}`}
                        className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700"
                    >
                        Voir plus
                    </Link>
                </div>
            </div >
        </div >

    )
}

export default AnnonceCard
