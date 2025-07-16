import React from 'react'
import { useParams } from 'react-router-dom'
import { AnnoncesMock } from '../../lib/mock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'



const AnnonceDetail: React.FC = () => {
  const { id } = useParams()
  const a = AnnoncesMock.find((annonce) => annonce.id === Number(id))

  if (!a) {
    return (
      <div className="mt-24 px-4">
        <div className="bg-red-100 text-red-700 p-4 rounded text-center shadow">
          <h1 className="text-lg sm:text-xl font-semibold">Annonce introuvable</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-24 px-4 max-w-4xl mx-auto">
      {/* Carte responsive */}
      <div className="border rounded-lg shadow-sm p-4 md:p-6 flex flex-col gap-4 bg-white">
        {/* Slider Swiper avec plusieurs images */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          className="w-full h-60 sm:h-72 md:h-80 rounded overflow-hidden"
        >
          {a.images.map((img: string, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${a.titre} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Détails texte */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{a.titre}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{a.ville}</p>
        <p className="text-green-600 font-bold text-base sm:text-lg">{a.prix} fcfa</p>
      </div>
    </div>
  )
}

export default AnnonceDetail

// import React from 'react'
// import { useParams } from 'react-router-dom';
// import { AnnoncesMock } from '../../lib/mock';

// const AnnonceDetail: React.FC = () => {
//     const { id } = useParams();

//     const a = AnnoncesMock.find((annonce) => annonce.id === Number(id));

//     // if(!a){
//     //     return (
//     //         <div className="bg-slate-300">
//     //             <h1 className='text-center flex justify-center text-black'>annonce introuvable</h1>
//     //         </div>
//     //     )
//     // }

//     return (
//         <div className='mt-20'>
//             <div key={id} className="border rounded-lg shadow-sm p-4">
//                 <img src={a?.image} alt={a?.titre} className="w-full h-48 object-cover mb-2 rounded" />
//                 <h3 className="text-xl font-semibold">{a?.titre}</h3>
//                 <p className="text-gray-700">{a?.ville}</p>
//                 <p className="text-green-600 font-bold">{a?.prix} fcfa</p>
//             </div>
//         </div>
//     )
// }

// export default AnnonceDetail