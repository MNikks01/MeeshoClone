import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";

import { HiOutlineUser } from "react-icons/hi";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const totalProducts = useSelector(state => state.cart.cartItems.length)

    const threeOptions = [
        {
            name: 'Download App',
            icon: <CiMobile4 className='text-xl' />
        },
        {
            name: 'Become a Supplier',
            icon: null
        },
        {
            name: 'Newsroom',
            icon: null
        }
    ]
    const twoOptions = [
        {
            name: 'Profile',
            icon: <HiOutlineUser className='text-xl' />,
            redirectTo: '/',
        },
        {
            name: 'Cart',
            icon: <BsCart className='text-xl' />,
            redirectTo: '/cart',
            CartItemsNo: totalProducts,
        }
    ]

    return (
        <div className='sticky top-0 bg-white z-50 flex flex-row items-center justify-between w-[1350px] m-auto'>
            {/* left */}
            <div className='flex flex-row items-center'>
                {/* logo */}
                <Link to="/home">
                    <img
                        className="w-40 mr-5"
                        src="/public/Resources/meeshoLogo.svg"
                        alt="logo"
                    />
                </Link>

                {/* search bar */}
                <div className='ml-3 flex flex-row items-center border border-gray-400 rounded-sm'>
                    <CiSearch
                        className='text-2xl mx-2'
                    />
                    <input
                        className='w-[350px] h-10 focus:border-none focus:outline-none '
                        type="text"
                        placeholder='Search for products, brands and more'
                    />
                </div>
            </div>

            {/* right */}
            <div>
                {/* 5 threeOptions */}
                <div className='flex flex-row items-center'>
                    {
                        threeOptions.map((option, i) => (
                            <div
                                key={i}
                                className='flex flex-row items-center px-8 py-3 border-r-4 border-gray-300'
                            >
                                {option.icon}
                                <p className='text-md ml-2'>{option.name}</p>
                            </div>
                        ))
                    }
                    {
                        twoOptions.map((option, i) => (
                            <Link to={option.redirectTo} key={i}>
                                <div
                                    className='flex flex-col items-center px-5 py-3 relative'
                                >
                                    {option.icon}
                                    <p className='text-md ml-2'>{option.name}</p>
                                    <h1 className='absolute top-0 right-4 text-white bg-red-600 p-1 rounded-full'>{option?.CartItemsNo}</h1>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header