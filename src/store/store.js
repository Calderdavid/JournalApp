import { combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { configureStore } from '@reduxjs/toolkit'
import devToolsEnhancer from 'remote-redux-devtools';

const reducers = combineReducers({
    auth: authReducer
});

export const store = configureStore({
    reducer: reducers,
    devTools: false,
    enhancers: [devToolsEnhancer({ realtime: true, port: 8000 })]
})

