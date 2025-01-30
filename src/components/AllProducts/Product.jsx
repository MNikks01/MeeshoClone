import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../store/Slices/cart/cartSlice.js'

function Product(props) {

    const { productImage, productName, productPrice, productFreeDeliver,
        productRatings, productReviews, productMTrusted, id
    } = props

    const dispatch = useDispatch()
    const handleAddProductToCart = () => {
        dispatch(addProductToCart(props))
    }

    return (
        <div className='w-[231px] border-2 border-gray-200 rounded-lg m-2'>
            <Link to={`/product/${id}`}>
                {/* image */}
                <img
                    src={productImage}
                    alt={productName}
                    className='w-[231px] h-[231px] object-contain'
                />
                {/* product name */}
                <h2 className='text-md font-semibold text-gray-500 w-[200px] m-auto text-center truncate'>{productName}</h2>

                {/* product price */}
                <h2 className='text-3xl font-semibold  text-gray-800 ml-3'>&#8377; {productPrice}</h2>

                {/* product free deliver */}
                <h2 className='text-xs font-semibold w-fit rounded-2xl bg-gray-50 text-gray-500 px-2 py-1 ml-4 mt-1'>{productFreeDeliver ? "Free Delivery" : "No Free Delivery"}</h2>

                <div className='flex flex-row items-center justify-between p-3'>
                    <div className='flex flex-row items-center '>
                        {/* product ratings */}
                        {
                            productRatings >= 4 ?
                                <h2 className='bg-green-600 text-lg font-semibold text-white px-2 py-1 rounded-2xl'>{productRatings}</h2>
                                : productRatings >= 3 ?
                                    <h2 className='bg-white text-lg font-semibold text-blue-600 px-2 py-1 rounded-2xl border-2 border-blue-50'>{productRatings}</h2>
                                    :
                                    <h2 className='bg-orange-600 text-lg font-semibold text-white px-2 py-1 rounded-2xl'>{productRatings}</h2>
                        }
                        {/* product reviews */}
                        <h2 className='text-xs font-semibold text-gray-400 ml-2'>{productReviews.length} reviews</h2>
                    </div>

                    {/* product m-trusted */}
                    {
                        productMTrusted &&
                        <img
                            src="https://www.meesho.com/assets/svgicons/mtrusted.svg"
                            alt="" />
                    }
                </div>
            </Link>

            <button
                onClick={handleAddProductToCart}
                className='bg-purple-900 hover:bg-purple-700 text-white w-full m-auto py-2 rounded-lg'
            >
                Add to Cart
            </button>
        </div>
    )
}

export default Product
