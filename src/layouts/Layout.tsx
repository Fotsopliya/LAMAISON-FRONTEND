import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import  {Outlet}  from 'react-router-dom'

// Déclare le type des propriétés (props) attendues par Layout
// Ici, 'children' est le contenu dynamique qu'on va afficher entre Navbar et Footer
// type PageProps = {
//     children: ReactNode // Représente n'importe quel contenu JSX : texte, composants, etc.
// }


// Déclaration du composant 'Layout' en tant que Functional Component (React.FC)
// Il reçoit des props de type PageProps et on extrait 'children' directement
// const Layout: React.FC<PageProps> = ({ children }: PageProps) => {

const Layout: React.FC = () => {
    return (
        <>

            <Navbar />
            <main className='flex-grow'>
                {/* {children} */}
                 <Outlet /> {/*C’est ici que les pages (Home, Annonces, etc.) vont s’afficher */}
            </main>
            <Footer />
        </>
    )
}


export default Layout
