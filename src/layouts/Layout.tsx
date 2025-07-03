import React, { type ReactNode } from 'react'
import Navbar from '../components/Navbar'

type PageProps = {
    children?: ReactNode

}

const Layout = ({ children }: PageProps) => {
    return (
        <div className=''>
            <div className=''>
                <Navbar />
            </div>
            <main className='flex-grow'>
                {children}
            </main>
           <div className="fixed bottom-0">footer</div>
        </div>
    )
}

export default Layout
