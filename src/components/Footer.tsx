import React from 'react'
import logo from '../assets/logo.jpg'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { t } from 'i18next'

 const year = new Date().getFullYear();

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 text-gray-800 mt-16">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                {/* Logo + description */}
                <div>
                    <a href="/" title={t('logo.title')}><img className='h-10 w-30' src={logo} alt='logo'></img></a>

                    <p className="mt-2 text-sm text-gray-600">
                        {t('footer.prosAgen')}
                    </p>
                </div>

                {/* Infos légales */}
                <div>
                    <h3 className="text-base md:text-lg font-semibold mb-2">{t('footer.legal')}</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/cgu">{t('footer.condGen')}</a></li>
                        <li><a href="/mentions-legales">{t('footer.menLeg')}</a></li>
                        <li><a href="/confidentialite">{t('footer.conf')}</a></li>
                    </ul>
                </div>

                {/* Réseaux sociaux */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">{t('footer.suivre')}</h3>
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
                {/* &copy; {new Date().getFullYear()} LAMAISON. Tous droits réservés. */}
                 {t('footer.copyright', { year })}
            </div>
        </footer>
    )
}

export default Footer
