import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaArrowDown } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';


const LanguageSwitcher: React.FC= () => {
    const {i18n}= useTranslation()
    const languages = [
        {code: "fr", label: "FR", emoji: "FR"},
        {code: "en", label: "EN", emoji: "EN"}
    ]
    const [open, setOpen]=useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const changeLang = (code: string) => {
       i18n.changeLanguage(code)
       const currentPath = location.pathname
       const newPath = `/${code}${currentPath.startsWith('/en') || 
       currentPath.startsWith('/fr')
       ? currentPath.substring(3)
        : currentPath}`
       navigate(newPath)
    }
    const currentLang = languages.find((l) => l.code === i18n.language)
    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1 text-sm border-none hover:bg-gray-100 hover:text-black"
            >
                {currentLang?.code.toUpperCase()}
                <FaArrowDown size={16} />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-36 bg-white border text-black border-gray-200 rounded shadow-lg z-10">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLang(lang.code)}
                            className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                        >
                             {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSwitcher