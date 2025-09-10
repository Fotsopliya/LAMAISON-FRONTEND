import React from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";
import { Swiper, SwiperSlide } from "swiper/react";
import M1 from "../../assets/img/M1.jpg";
import M2 from "../../assets/img/M2.jpg";
import M3 from "../../assets/img/M3.jpg";
import { Navigation, Pagination } from "swiper/modules";

const AnnonceList: React.FC = () => {
  const location = useLocation();
  const role = location.pathname.includes("prospect") ? "PROSPECT" : "AGENT";

  // Exemple de mock data avec images
  const annonces = [
    {
      id: 1,
      titre: "Maison moderne",
      prix: 250000,
      type: "Maison",
      images: [
        M1,
        M2,
        M3
      ]
    },
    {
      id: 2,
      titre: "Appartement cosy",
      prix: 150000,
      type: "Appartement",
      images: [
        M1,
        M2
      ]
    },
  ];

  return (
    <div className="relative space-y-6 px-4 sm:px-6 lg:px-8">
      {/* Titre */}
      <h1 className="text-2xl font-bold">Mes annonces publiées</h1>

      {/* SearchBar bien visible */}
      <div className="w-full max-w-3xl">
        <SearchBar />
      </div>

      {/* Liste des annonces */}
      <ol className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {annonces.map((annonce) => (
          <li
            key={annonce.id}
            className="border rounded-lg shadow-md bg-white overflow-hidden flex flex-col"
          >
            {/* Carrousel d'images (responsive) */}
            <Swiper spaceBetween={10} slidesPerView={1}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              className="w-full h-full">
              {annonce.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${annonce.titre}-${index}`}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Infos + Actions */}
            <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="font-semibold text-lg">{annonce.titre}</h2>
                <p className="text-sm text-gray-500">{annonce.type}</p>
                <p className="text-gray-700 font-medium">{annonce.prix} FCFA</p>
              </div>

              {/* Actions agent */}
              {role === "AGENT" && (
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm">
                    Modifier
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm">
                    Supprimer
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AnnonceList;
