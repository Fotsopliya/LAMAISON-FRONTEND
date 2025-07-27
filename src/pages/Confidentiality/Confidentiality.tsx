import { t } from 'i18next'
import React from 'react'

const Confidentialite:React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-4"> {t('confidentialite.title')}</h1>
      <p className="mb-4">
        {t('confidentialite.intro')}
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t('confidentialite.body1')}</h2>
      <p className="mb-4">
        {t('confidentialite.body2')}
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t('confidentialite.body3')}</h2>
      <p className="mb-4">
        {t('confidentialite.body4')}
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t('confidentialite.body5')}</h2>
      <p className="mb-4">
        {t('confidentialite.body6')}
      </p>
    </div>
  )
}

export default Confidentialite
