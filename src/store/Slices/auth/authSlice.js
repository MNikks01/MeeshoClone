import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        accessToken: null,
        refreshToken: null
    },
    reducers: {
        userLogin: (state, action) => {
            state.userId = action.payload
        },
        userLogout: (state, action) => {
            state.userId = null
        },
        userDelete: () => { },
    },
})

export const {
    userLogin, userLogout, userDelete } = authSlice.actions

export default authSlice.reducer