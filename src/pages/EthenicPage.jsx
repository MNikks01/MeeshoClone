import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

function EthenicPage() {
    return (
        <div>
            {/* Header */}
            <Header />
            <hr className='border-t-2 text-gray-700 mt-2' />

            {/* navbar */}
            <Navbar />
            <hr className='border-t-2 text-gray-700' />
        </div>
    )
}

export default EthenicPage