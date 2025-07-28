import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Annonces from './pages/Annonce/Annonces';
import Home from './pages/Home/Home';
import AnnonceDetail from './pages/Annonce/AnnonceDetail';
import Inscription from './pages/Auth/Inscription';
import Connexion from './pages/Auth/Connexion';
import APropos from './pages/About/APropos';
import Contact from './pages/Contact/Contact';
import CGU from './pages/CGU/CGU';
import MentionsLegales from './pages/LegalMetion/MentionsLegales';
import Confidentialite from './pages/Confidentiality/Confidentiality';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function LocaleWrapper() {
  const { i18n } = useTranslation(); // Accès à l’instance i18next
  const { lng } = useParams<{ lng: string }>(); // Langue récupérée depuis l’URL
  const location = useLocation(); // Pour rediriger ou récupérer le chemin actuel
  const [ready, setReady] = useState(false); // Permet de bloquer le rendu tant que la langue n’est pas chargée

  useEffect(() => {
    // Si la langue est invalide, on ne fait rien
    if (!lng || !['fr', 'en'].includes(lng)) return;

    const handleInit = () => setReady(true);

    // Si i18next est déjà prêt avec la bonne langue → rien à faire
    if (i18n.isInitialized && i18n.language === lng) {
      setReady(true);
    } else {
      // Sinon → on change de langue puis on attend qu’elle soit prête
      i18n.changeLanguage(lng).then(() => handleInit());
    }

    // Nettoyage éventuel (sécurité)
    return () => {
      i18n.off('initialized', handleInit);
    };
  }, [lng, i18n]);

  // Si la langue n’est pas présente ou incorrecte → redirection propre vers "/en"
  if (!lng || !['fr', 'en'].includes(lng)) {
    return <Navigate to={`/en${location.pathname}`} replace />;
  }

  // Si la langue n’est pas encore chargée → on affiche un petit loader
  if (!ready) {
    return <div>Chargement des traductions…</div>;
  }

  // Les routes traduites dans le contexte de la langue (ex: /fr/contact)
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/annonces" element={<Annonces />} />
        <Route path="/annonce/:id" element={<AnnonceDetail />} />
        <Route path="/à propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />

        {/* Redirection pour les routes inconnues */}
        <Route path="*" element={<Navigate to={`/${lng}/`} replace />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <Routes>
      {/* Redirection initiale vers la langue par défaut */}
      <Route path="/" element={<Navigate to="/fr/" replace />} />

      {/* Toutes les routes sont regroupées sous le préfixe langue */}
      <Route path=":lng/*" element={<LocaleWrapper />} />
    </Routes>
  );
}

export default App;