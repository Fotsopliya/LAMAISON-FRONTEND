// src/App.tsx
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import './App.css';
import { Layout } from './layouts/Layout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages publiques
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

// i18n
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Dashboards
import DashboardAgent from './pages/Dashboard/Home/DashboardAgent';
import DashboardProspect from './pages/Dashboard/Home/DashboardProspect';
// import DashboardProfile from './pages/Dashboard/Profile/DashboardProfile';
import AnnonceForm from '../src/components/DashboardComponents/AnnonceForm';
import AnnonceList from '../src/components/DashboardComponents/AnnonceList';
import Profile from './pages/Dashboard/Profile/Profile';
import MessagesLayout from './layouts/MessagesLayout';
import RdvLayout from './layouts/RdvLayout';
import RdvProspect from './components/DashboardComponents/AppointmentComponents/RdvProspect';
import RdvAgent from './components/DashboardComponents/AppointmentComponents/RdvAgent';
// import DashboardProfile from '../src/components/DashboardComponents/DashboardProfile';

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

  return (
    <>
      {/*Routes publiques avec Layout global */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Annonces />} />
          <Route path="/post/:id" element={<AnnonceDetail />} />
          <Route path="/about" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Connexion />} />
          <Route path="/signup" element={<Inscription />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/legal-notice" element={<MentionsLegales />} />
          <Route path="/confidentiality" element={<Confidentialite />} />
        </Route>
      </Routes>


      {/*Routes privées Dashboard */}
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Agent */}
          <Route path="agent">
            <Route index element={<DashboardAgent />} />
            <Route path="home" element={<DashboardAgent />} />
            <Route path="annonces" element={<AnnonceList />} />
            <Route path="annonces/new" element={<AnnonceForm />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Prospect */}
          <Route path="prospect">
            <Route index element={<DashboardProspect />} />
            <Route path="home" element={<DashboardProspect />} />
            <Route path="annonces" element={<AnnonceList />} />
            <Route path="annonces/new" element={<AnnonceForm />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* Messagerie */}
          <Route path="/dashboard/messages" element={<MessagesLayout />} />
          <Route path="/dashboard/messages/:id" element={<MessagesLayout />} />
          {/* RDV */}
          <Route path="rdv" element={<RdvLayout />}>
            <Route path="prospect" element={<RdvProspect />} />
            <Route path="agent" element={<RdvAgent />} />
          </Route>
        </Route>
      </Routes>
    </>
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


// import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
// import './App.css';
// import { Layout } from './layouts/Layout';
// import Annonces from './pages/Annonce/Annonces';
// import Home from './pages/Home/Home';
// import AnnonceDetail from './pages/Annonce/AnnonceDetail';
// import Inscription from './pages/Auth/Inscription';
// import Connexion from './pages/Auth/Connexion';
// import APropos from './pages/About/APropos';
// import Contact from './pages/Contact/Contact';
// import CGU from './pages/CGU/CGU';
// import MentionsLegales from './pages/LegalMetion/MentionsLegales';
// import Confidentialite from './pages/Confidentiality/Confidentiality';
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import DashboardAgent from './pages/Dashboard/Home/DashboardAgent';
// import DashboardLayout from './layouts/DashboardLayout';

// function LocaleWrapper() {
//   const { i18n } = useTranslation();
//   const { lng } = useParams<{ lng: string }>();
//   const location = useLocation();
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     if (!lng || !['fr', 'en'].includes(lng)) return;

//     const handleInit = () => setReady(true);

//     if (i18n.isInitialized && i18n.language === lng) {
//       setReady(true);
//     } else {
//       i18n.changeLanguage(lng).then(() => handleInit());
//     }

//     return () => {
//       i18n.off('initialized', handleInit);
//     };
//   }, [lng, i18n]);

//   if (!lng || !['fr', 'en'].includes(lng)) {
//     return <Navigate to={`/en${location.pathname}`} replace />;
//   }

//   if (!ready) {
//     return <div>Chargement des traductions…</div>;
//   }

//   return (
//     <Routes>
//       {/* Routes publiques avec Layout (Navbar + Footer) */}
//       <Route element={<Layout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/posts" element={<Annonces />} />
//         <Route path="/post/:id" element={<AnnonceDetail />} />
//         <Route path="/about" element={<APropos />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Connexion />} />
//         <Route path="/signup" element={<Inscription />} />
//         <Route path="/cgu" element={<CGU />} />
//         <Route path="/legal-notice" element={<MentionsLegales />} />
//         <Route path="/confidentiality" element={<Confidentialite />} />
//       </Route>

//       {/* Routes Dashboard sans Navbar/Footer */}
//       <Route path="/dashboard" element={<DashboardLayout />}>
//         <Route index element={<DashboardAgent />} />
//         <Route path="home" element={<DashboardAgent />} />
//         <Route path="profile" element={<div>Profil en cours...</div>} />
//       </Route>

//       {/* Redirection fallback */}
//       <Route path="*" element={<Navigate to={`/${lng}/`} replace />} />
//     </Routes>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       {/* Redirection initiale vers langue par défaut */}
//       <Route path="/" element={<Navigate to="/fr/" replace />} />

//       {/* Toutes les routes (publiques + dashboard) sous LocaleWrapper */}
//       <Route path=":lng/*" element={<LocaleWrapper />} />
//     </Routes>
//   );
// }

// export default App;



// import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
// import './App.css';
// import { Layout, RequireAuth } from './layouts/Layout';
// import Annonces from './pages/Annonce/Annonces';
// import Home from './pages/Home/Home';
// import AnnonceDetail from './pages/Annonce/AnnonceDetail';
// import Inscription from './pages/Auth/Inscription';
// import Connexion from './pages/Auth/Connexion';
// import APropos from './pages/About/APropos';
// import Contact from './pages/Contact/Contact';
// import CGU from './pages/CGU/CGU';
// import MentionsLegales from './pages/LegalMetion/MentionsLegales';
// import Confidentialite from './pages/Confidentiality/Confidentiality';
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import DashboardAgent from './pages/Dashboard/Home/DashboardAgent';
// import DashboardLayout from './layouts/DashboardLayout';

// function LocaleWrapper() {
//   const { i18n } = useTranslation(); // Accès à l’instance i18next
//   const { lng } = useParams<{ lng: string }>(); // Langue récupérée depuis l’URL
//   const location = useLocation(); // Pour rediriger ou récupérer le chemin actuel
//   const [ready, setReady] = useState(false); // Permet de bloquer le rendu tant que la langue n’est pas chargée

//   useEffect(() => {
//     // Si la langue est invalide, on ne fait rien
//     if (!lng || !['fr', 'en'].includes(lng)) return;

//     const handleInit = () => setReady(true);

//     // Si i18next est déjà prêt avec la bonne langue → rien à faire
//     if (i18n.isInitialized && i18n.language === lng) {
//       setReady(true);
//     } else {
//       // Sinon → on change de langue puis on attend qu’elle soit prête
//       i18n.changeLanguage(lng).then(() => handleInit());
//     }

//     // Nettoyage éventuel (sécurité)
//     return () => {
//       i18n.off('initialized', handleInit);
//     };
//   }, [lng, i18n]);

//   // Si la langue n’est pas présente ou incorrecte → redirection propre vers "/en"
//   if (!lng || !['fr', 'en'].includes(lng)) {
//     return <Navigate to={`/en${location.pathname}`} replace />;
//   }

//   // Si la langue n’est pas encore chargée → on affiche un petit loader
//   if (!ready) {
//     return <div>Chargement des traductions…</div>;
//   }

//   // Les routes traduites dans le contexte de la langue (ex: /fr/contact)
//   return (
//     <>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/posts" element={<Annonces />} />
//           <Route path="/post/:id" element={<AnnonceDetail />} />
//           <Route path="/about" element={<APropos />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Connexion />} />
//           <Route path="/signup" element={<Inscription />} />
//           <Route path="/cgu" element={<CGU />} />
//           <Route path="/legal-notice" element={<MentionsLegales />} />
//           <Route path="/confidentiality" element={<Confidentialite />} />
//           {/* Redirection pour les routes inconnues */}
//           <Route path="*" element={<Navigate to={`/${lng}/`} replace />} />
//         </Routes>
//       </Layout>
// <Routes>
//       <Route path="/dashboard" element={<DashboardLayout />}>
//         <Route index element={<DashboardAgent />} />
//         <Route path="home" element={<DashboardAgent />} />
//         <Route path="profile" element={""} />

//       </Route>
// </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       {/* Redirection initiale vers la langue par défaut */}
//       <Route path="/" element={<Navigate to="/fr/" replace />} />

//       {/* Toutes les routes sont regroupées sous le préfixe langue */}
//       <Route path=":lng/*" element={<LocaleWrapper />} />
//     </Routes>
//   );
// }

// export default App;