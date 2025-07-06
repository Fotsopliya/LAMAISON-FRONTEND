import React from 'react'
import { useParams } from 'react-router-dom';
import { AnnoncesMock } from '../../lib/mock';

const AnnonceDetail: React.FC = () => {
    const { id } = useParams();

    const a = AnnoncesMock.find((annonce) => annonce.id === Number(id));

    // if(!a){
    //     return (
    //         <div className="bg-slate-300">                
    //             <h1 className='text-center flex justify-center text-black'>annonce introuvable</h1>
    //         </div>
    //     )
    // }

    return (
        <div className='mt-20'>
            <div key={id} className="border rounded-lg shadow-sm p-4">
                <img src={a?.image} alt={a?.titre} className="w-full h-48 object-cover mb-2 rounded" />
                <h3 className="text-xl font-semibold">{a?.titre}</h3>
                <p className="text-gray-700">{a?.ville}</p>
                <p className="text-green-600 font-bold">{a?.prix} fcfa</p>
            </div>
        </div>
    )
}

export default AnnonceDetail