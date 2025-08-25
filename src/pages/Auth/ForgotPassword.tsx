import { t } from 'i18next';
import React, { useState } from 'react'

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            setMessage(data.message || 'Email envoyé si le compte existe');
        } catch (err) {
            setMessage('Erreur réseau');
        }
    };
    return (
        <div className="mt-24 px-4 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
                {t('forgotPassword.titre')}
            </h2>

            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl px-8 py-10 space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('forgotPassword.label')}
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder={t('forgotPassword.placeholder')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    />
                </div>

                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
                    {t('forgotPassword.bouton')}
                </button>
                {message && (
                    <p className="text-sm text-center text-green-600 mt-2 animate-fade-in">
                        {message}
                    </p>
                )}
            </form>
        </div>

    );
};
export default ForgotPassword;