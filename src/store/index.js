import thunk from 'redux-thunk'
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {authSlice} from './slices/authSlice'
import {usersSlice} from './slices/usersSlice'

const reducer = combineReducers({
    auth: authSlice.reducer,
    users: usersSlice.reducer
})

export const store = configureStore({
    reducer,
    middleware: [thunk]
})