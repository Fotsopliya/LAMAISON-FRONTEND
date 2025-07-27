import { t } from 'i18next'
import React from 'react'

const APropos: React.FC = () => {
  return (
    <div className="mt-24 px-4 max-w-3xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">{t('apropos.title')}</h2>

      <div className="bg-white shadow-lg rounded-2xl px-8 py-10 space-y-5 text-justify leading-relaxed">
        <p>
          <strong>{t('apropos.body7')}</strong> {t('apropos.body1')}<span className="text-green-600 font-semibold"> {t('apropos.body2')} </span> {t('apropos.et')}  <span className="text-green-600 font-semibold"> {t('apropos.body3')} </span> .
          {t('apropos.body4')}
        </p>

        <p>
          {t('apropos.body5')}
        </p>

        <p>
          {t('apropos.body6')} <span className="font-semibold text-yellow-500">{t('apropos.body7')}</span> {t('apropos.body8')}
        </p>
      </div>
    </div>
  )
}

export default APropos
