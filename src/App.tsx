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
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function LocaleWrapper() {
  const { i18n } = useTranslation();
  const { lng } = useParams<{ lng: string }>();
  const location = useLocation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  if (!lng || !['en', 'fr'].includes(lng)) {
    return <Navigate to={`/en${location.pathname}`} replace />;
  }

  return (
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
      {/* Fallback for undefined routes */}
      <Route path="*" element={<Navigate to={`/${lng}/`} replace />} />
    </Routes>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/fr/" replace />} />
        <Route path=":lng/*" element={<LocaleWrapper />} />
      </Routes>
    </Layout>
  );
}

export default App;

// import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
// import './App.css'
// import Layout from './layouts/Layout'
// import Annonces from './pages/Annonce/Annonces'
// import Home from './pages/Home/Home'
// import AnnonceDetail from './pages/Annonce/AnnonceDetail';
// import Inscription from './pages/Auth/Inscription';
// import Connexion from './pages/Auth/Connexion';
// import APropos from './pages/About/APropos';
// import Contact from './pages/Contact/Contact';
// import CGU from './pages/CGU/CGU';
// import MentionsLegales from './pages/LegalMetion/MentionsLegales';
// import Confidentialite from './pages/Confidentiality/Confidentiality';
// import { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';


// function LocaleWrapper() {
//   const { i18n } = useTranslation();
//   const { lng } = useParams<{ lng: string }>();
//   const location = useLocation();

//   useEffect(() => {
//     if (lng && i18n.language !== lng) {
//       i18n.changeLanguage(lng);
//     }
//   }, [lng, i18n]);

//   if (!lng || !['en', 'fr'].includes(lng)) {
//     return <Navigate to={/en${location.pathname}} replace />;
//   }

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/acceuil" element={<Home />} />
//       <Route path="/annonces" element={<Annonces />} />
//       <Route path="/annonce/:id" element={<AnnonceDetail />} />
//       <Route path="/à propos" element={<APropos />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/connexion" element={<Connexion />} />
//       <Route path="/inscription" element={<Inscription />} />
//       <Route path="/cgu" element={<CGU />} />
//       <Route path="/mentions-legales" element={<MentionsLegales />} />
//       <Route path="/confidentialite" element={<Confidentialite />} />
//     </Routes>
//   );
// }

// function App() {

//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Navigate to="/en/" replace />} />
//         <Route path=":lng/*" element={<LocaleWrapper />} />
//       </Routes>
//     </Layout>

//   )
// }

// export default App