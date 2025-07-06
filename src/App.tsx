import { Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './layouts/Layout'
import Annonces from './pages/Annonce/Annonces'
import Home from './pages/Home/Home'

function App() {

  return (
    <Layout>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/annonces" element={<Annonces />} />
        {/* <Route path="/annonce/:id" element={<AnnonceDetail />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} /> */}


      </Routes>
    </Layout>

  )
}

export default App
