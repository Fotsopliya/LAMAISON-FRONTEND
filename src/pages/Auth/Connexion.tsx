import React, { useState } from 'react'

interface LoginForm {
    email: string
    password: string
}

const Connexion = () => {
    const [form, setForm] = useState<LoginForm>({
        email: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Login attempt', form)
        // on pourra ensuite envoyer les données au backend
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="mt-24 px-4 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Connexion</h2>

            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl px-8 py-10 space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Votre email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        placeholder="Votre mot de passe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                >
                    Se connecter
                </button>
                <p className="text-sm text-center text-gray-600">
                    Vous n'avez pas de compte ?{" "}
                    <a href="/inscription" className="text-green-600 hover:underline font-semibold">
                        Cliquez ici
                    </a>
                </p>

            </form>
        </div>
    )
}

export default Connexion
