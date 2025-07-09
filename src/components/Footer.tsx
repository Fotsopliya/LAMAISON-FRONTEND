import React from 'react'
import logo from '../assets/logo.jpg'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 text-gray-800 mt-16">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo + description */}
                <div>
                    <a href="/" title="retour à la page d'accueil"><img className='h-10 w-30' src={logo} alt='logo'></img></a>

                    <p className="mt-2 text-sm text-gray-600">
                        Plateforme immobilière entre particuliers et professionnels.
                    </p>
                </div>

                {/* Infos légales */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Légal</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/cgu">Conditions générales</a></li>
                        <li><a href="/mentions-legales">Mentions légales</a></li>
                        <li><a href="/confidentialite">Confidentialité</a></li>
                    </ul>
                </div>

                {/* Réseaux sociaux */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-600 hover:text-green-600"><FaFacebookF /></a>
                        <a href="#" className="text-gray-600 hover:text-green-600"><FaInstagram /></a>
                        <a href="#" className="text-gray-600 hover:text-green-600"><FaWhatsapp /></a>
                        <a href="#" className="text-gray-600 hover:text-green-600"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Bas de page */}
            <div className="bg-gray-200 text-center text-sm py-4 mt-4">
                &copy; {new Date().getFullYear()} LAMAISON. Tous droits réservés.
            </div>
        </footer>
    )
}

export default Footer
