import { t } from 'i18next'
import React from 'react'

const MentionsLegales:React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-4">{t('mentionslegales.title')}</h1>
      <p className="mb-4">
        {t('mentionslegales.intro')}
      </p>
      <p className="mb-4">
        {t('mentionslegales.body1')}
      </p>
      <p className="mb-4">
        Contact : info@lamaison.cm
      </p>
    </div>
  )
}

export default MentionsLegales
