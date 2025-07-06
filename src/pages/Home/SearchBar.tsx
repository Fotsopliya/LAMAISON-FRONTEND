import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar: React.FC = () => {
    return (
        <form className='flex items-center flex-grow bg-gray-100 rounded-full px-4 py-2 max-w-md'>
            <input 
                type="text"
                placeholder="Rechercher dans LAMAISON"
                className="bg-transparent w-full  px-4 py-2 outline-none" 
            />
            <button 
                type="submit"
                className="bg-green-600 text-white p-2 rounded-[10px] hover:bg-green-700"
            >
                <FaSearch/>
            </button>
        </form>
    )
}

export default SearchBar

