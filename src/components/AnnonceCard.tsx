import React from 'react'
import { Link } from 'react-router-dom';

// Définition des props attendues pour le composant
type Props = {
    id: number;       // Identifiant unique de l'annonce
    titre: string;    // Titre de l'annonce
    ville: string;    // Ville où se situe le bien
    prix: number;     // Prix du bien
    image: string;    // URL ou chemin de l'image principale
}

// Composant fonctionnel React avec typage TypeScript
const AnnonceCard: React.FC<Props> = ({ id, titre, ville, prix, image }: Props) => {
    return (
        // Conteneur principal de la carte avec styles Tailwind
        <div className="border rounded-lg shadow-sm p-4 flex flex-col justify-between h-[400px] ">

            {/* Partie haute : affichage de l'image */}
            <div className='h-2/3'>
                <img
                    src={image}
                    alt={titre}
                    className="w-full h-full object-cover mb-2 rounded"
                />
            </div>

            {/* Partie basse : infos texte et bouton */}
            <div className='flex justify-between items-center p-2 h-1/3'>

                {/* Bloc texte : titre, ville et prix */}
                <div>
                    <h3 className="text-xl font-semibold">{titre}</h3>
                    <p className="text-gray-700">{ville}</p>
                    <p className="text-green-600 font-bold">{prix} fcfa</p>
                </div>

                {/* Bloc bouton "Voir plus" */}
                <div className='h-full w-[25%] flex items-end justify-center'>

                    {/* Ancien lien classique en commentaire, remplacé par Link React Router */}
                    {/* <a href={`/annonce/${id}`} className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700">Voir plus</a> */}

                    {/* Ancien bouton avec redirection en commentaire */}
                    {/* <button
                        onClick={() => window.location.href = `/annonce/${id}`}
                        className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700 text-sm md:text-base whitespace-nowrap"
                    >
                        Voir plus
                    </button> */}

                    {/* Bouton React Router Link pour navigation interne SPA sans rechargement */}
                    <Link
                        to={`/annonce/${id}`} // URL dynamique vers la page détail
                        className="bg-green-600 text-white px-3 py-1 text-xs sm:text-sm md:text-base rounded-[10px] hover:bg-green-700 whitespace-nowrap"
                    // "whitespace-nowrap" empêche le texte de casser la ligne
                    >
                        Voir plus
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AnnonceCard

// import React from 'react'
// import { Link } from 'react-router-dom';

// type Props = {
//     id: number;
//     titre: string;
//     ville: string;
//     prix: number;
//     image: string;
// }
// // interface Props {
// //   id: number;
// //   titre: string;
// //   ville: string;
// //   prix: number;
// //   image: string;
// // }
// const AnnonceCard: React.FC<Props> = ({ id, titre, ville, prix, image }: Props) => {
//     return (
//         <div className="border rounded-lg shadow-sm p-4 flex flex-col justify-between h-[400px] ">
//             <div className='h-2/3'>
//                 <img src={image} alt={titre} className="w-full h-full object-cover mb-2 rounded" />
//             </div>
//             <div className='flex justify-between items-center p-2 h-1/3'>
//                 <div>
//                     <h3 className="text-xl font-semibold">{titre}</h3>
//                     <p className="text-gray-700">{ville}</p>
//                     <p className="text-green-600 font-bold">{prix} fcfa</p>
//                 </div>

//                 <div className='h-full w-[25%] flex items-end justify-center'>
//                     {/* <a href={`/annonce/${id}`} className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700">Voir plus</a> */}

//                     {/* {/* <button
//                         onClick={() => window.location.href = `/annonce/${id}`}
//                         className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700 text-sm md:text-base whitespace-nowrap"
//                     >
//                         Voir plus
//                     </button> */}
//                     <Link
//                         to={`/annonce/${id}`}
//                         className="bg-green-600 text-white px-3 py-1 text-xs sm:text-sm md:text-base rounded-[10px] hover:bg-green-700 whitespace-nowrap"
//                     >
//                         Voir plus
//                     </Link>
//                 </div>
//             </div >
//         </div >

//     )
// }

// export default AnnonceCard
