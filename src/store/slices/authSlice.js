import { createSlice } from '@reduxjs/toolkit'
import { authReducer } from '../../reducers/authReducer'


export const authSlice = createSlice({

    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        auth: authReducer,
    },
})

// Action creators are generated for each case reducer function
export const { auth } = authSlice.actions
