import { t } from 'i18next'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

interface FormData {
  firstname: string
  email: string
  password: string
  role: 'PROSPECT' | 'AGENT' | ''
}

const Inscription = () => {
  const [form, setForm] = useState<FormData>({
    firstname: '',
    email: '',
    password: '',
    role: '',
  })
  const { lng } = useParams<{ lng: string }>();
  const navigate = useNavigate();

  // const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   console.log('form submitted', form)
  // }
  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form), // Assure-toi que `form` contient les bons champs (email, password, etc.)
      });

      // const contentType = response.headers.get('content-type');
      // const isJson = contentType?.includes('application/json');
      // const data = isJson ? await response.json() : null;

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Inscription réussie', data);
        navigate(`/${lng}/login`);

        // Exemple : redirection vers la page de connexion
        // navigate('/login'); // si tu utilises react-router
      } else {
        const errorMessage = data?.message || 'Erreur inconnue côté serveur';
        console.error('❌ Erreur d’inscription', errorMessage);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('🚨 Erreur réseau', error.message);
      } else {
        console.error('🚨 Erreur réseau', error);
      }
    }
  };

  //   const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:5000/auth/signup', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(form),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       console.log('Inscription réussie', data);
  //       // Rediriger vers la page de connexion ou dashboard
  //     } else {
  //       console.error('Erreur d’inscription', data.message);
  //     }
  //   } catch (error) {
  //     console.error('Erreur réseau', error);
  //   }
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="mt-24 px-4 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">{t('inscription.cree')}</h2>

      <form onSubmit={handleForm} className="bg-white shadow-lg rounded-2xl px-8 py-10 space-y-6">
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
            {t('rdvModal.prenom')}
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={form.firstname}
            onChange={handleChange}
            required
            placeholder={t('inscription.entrPre')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder={t('inscription.entrEmail')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            {t('connexion.mdp')}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder={t('inscription.creeMdp')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            {t('inscription.jeSuis')}
          </label>
          <select
            name="role"
            id="role"
            value={form.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          >
            <option value="">{t('inscription.choisirR')}</option>
            <option value="PROSPECT">{t('inscription.prospect')}</option>
            <option value="AGENT">{t('inscription.agent')}</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
        >
          {t('inscription.inscrire')}
        </button>
        <p className="text-sm text-center text-gray-600">
          {t('inscription.acompte')}{" "}
          <Link to={`/${lng}/login`} className="text-green-600 hover:underline font-semibold">
            {t('connexion.clique')}
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Inscription
