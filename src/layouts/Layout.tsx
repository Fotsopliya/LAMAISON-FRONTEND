import React, { type ReactNode } from 'react'
import Navbar from '../components/Navbar'

type PageProps = {
    children?: ReactNode

}

const Layout = ({ children }: PageProps) => {
    return (
        <>
            
                <Navbar/>
            
            <main className=''>
                {children}
            </main>
           <div className="fixed bottom-0">footer</div>
        </>
    )
}

export default Layout
