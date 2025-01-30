import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    // const navOptions = ['Women Ethnic', 'Women Western', 'Men', 'Kids', 'Home & Kitchen', 'Beauty & Health']

    const navOptions = [
        { title: 'Women Ethnic', redirectTo: '/ethnic' },
        { title: 'Women Western', redirectTo: '/western' },
        { title: 'Men', redirectTo: '/men' },
        { title: 'Kids', redirectTo: '/kid' },
        { title: 'Home & Kitchen', redirectTo: '/homeandkitchen' },
        { title: 'Beauty & Health', redirectTo: '/beautyandhealth' },
        { title: 'Logout', redirectTo: '/login' },
    ]

    return (
        <div className='flex flex-row items-center w-[1350px] m-auto mt-1'>
            {
                navOptions.map((item, i) => {
                    return (
                        <Link to={item.redirectTo} key={i}>
                            <p className='text-sm hover:scale-110 mx-3 py-3 font-normal text-gray-800 hover:text-purple-800 hover:cursor-pointer border-b-4 border-white hover:border-purple-800 transition duration-200'>{item.title}</p>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Navbar