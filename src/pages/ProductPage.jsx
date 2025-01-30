import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

function ProductPage() {

    const { productId } = useParams()

    const [product, setproduct] = useState(null)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                const returnedProduct = data.products.find((item) => item.id == productId)
                setproduct(returnedProduct)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [productId])

    return (
        <div>
            {/* Header */}
            <Header />
            <hr className='border-t-2 text-gray-700 mt-2' />

            {/* navbar */}
            <Navbar />
            <hr className='border-t-2 text-gray-700' />

            <div>
                <p>{product?.id}</p>
                <h1>{product?.title}</h1>
                <p>{product?.description}</p>
                <p>{product?.price}</p>
                <p>{product?.rating}</p>
                <p>{product?.stock}</p>
                <p>{product?.brand}</p>
                <p>{product?.category}</p>
            </div>
        </div>
    )
}

export default ProductPage