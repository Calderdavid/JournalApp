import {legacy_createStore as createStore, combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(reducers);









// import { configureStore } from '@reduxjs/toolkit'
// import { authSlice } from './slices/authSlice';



// export const store = configureStore({
//     reducer: {
//         auth: authSlice.reducer
//     }
// })


