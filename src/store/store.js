import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cart/cartSlice";
import authSlice from "./Slices/auth/authSlice";
import userDataSlice from "./Slices/userData/userDataSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        auth: authSlice,
        userData: userDataSlice.reducer
    } // to connect the slices
})

export { store }