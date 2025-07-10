import React, { type ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type PageProps = {
    children: ReactNode

}

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
