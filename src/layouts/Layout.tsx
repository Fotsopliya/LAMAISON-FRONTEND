import React, { type ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Déclare le type des propriétés (props) attendues par Layout
// Ici, 'children' est le contenu dynamique qu'on va afficher entre Navbar et Footer
type PageProps = {
    children: ReactNode // Représente n'importe quel contenu JSX : texte, composants, etc.


}
// Déclaration du composant 'Layout' en tant que Functional Component (React.FC)
// Il reçoit des props de type PageProps et on extrait 'children' directement
const Layout: React.FC<PageProps> = ({ children }: PageProps) => {
    return (
        <>

            <Navbar />
            <main className='flex-grow'>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout
