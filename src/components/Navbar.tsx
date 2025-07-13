import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa'

const Navbar: React.FC = () => {
    // État local qui gère si le menu mobile est ouvert (true) ou fermé (false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  // Fonction pour inverser l'état du menu (ouvrir/fermer)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="bg-green-600 backdrop-blur-sm text-white fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" title="Retour à la page d'accueil">
          <img className="h-10 w-auto" src={logo} alt="logo" />
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-sm items-center">
          <a href="/acceuil">Accueil</a>
          <a href="/annonces">Annonces</a>
          <a href="/à propos">À propos</a>
          <a href="/contact">Contact</a>
          <a href="/connexion" className="text-xl">
            <FaUserCircle />
          </a>
        </nav>

        {/* Icône burger visible uniquement sur mobile (md:hidden) */}
        <div className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
{/* Menu mobile déroulant si menuOpen est true */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-green-600 text-sm">
          <a href="/acceuil" className="block">Accueil</a>
          <a href="/annonces" className="block">Annonces</a>
          <a href="/à propos" className="block">À propos</a>
          <a href="/contact" className="block">Contact</a>
          <a href="/connexion" className="block">Connexion
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
