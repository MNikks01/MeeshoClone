import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProductFromCart } from '../../store/Slices/cart/cartSlice'

function CartItem(props) {

    const { productId, productName, productImage, productPrice,
        productFreeDeliver, productMTrusted, productRatings,
        productReviews } = props

    const dispatch = useDispatch()
    const handleRemoveProduct = () => {
        dispatch(removeProductFromCart(productId))
    }

    return (
        <div className='flex flex-row items-center border-2 border-gray-200 rounded-lg p-2 m-3 '>
            {/* image */}
            <img
                src={productImage}
                alt={productName}
                className='w-[200px] h-[200px] object-contain'
            />

            {/* product info */}
            <div className='w-[470px]'>

                {/* product name */}
                <h1 className='text-xl font-semibold mb-2'>{productName}</h1>

                {/* product price */}
                <h1 className='text-3xl font-semibold text-orange-600 mb-2'>&#8377; {productPrice}</h1>

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

                <div className='flex flex-row items-center'>
                    {/* product m-trusted */}
                    {
                        productMTrusted &&
                        <img
                            src="https://www.meesho.com/assets/svgicons/mtrusted.svg"
                            alt=""
                            className='w-[70px] mr-3'
                        />
                    }

                    {/* product free deliver */}
                    <h2 className='text-xs font-semibold w-fit rounded-2xl bg-gray-50 text-gray-500 px-2 py-1 ml-4 mt-1'>{productFreeDeliver ? "Free Delivery" : "No Free Delivery"}</h2>
                </div>

            </div>

            {/* remove button */}
            <button onClick={handleRemoveProduct} className='w-[130px] h-[40px] bg-red-600 hover:bg-red-800 transition duration-150 text-white text-xl font-semibold ml-4 rounded-lg'>Remove</button>
        </div>
    )
}

export default CartItem