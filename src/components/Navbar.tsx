import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
  // État local qui gère si le menu mobile est ouvert (true) ou fermé (false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Fonction pour inverser l'état du menu (ouvrir/fermer)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const {t}= useTranslation();
  return (
    <header className="bg-green-600 backdrop-blur-sm text-white fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" title={t('logo.title')}>
          <img className="h-10 w-auto" src={logo} alt="logo" />
        </a>
        <div className="flex md:gap-4 items-center gap-4 ">
            <LanguageSwitcher />
          
          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 text-sm items-center">
            <a href="/accueil">{t('navbar.acc')}</a>
            <a href="/annonces">{t('navbar.ann')}</a>
            <a href="/à propos">{t('navbar.aprop')}</a>
            <a href="/contact">{t('navbar.cont')}</a>
            <a href="/connexion" className="text-xl">
              <FaUserCircle />
            </a>
          </nav>
        

        {/* Icône burger visible uniquement sur mobile (md:hidden) */}
      
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3 bg-green-600 text-sm">
          <a href="/accueil" className="block">{t('navbar.acc')}</a>
          <a href="/annonces" className="block">{t('navbar.ann')}</a>
          <a href="/à propos" className="block">{t('navbar.aprop')}</a>
          <a href="/contact" className="block">{t('navbar.cont')}</a>
          <a href="/connexion" className="block">{t('navbar.connex')}
          </a>
        </div>

      )}

    </header>
  )
}

export default Navbar
