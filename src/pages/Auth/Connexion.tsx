import { t } from 'i18next'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

interface LoginForm {
    email: string
    password: string
}

const Connexion = () => {
    const [form, setForm] = useState<LoginForm>({
        email: '',
        password: ''
    })

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     console.log('Login attempt', form)
    //     // on pourra ensuite envoyer les données au backend
    // }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form), // Assure-toi que `form` contient email et password
    });

    // const contentType = response.headers.get('content-type');
    // const isJson = contentType?.includes('application/json');

    // const data = isJson ? await response.json() : null;
    
        const data = await response.json();

    if (response.ok) {
      console.log('✅ Connexion réussie', data);

      // Exemple : stockage du token
      if (data?.token) {
        localStorage.setItem('token', data.token);
      }

      // Exemple : redirection
      // navigate('/dashboard'); // si tu utilises react-router
    } else {
      const errorMessage = data?.message || 'Erreur inconnue côté serveur';
      console.error('❌ Erreur de connexion', errorMessage);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('🚨 Erreur réseau', error.message);
    } else {
      console.error('🚨 Erreur réseau', error);
    }
  }
};

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   try {
//     const response = await fetch('http://localhost:5000/auth/signin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       console.log('Connexion réussie', data);
//       // Stocker le token si tu en reçois un
//       // Rediriger vers une page protégée
//     } else {
//       console.error('Erreur de connexion', data.message);
//     }
//   } catch (error) {
//     console.error('Erreur réseau', error);
//   }
// };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const { lng } = useParams<{ lng: string }>();
    return (
        <div className="mt-24 px-4 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-600">{t('connexion.connexion')}</h2>

            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl px-8 py-10 space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder={t('connexion.vmail')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">{t('connexion.mdp')}</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        placeholder={t('connexion.Vmdp')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                >
                    {t('connexion.seConn')}
                </button>
                <p className="text-sm text-center text-gray-600">
                    {t('connexion.pasCompte')}{" "}
                    <Link to={`/${lng}/inscription`} className="text-green-600 hover:underline font-semibold">
                        {t('connexion.clique')}
                    </Link>
                </p>

            </form>
        </div>
    )
}

export default Connexion
