import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import CartItem from '../components/Cart/CartItem'
import { useSelector } from 'react-redux'

function CartPage() {

    const cartItems = useSelector(state => state.cart.cartItems)

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.productPrice, 0
    )

    return (
        <div>
            {/* Header */}
            <Header />
            <hr className='border-t-2 text-gray-700 mt-2' />

            {/* navbar */}
            <Navbar />
            <hr className='border-t-2 text-gray-700' />

            {/* cart data */}
            <div className='flex flex-row w-[1150px] m-auto mt-3'>
                {/* left */}
                <div className='w-[850px]'>

                    <h1 className='text-xl font-semibold mb-2'>Number of Items in your Cart : {cartItems.length}</h1>

                    {/* all the cart items */}
                    <div className='flex flex-col '>

                        {/* one product */}
                        {
                            cartItems.map((item, i) => (
                                <CartItem
                                    key={i}
                                    productId={item.id}
                                    productName={item.productName}
                                    productImage={item.productImage}
                                    productPrice={item.productPrice}
                                    productDescription={item.productDescription}
                                    productFreeDeliver={item.productFreeDeliver}
                                    productMTrusted={item.productMTrusted}
                                    productRatings={item.productRatings}
                                    productReviews={item.productReviews}
                                />
                            ))
                        }

                    </div>
                </div>

                {/* right */}
                <div className='w-[300px] flex flex-col items-center border-2 border-gray-200 rounded-lg py-4 h-fit'>
                    {/* total price */}
                    <h1 className='text-xl font-semibold mb-2'>Total Price</h1>
                    <h2 className='text-3xl text-orange-600 font-bold mb-2'>&#8377; {totalPrice}</h2>
                    <button className='w-[200px] h-[40px] bg-green-600 hover:bg-green-800 transition duration-150 text-white text-xl font-semibold'>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartPage