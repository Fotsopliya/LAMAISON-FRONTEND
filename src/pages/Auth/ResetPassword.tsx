import { t } from 'i18next';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';


const ResetPassword: React.FC = () => {
    const { token } = useParams<{ token: string }>();
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirm) {
            setMessage('Les mots de passe ne correspondent pas');
            return;
        }
        setLoading(true);
        try {

            const res = await fetch(`http://localhost:5000/auth/reset-password/${token}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });
            const data = await res.json();
            setMessage(data.message || 'Mot de passe réinitialisé');
        } catch (err) {
            setMessage('Erreur réseau');
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-24 px-4 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
                {t('resetPassword.titre')}
            </h2>

            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl px-8 py-10 space-y-6">
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('resetPassword.nouveau')}
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        placeholder={t('resetPassword.placeholder')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    />
                </div>
                <div>
                    <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('resetPassword.confirm')}
                    </label>
                    <input
                        type="password"
                        name="confirm"
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)}
                        required
                        placeholder={t('resetPassword.placeholderConfirm')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
                    {loading ? t('resetPassword.chargement') : t('resetPassword.bouton')}
                </button>
                {message && (
                    <p className="text-sm text-center text-red-600 mt-2 animate-fade-in">
                        {message}
                    </p>
                )}
            </form>
        </div>

    );
};
export default ResetPassword;