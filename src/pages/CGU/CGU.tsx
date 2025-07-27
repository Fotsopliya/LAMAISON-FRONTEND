import { t } from 'i18next'
import React from 'react'

const CGU: React.FC= () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-4"> {t('CGU.title')}</h1>
      <p className="mb-4">
         {t('CGU.intro')}
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2"> {t('CGU.body1')}</h2>
      <p className="mb-4">
         {t('CGU.body2')}
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2"> {t('CGU.body3')}</h2>
      <p className="mb-4">
         {t('CGU.body4')}
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2"> {t('CGU.body5')}</h2>
      <p className="mb-4">
        {t('CGU.body6')}
      </p>
    </div>
  )
}

export default CGU
