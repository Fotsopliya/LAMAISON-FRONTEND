import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar: React.FC = () => {
    return (
       
            <div className='absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 py-4 bg-green-600 backdrop-blur-sm'>
               <a href ="/" title="retour à la page d'accueil"><img className='h-10 w-30' src={logo} alt='logo'></img></a>
                 <div>
                    <nav className='space-x-4 text-sm hidden md:block text-white'>
                        <a href="/acceuil">Acceuil</a>
                        <a href="/annonces">Annonces</a>
                        <a href="#">À propos </a>
                        <a href="#">Contact</a>
                        <a href="/inscription">Connexion</a>
                    </nav>
                 </div>
             </div>
       
    )
}

export default Navbar