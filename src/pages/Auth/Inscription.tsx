import React, { useState } from 'react'
interface FormData {
    firstname: string 
    email: string
}
const Inscription = () => {
const [form, setForm] = useState<FormData>({
    firstname:'', 
    email: ''
})
const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
console.log('form submitted', form)
}
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const {name, value} =e.target
setForm(prev => ({
...prev,
[name]: value
}))


}

    return (
        <div className="mt-24 px-4 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Créer un compte</h2>

            <form onSubmit={handleForm} className="bg-white shadow-lg rounded-2xl px-8 py-10 space-y-6">

                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                        Prénom
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={form.firstname}
                        onChange={handleChange}
                        required
                        placeholder="Entrez votre prénom"
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
                        placeholder="Entrez votre email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                >
                    S’inscrire
                </button>
            </form>
        </div>
    )
}

export default Inscription