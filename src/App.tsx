import { Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './layouts/Layout'
import Annonces from './pages/Annonce/Annonces'
import Home from './pages/Home/Home'
import AnnonceDetail from './pages/Annonce/AnnonceDetail';
import Inscription from './pages/Auth/Inscription';
import Connexion from './pages/Auth/Connexion';
import APropos from './pages/About/APropos';
import Contact from './pages/Contact/Contact';
import CGU from './pages/CGU/CGU';
import MentionsLegales from './pages/LegalMetion/MentionsLegales';
import Confidentialite from './pages/Confidentiality/Confidentiality';


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acceuil" element={<Home />} />
        <Route path="/annonces" element={<Annonces />} />
        <Route path="/annonce/:id" element={<AnnonceDetail />} />
        <Route path="/à propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
      </Routes>
    </Layout>

  )
}

export default App
