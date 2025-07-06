import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
    return (
       
            <div className='absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 py-4 bg-green-500 backdrop-blur-sm'>
                <img className='h-10 w-30' src={logo} alt='logo'></img>
                 <div>
                    <nav className='space-x-4 text-sm hidden md:block text-white'>
                        <a href="#">Acceuil</a>
                        <a href="#">Annonces</a>
                        <a href="#">À propos </a>
                        <a href="#">Contact</a>
                        <a href="#">Connexion</a>
                    </nav>
                 </div>
             </div>
       
    )
}

export default Navbar