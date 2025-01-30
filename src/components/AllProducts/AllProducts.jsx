import React, { useEffect, useState } from 'react'
import Product from './Product'

function AllProducts() {

    const [allProducts, setallProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setallProducts(data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <div className='w-[1000px] h-screen flex flex-row flex-wrap'>
            {
                allProducts.map((item, i) => {
                    return (
                        <Product
                            key={i}
                            productImage={item.images[0]}
                            productName={item.title}
                            productPrice={item.price}
                            productFreeDeliver={true}
                            productRatings={item.rating}
                            productReviews={item.reviews}
                            productMTrusted={item.images.length < 3 ? true : false}
                            id={item.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default AllProducts