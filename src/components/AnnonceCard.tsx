import React from 'react'
import { FaMapMarkerAlt, FaBed, FaShower, FaRulerCombined } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'


type Props = {
  id: number
  titre: string
  ville: string
  prix: number
  images: string[]
  chambres: number
  douches: number
  surface: number
}

const AnnonceCard: React.FC<Props> = ({
  id,
  titre,
  ville,
  prix,
  images,
  chambres,
  douches,
  surface,
}) => {
  return (
    
    <div className="flex flex-col bg-white border rounded-lg shadow-md overflow-hidden transition hover:shadow-lg h-full">

      {/* Swiper avec ratio fixe (aspect-[4/3]) et hauteur constante */}
      <div className="relative w-full h-[220px] sm:h-[250px] md:h-[230px] lg:h-[230px] xl:h-[230px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${titre} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      

      {/* Contenu texte */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-semibold line-clamp-1">{titre}</h3>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            <FaMapMarkerAlt className="text-green-600" /> {ville}
          </p>
          <p className="text-green-600 font-bold text-sm sm:text-base">{prix.toLocaleString()} FCFA</p>
        </div>

        {/* Caractéristiques */}
        <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-3">
          <div className="flex items-center gap-1"><FaBed /> {chambres} ch.</div>
          <div className="flex items-center gap-1"><FaShower /> {douches} sdb</div>
          <div className="flex items-center gap-1"><FaRulerCombined /> {surface} m²</div>
        </div>

        {/* Bouton */}
        <div className="mt-4">
          <Link
            to={`/annonce/${id}`}
            className="inline-block w-full text-center bg-green-600 text-white px-3 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-green-700 transition"
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
// import { FaMapMarkerAlt, FaBed, FaShower, FaRulerCombined } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination } from 'swiper/modules'

// type Props = {
//   id: number
//   titre: string
//   ville: string
//   prix: number
//   images: string[]
//   chambres: number
//   douches: number
//   surface: number
// }

// const AnnonceCard: React.FC<Props> = ({
//   id,
//   titre,
//   ville,
//   prix,
//   images,
//   chambres,
//   douches,
//   surface,
// }) => {
//   return (
//     <div className="flex flex-col bg-white border rounded-lg shadow-md overflow-hidden transition hover:shadow-lg h-full">
      
//       {/* Swiper responsive */}
//       <div className="relative w-full aspect-[4/3]">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation
//           pagination={{ clickable: true }}
//           loop
//           className="w-full h-full"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 alt={`${titre} - ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Contenu bas */}
//       <div className="p-4 flex flex-col flex-grow justify-between">
//         <div className="space-y-1">
//           <h3 className="text-base sm:text-lg font-semibold line-clamp-1">{titre}</h3>
//           <p className="text-gray-600 text-sm flex items-center gap-1 line-clamp-1">
//             <FaMapMarkerAlt className="text-green-600" /> {ville}
//           </p>
//           <p className="text-green-600 font-bold text-sm sm:text-base">{prix.toLocaleString()} FCFA</p>
//         </div>

//         {/* Caractéristiques */}
//         <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-3">
//           <div className="flex items-center gap-1"><FaBed /> {chambres} ch.</div>
//           <div className="flex items-center gap-1"><FaShower /> {douches} sdb</div>
//           <div className="flex items-center gap-1"><FaRulerCombined /> {surface} m²</div>
//         </div>

//         {/* Bouton */}
//         <div className="mt-4">
//           <Link
//             to={`/annonce/${id}`}
//             className="inline-block w-full text-center bg-green-600 text-white px-3 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-green-700 transition"
//           >
//             Voir plus
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AnnonceCard

// import React from 'react'
// import { FaMapMarkerAlt, FaBed, FaShower, FaRulerCombined } from 'react-icons/fa';
// import { Link } from 'react-router-dom'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination } from 'swiper/modules'

// type Props = {
//   id: number
//   titre: string
//   ville: string
//   prix: number
//   images: string[]
//   chambres: number
//   douches: number
//   surface: number
// }

// const AnnonceCard: React.FC<Props> = ({
//   id,
//   titre,
//   ville,
//   prix,
//   images,
//   chambres,
//   douches,
//   surface,
// }) => {
//   return (
//     <div className="border rounded-lg shadow-sm p-4 flex flex-col justify-between h-[460px] bg-white">
      
//       {/* Swiper */}
//       <div className="h-2/3 relative rounded overflow-hidden">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation
//           pagination={{ clickable: true }}
//           loop
//           className="w-full h-full"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 alt={`${titre} - ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Infos bas de carte */}
//       <div className="p-4 flex flex-col justify-between h-full">
        
//           <h3 className="text-lg font-semibold">{titre}</h3>
//           <p className="text-gray-700 text-sm"> <FaMapMarkerAlt className="mr-1" />{ville}</p>
//           <p className="text-green-600 font-bold text-sm">{prix} fcfa</p>
        

//         {/* Caractéristiques */}
//         <div className="flex justify-between text-xs text-gray-600 mt-2">
//           <div><p> <FaBed />{chambres} ch.</p></div>
//           <div><p> <FaShower />{douches} sdb</p></div>
//           <div><p><FaRulerCombined />{surface} m²</p></div>
//         </div>

//         {/* Bouton */}
//         <div className="mt-2 flex items-end">
//           <Link
//             to={`/annonce/${id}`}
//             className="bg-green-600 text-white px-3 py-1 text-xs sm:text-sm rounded hover:bg-green-700"
//           >
//             Voir plus
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AnnonceCard

// // import React from 'react'
// // import { Link } from 'react-router-dom';

// // // Définition des props attendues pour le composant
// // type Props = {
// //     id: number;       // Identifiant unique de l'annonce
// //     titre: string;    // Titre de l'annonce
// //     ville: string;    // Ville où se situe le bien
// //     prix: number;     // Prix du bien
// //     image: string;    // URL ou chemin de l'image principale
// // }

// // // Composant fonctionnel React avec typage TypeScript
// // const AnnonceCard: React.FC<Props> = ({ id, titre, ville, prix, image }: Props) => {
// //     return (
// //         // Conteneur principal de la carte avec styles Tailwind
// //         <div className="border rounded-lg shadow-sm p-4 flex flex-col justify-between h-[400px] ">

// //             {/* Partie haute : affichage de l'image */}
// //             <div className='h-2/3'>
// //                 <img
// //                     src={image}
// //                     alt={titre}
// //                     className="w-full h-full object-cover mb-2 rounded"
// //                 />
// //             </div>

// //             {/* Partie basse : infos texte et bouton */}
// //             <div className='flex justify-between items-center p-2 h-1/3'>

// //                 {/* Bloc texte : titre, ville et prix */}
// //                 <div>
// //                     <h3 className="text-xl font-semibold">{titre}</h3>
// //                     <p className="text-gray-700">{ville}</p>
// //                     <p className="text-green-600 font-bold">{prix} fcfa</p>
// //                 </div>

// //                 {/* Bloc bouton "Voir plus" */}
// //                 <div className='h-full w-[25%] flex items-end justify-center'>

// //                     {/* Ancien lien classique en commentaire, remplacé par Link React Router */}
// //                     {/* <a href={`/annonce/${id}`} className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700">Voir plus</a> */}

// //                     {/* Ancien bouton avec redirection en commentaire */}
// //                     {/* <button
// //                         onClick={() => window.location.href = `/annonce/${id}`}
// //                         className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700 text-sm md:text-base whitespace-nowrap"
// //                     >
// //                         Voir plus
// //                     </button> */}

// //                     {/* Bouton React Router Link pour navigation interne SPA sans rechargement */}
// //                     <Link
// //                         to={`/annonce/${id}`} // URL dynamique vers la page détail
// //                         className="bg-green-600 text-white px-3 py-1 text-xs sm:text-sm md:text-base rounded-[10px] hover:bg-green-700 whitespace-nowrap"
// //                     // "whitespace-nowrap" empêche le texte de casser la ligne
// //                     >
// //                         Voir plus
// //                     </Link>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default AnnonceCard

// // // import React from 'react'
// // // import { Link } from 'react-router-dom';

// // // type Props = {
// // //     id: number;
// // //     titre: string;
// // //     ville: string;
// // //     prix: number;
// // //     image: string;
// // // }
// // // // interface Props {
// // // //   id: number;
// // // //   titre: string;
// // // //   ville: string;
// // // //   prix: number;
// // // //   image: string;
// // // // }
// // // const AnnonceCard: React.FC<Props> = ({ id, titre, ville, prix, image }: Props) => {
// // //     return (
// // //         <div className="border rounded-lg shadow-sm p-4 flex flex-col justify-between h-[400px] ">
// // //             <div className='h-2/3'>
// // //                 <img src={image} alt={titre} className="w-full h-full object-cover mb-2 rounded" />
// // //             </div>
// // //             <div className='flex justify-between items-center p-2 h-1/3'>
// // //                 <div>
// // //                     <h3 className="text-xl font-semibold">{titre}</h3>
// // //                     <p className="text-gray-700">{ville}</p>
// // //                     <p className="text-green-600 font-bold">{prix} fcfa</p>
// // //                 </div>

// // //                 <div className='h-full w-[25%] flex items-end justify-center'>
// // //                     {/* <a href={`/annonce/${id}`} className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700">Voir plus</a> */}

// // //                     {/* {/* <button
// // //                         onClick={() => window.location.href = `/annonce/${id}`}
// // //                         className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700 text-sm md:text-base whitespace-nowrap"
// // //                     >
// // //                         Voir plus
// // //                     </button> */}
// // //                     <Link
// // //                         to={`/annonce/${id}`}
// // //                         className="bg-green-600 text-white px-3 py-1 text-xs sm:text-sm md:text-base rounded-[10px] hover:bg-green-700 whitespace-nowrap"
// // //                     >
// // //                         Voir plus
// // //                     </Link>
// // //                 </div>
// // //             </div >
// // //         </div >

// // //     )
// // // }

// // // export default AnnonceCard
