import { t } from 'i18next'
import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Définition réutilisable
export type DatesSejour = {
  startDate: Date | null
  endDate: Date | null
}

interface DateSejourPickerProps {
  onChange: (dates: DatesSejour) => void
}

const DateSejourPicker: React.FC<DateSejourPickerProps> = ({ onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  useEffect(() => {
    onChange({ startDate, endDate })
  }, [startDate, endDate, onChange])

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow mt-6">
      <h4 className="text-lg font-semibold mb-2 text-gray-800">{t('dateseJourPicker.duree')}</h4>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Date d'arrivée */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('dateseJourPicker.arrivee')}</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className="w-full border px-3 py-2 rounded"
            placeholderText={t('dateseJourPicker.selection')}
          />
        </div>

        {/* Date de départ */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('dateseJourPicker.depart')}</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || new Date()}
            className="w-full border px-3 py-2 rounded"
            placeholderText={t('dateseJourPicker.selection')}
          />
        </div>
      </div>
    </div>
  )
}

export default DateSejourPicker
