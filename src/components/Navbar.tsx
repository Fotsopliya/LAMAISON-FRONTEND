import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { FaUserCircle } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'



const Navbar: React.FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
   }
    return (

        <div className='relative z-50 flex items-center justify-between px-6 py-4 bg-green-600 backdrop-blur-sm'>
            <a href="/" title="retour à la page d'accueil"><img className='h-10 w-30' src={logo} alt='logo'></img></a>
            <div>
                <nav className='space-x-4 text-sm hidden md:block text-white lg:flex items-center'>
                    <a href="/acceuil">Acceuil</a>
                    <a href="/annonces">Annonces</a>
                    <a href="/à propos">À propos </a>
                    <a href="/contact">Contact</a>
                    <a href="/connexion" className='text-xl'><FaUserCircle/></a>
                </nav>
                <button 
                    onClick={toggleMenu} 
                    className='md:hidden text-2xl text-white '
                >
                    
                    {isMenuOpen ? <FiX/> : <FiMenu/> }
                </button>
            </div>
        </div>

    )
}

export default Navbar