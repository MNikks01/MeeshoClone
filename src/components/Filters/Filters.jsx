import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { categories, gender } from '../../constants/filter';

function Filters() {

    const [filterOptions, setfilterOptions] = useState({
        category: false,
        gender: false
    })
    const handleCategory = () => {
        setfilterOptions(prev => {
            return {
                ...prev,
                category: !prev.category
            }
        })
    }
    const handleGender = () => {
        setfilterOptions(prev => {
            return {
                ...prev,
                gender: !prev.gender
            }
        })
    }

    return (
        <div className='w-[320px] mr-3'>
            {/* sort */}
            <div className='flex flex-row items-center border-2 border-gray-200 px-2 py-2'>
                <h2>Sort By : </h2>
                <select className='w-[230px] '>
                    <option value="">Relevance</option>
                    <option value="">New Arrivals</option>
                    <option value="">Price (High to Low)</option>
                    <option value="">Price (Low to High)</option>
                    <option value="">Ratings</option>
                </select>
            </div>

            {/* filters block */}
            <div className='flex flex-col border-2 border-gray-200 px-2 py-2 mt-4'>
                <h1 className='text-xl'>FILTERS</h1>
                <h2 className='text-xs text-gray-500'>1000+ products</h2>
                <hr className='border-1 border-gray-300 my-3 w-[300px] m-auto' />

                {/* categories checkboxes */}
                <div onClick={handleCategory} className='flex flex-row items-center justify-between my-2 cursor-pointer'>
                    <h3 className='text-lg text-gray-700 font-semibold'>Categories</h3>
                    {
                        filterOptions.category ?
                            <FaAngleUp className='text-lg text-gray-700 font-semibold' />
                            :
                            <FaAngleDown className='text-lg text-gray-700 font-semibold' />
                    }
                </div>
                {/* category options */}
                {
                    filterOptions.category && (
                        <div className='mt-2'>
                            {/* searchbar */}
                            <div className='ml-3 flex flex-row items-center border border-gray-400 rounded-sm w-[280px]'>
                                <CiSearch
                                    className='text-2xl mx-2'
                                />
                                <input
                                    className='w-[220px] h-10 focus:border-none focus:outline-none '
                                    type="text"
                                    placeholder='Search'
                                />
                            </div>

                            {/* all checkboxes */}
                            <div className='px-3 py-3 flex flex-col'>
                                {
                                    categories.map((val, i) => (
                                        <div key={i} className='flex flex-row items-center px-2 py-2'>
                                            <input type="checkbox" className='mr-2' />
                                            <h2 className='text-sm font-semibold text-gray-500'>{val}</h2>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }

                {/* gender buttons */}
                <div onClick={handleGender} className='flex flex-row items-center justify-between my-2 cursor-pointer'>
                    <h3 className='text-lg text-gray-700 font-semibold'>Gender</h3>
                    {
                        filterOptions.gender ?
                            <FaAngleUp className='text-lg text-gray-700 font-semibold' />
                            :
                            <FaAngleDown className='text-lg text-gray-700 font-semibold' />
                    }
                </div>
                {
                    filterOptions.gender && (
                        <div className='flex flex-row items-center flex-wrap'>
                            {
                                gender.map((val, i) => (
                                    <h1 key={i} className='text-lg font-semibold text-gray-500 px-2 py-1 border-2 rounded-2xl mx-2 my-1'>{val}</h1>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Filters