import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Filters from '../components/Filters/Filters'
import AllProducts from '../components/AllProducts/AllProducts'

function Homepage() {
    return (
        <div>
            {/* Header */}
            <Header />
            <hr className='border-t-2 text-gray-700 mt-2' />

            {/* navbar */}
            <Navbar />
            <hr className='border-t-2 text-gray-700' />

            {/* 4/5 display banners */}
            <div className='flex flex-row w-[1150px] m-auto h-[550px] bg-red-300 relative'>
                <img
                    className='absolute bottom-10 left-5 w-[400px] h-[430px]'
                    src="/Resources/womenstore.webp"
                    alt="" />
                <img
                    className='absolute bottom-10 left-[440px]  rounded-md w-[312px] h-[291px]'
                    src="/Resources/menstore.webp"
                    alt="" />
                <img
                    className='absolute bottom-10 left-[770px] rounded-md w-[312px] h-[291px]'
                    src="/Resources/kidstore.webp"
                    alt="" />
            </div>

            <div className='flex flex-col w-[1350px] m-auto mt-4'>
                <h1 className='text-3xl font-semibold text-gray-700'>
                    Products For You
                </h1>

                <div className='flex flex-row mt-4'>
                    {/* left filter options */}
                    <Filters />

                    {/* all products */}
                    <AllProducts />
                </div>
            </div>
        </div>
    )
}

export default Homepage