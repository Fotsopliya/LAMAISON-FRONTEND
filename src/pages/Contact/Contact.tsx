import { t } from 'i18next'
import React, { useState } from 'react'

interface ContactForm {
  nom: string
  email: string
  message: string
}

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    nom: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Message envoyé !', form)
    // Optionnel : envoi vers backend ou API email
  }

  return (
    <div className="mt-24 px-4 max-w-xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">{t('contact.contact')}</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl px-8 py-10 space-y-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium mb-1">
            {t('rdvModal.nom')}
          </label>
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
            placeholder={t('contact.comN')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:outline-none focus:border-green-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder={t('contact.Vemail')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:outline-none focus:border-green-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder={t('contact.expN')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:outline-none focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
        >
          {t('contact.envyM')}
        </button>
      </form>
    </div>
  )
}

export default Contact
