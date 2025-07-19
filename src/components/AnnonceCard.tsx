import React from 'react'
import { FaMapMarkerAlt, FaBed, FaShower, FaRulerCombined } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Type des props reçues par la carte
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
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl hover:scale-[1.015] h-full">

      {/* Carrousel Swiper pour les images */}
      <div className="relative w-full h-[220px] sm:h-[250px] md:h-[230px] xl:h-[230px] overflow-hidden">
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

        {/* Badge en haut à droite
        <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
          À saisir
        </div> */}
      </div>

      {/* Contenu textuel */}
      <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
        {/* Titre et ville */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{titre}</h3>
          <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
            <FaMapMarkerAlt className="text-green-600" />
            {ville}
          </p>
        </div>

        {/* Prix */}
        <p className="text-green-600 font-extrabold text-base sm:text-lg">
          {prix.toLocaleString()} FCFA
        </p>

        {/* Caractéristiques */}
        <div className="flex justify-between text-xs sm:text-sm text-gray-600 border-t pt-3">
          <div className="flex items-center gap-1">
            <FaBed className="text-gray-500" /> {chambres} ch.
          </div>
          <div className="flex items-center gap-1">
            <FaShower className="text-gray-500" /> {douches} sdb
          </div>
          <div className="flex items-center gap-1">
            <FaRulerCombined className="text-gray-500" /> {surface} m²
          </div>
        </div>

        {/* Bouton Voir plus */}
        <Link
          to={`/annonce/${id}`}
          className="mt-4 inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
        >
          Voir plus
        </Link>
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

//       {/* Swiper avec ratio fixe (aspect-[4/3]) et hauteur constante */}
//       <div className="relative w-full h-[220px] sm:h-[250px] md:h-[230px] lg:h-[230px] xl:h-[230px] overflow-hidden">
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
      

//       {/* Contenu texte */}
//       <div className="p-4 flex flex-col justify-between flex-grow">
//         <div className="space-y-1">
//           <h3 className="text-base sm:text-lg font-semibold line-clamp-1">{titre}</h3>
//           <p className="text-gray-600 text-sm flex items-center gap-1">
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
