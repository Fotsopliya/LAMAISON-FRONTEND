import React from 'react'
// Import des composants nécessaires du carousel Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
// Import des modules pour les fonctionnalités avancées de Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// Import du CSS global de Swiper pour le style par défaut du slider
import 'swiper/swiper-bundle.css'
// Import du mock d'annonces (tes données factices)
import { AnnoncesMock } from '../../lib/mock'
// Import Link pour naviguer vers la page détail sans recharger la page
import { Link, useParams } from 'react-router-dom'
// Import de l'image statique qui sera affichée sur la première slide
import heroImage from '../../assets/img/hero.jpg'
import { useTranslation } from 'react-i18next'


const HeroSection: React.FC = () => {
  const {t}= useTranslation();
  const { lng } = useParams<{ lng: string }>();
  return (
    // Conteneur principal du Hero, relatif pour positionner les enfants absolus
    <div className="relative h-[500px] w-full overflow-hidden">
      
      {/* Swiper : composant principal du slider */}
      <Swiper
        // On passe les modules qu'on veut activer dans Swiper : lecture automatique, pagination, navigation (flèches)
        modules={[Autoplay, Pagination, Navigation]}

        // Espace entre chaque slide (en pixels)
        spaceBetween={30}

        // Permet de centrer le slide actif
        centeredSlides={true}

        // Configuration de l'autoplay (défilement automatique)
        autoplay={{
          delay: 5000,          // délai entre chaque slide en ms (ici 5 secondes)
          disableOnInteraction: false,  // continue l'autoplay même après interaction utilisateur
        }}

        // Pagination cliquable : les petits points sous le slider sont interactifs
        pagination={{ clickable: true }}

        // Ajout des flèches de navigation à droite et gauche
        navigation

        // Classes CSS pour dimensionner et positionner le slider
        className="absolute inset-0 w-full h-full z-0 rounded-lg"
      >

        {/* Premier slide statique qui ne vient pas du mock, c’est un slide d’accueil */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            {/* Image de fond statique */}
            <img
              src={heroImage}  // Image d’accueil
              alt="Hero"
              className="w-full h-full object-cover" // Pour que l’image prenne toute la taille et garde ses proportions
            />
            {/* Overlay foncé semi-transparent pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-black/50" />
            {/* Contenu texte centré verticalement et horizontalement */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('heroSection.title')}
              </h1>
              <p className="text-lg md:text-xl mb-6">
               {t('heroSection.desc')}
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Ensuite on boucle sur les 5 premières annonces du mock pour créer les slides dynamiques */}
        {AnnoncesMock.slice(0, 5).map((annonce) => (
          <SwiperSlide key={annonce.id}>
            <div className="relative w-full h-full">
              {/* Image principale de l’annonce */}
              {/* IMPORTANT : ici on suppose que 'images' est un tableau d’images. Si on a juste 'image', remplacer par 'annonce.image' */}
              <img
                src={annonce.images ? annonce.images[0] : annonce.images} // Affiche la première image si plusieurs, sinon l’image simple
                alt={annonce.titre}
                className="w-full h-full object-cover"
              />
              {/* Overlay foncé pour contraste */}
              <div className="absolute inset-0 bg-black/50" />
              {/* Contenu texte et bouton centré */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{annonce.titre}</h1>
                <p className="text-lg md:text-xl mb-6">
                  {annonce.ville} - {annonce.prix} FCFA
                </p>
                {/* Bouton cliquable qui emmène à la page détail de l’annonce */}
                <Link
                  to={`/${lng}/post/${annonce.id}`}  // Navigation SPA (pas de reload)
                  className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  {t('heroSection.btn')}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default HeroSection

// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import 'swiper/swiper-bundle.css'
// import { AnnoncesMock } from '../../lib/mock'
// import { Link } from 'react-router-dom'
// import heroImage from '../../assets/img/hero.jpg'

// const HeroSection: React.FC = () => {
//   return (
//     <div className="relative h-[500px] w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation
//         className="absolute inset-0 w-full h-full z-0 rounded-lg"
//       >
//         {/* Premier slide statique avec texte d'accueil */}
//         <SwiperSlide>
//           <div className="relative w-full h-full">
//             {/* Image de fond statique, tu peux remplacer hero.jpg par ta vraie image */}
//             <img
//               src={heroImage}  // Remplace par ton image d'accueil
//               alt="Hero"
//               className="w-full h-full object-cover"
//             />
//             {/* Overlay foncé */}
//             <div className="absolute inset-0 bg-black/50" />
//             {/* Texte centré */}
//             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
//               <h1 className="text-4xl md:text-5xl font-bold mb-4">Trouvez le bien immobilier idéal</h1>
//               <p className="text-lg md:text-xl mb-6">Avec LAMAISON, explorez des milliers d’annonces en un clic.</p>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Les 5 slides d'annonces */}
//         {AnnoncesMock.slice(0, 5).map((annonce) => (
//           <SwiperSlide key={annonce.id}>
//             <div className="relative w-full h-full">
//               <img
//                 src={annonce.images ? annonce.images[0] : annonce.images} // adapte selon ton mock
//                 alt={annonce.titre}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50" />
//               <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
//                 <h1 className="text-3xl md:text-5xl font-bold mb-4">{annonce.titre}</h1>
//                 <p className="text-lg md:text-xl mb-6">{annonce.ville} - {annonce.prix} FCFA</p>
//                 <Link
//                   to={`/annonce/${annonce.id}`}
//                   className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
//                 >
//                   Voir l'annonce
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }

// export default HeroSection

// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import 'swiper/swiper-bundle.css'
// import { AnnoncesMock } from '../../lib/mock'
// import { Link } from 'react-router-dom'

// const HeroSection: React.FC = () => {
//   return (
//     <div className="relative h-[500px] w-full overflow-hidden">

//       {/* Slider Swiper avec 5 meilleures annonces */}
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation
//         className="absolute inset-0 w-full h-full z-0 rounded-lg"
//       >
//         {AnnoncesMock.slice(0, 5).map((annonce) => (
//           <SwiperSlide key={annonce.id}>
//             {/* Image de fond du slide */}
//             <img
//               src={annonce.images[0]}  // Première image de l'annonce
//               alt={annonce.titre}
//               className="w-full h-full object-cover"
//             />
//             {/* Overlay foncé pour lisibilité */}
//             <div className="absolute inset-0 bg-black/50" />
//             {/* Contenu au-dessus de l'image */}
//             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
//               <h1 className="text-3xl md:text-5xl font-bold mb-4">{annonce.titre}</h1>
//               <p className="text-lg md:text-xl mb-6">{annonce.ville} - {annonce.prix} FCFA</p>
//               <Link
//                 to={`/annonce/${annonce.id}`}
//                 className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Voir l'annonce
//               </Link>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//     </div>
//   )
// }

// export default HeroSection

// import React from 'react'
// import heroImage from '../../assets/img/hero.jpg'

// const HeroSection: React.FC = () => {
//   return (
//     <div className="relative h-[500px] w-full overflow-hidden">
      
//       {/* Image de fond */}
//       <img
//         src= {heroImage}
//         alt="Hero"
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       />

//       {/*Overlay foncé pour lisibilité */}
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Contenu au-dessus */}
//       <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Trouvez le bien immobilier idéal</h1>
//         <p className="text-lg md:text-xl mb-6">Avec LAMAISON, explorez des milliers d’annonces en un clic.</p>
        
//       </div>
//     </div>
//   )
// }

// export default HeroSection
