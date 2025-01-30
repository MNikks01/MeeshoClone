import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk('', async () => {
    await fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.log(err);
        })
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addProductToCart: (state, action) => {
            // state -> contains the current state
            // action.type -> contains the type of the action
            // action.payload -> contains the data that has been sent
            state.cartItems.push(action.payload)
            // send data to the database
        },
        removeProductFromCart: (state, action) => {
            const index = state.cartItems.findIndex(
                (item) => item.id === action.payload
            )
            state.cartItems.splice(index, 1)
        }
    },
})

export const {
    addProductToCart, removeProductFromCart
} = cartSlice.actions

export default cartSlice