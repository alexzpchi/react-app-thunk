import { createAsyncThunk } from '@reduxjs/toolkit'
import { login, signup } from '../../api/authService'

const loginThunk = createAsyncThunk('auth/login',
    async (param, thunkApi) => {
        try {
            const data = await login(param)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)
const signupThunk = createAsyncThunk('auth/signup',
    async (param, thunkApi) => {
        try {
            const data = await signup(param)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)

export {loginThunk, signupThunk}